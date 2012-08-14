<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">

<script>
    document.domain = 'twitter.com'</script>

<title>${profile_name} (${user_id}) on DiCon</title>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


<link href="${pageContext.request.contextPath}/static/img/favicon.ico" rel="shortcut icon" type="image/x-icon">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core.css" type="text/css" media="screen">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_more.css" type="text/css" media="screen">
<script type="text/javascript" src='${pageContext.request.contextPath}/static/js/core2.js'></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/static/js/ejs_production.js'></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/dojo/1.7.2/dojo/dojo.js"
        data-dojo-config="async: true, parseOnLoad: true"></script>


<script type="text/javascript">
var latest_tweet_id = 0;
var oldest_tweet_id = -1;
var newOrOldFlag = 2;

refreshTweets();
var tweetRefreshTimer = setInterval(refreshTweets, 5000);
setInterval(updateTimestamps, 60000);
var currentTab = "tweets-tab";
getSimilarPeople();

require(["dojo/domReady!"], function() {
    window.onscroll = function(ev) {
        if (document.documentElement.scrollTop) {
            scrollCursor = document.documentElement.scrollTop;
        }
        else {
            scrollCursor = document.body.scrollTop;
        }
        if (scrollCursor <= 240)
            newOrOldFlag = 2;
        else if (document.body.parentNode.scrollHeight == scrollCursor + window.innerHeight) {
            newOrOldFlag = 1;
            if (document.getElementById("tweets-tab").style.display == "block")
                refreshTweets();
        }
        else
            newOrOldFlag = 0;
    };
});

function saveChangedDetails() {
    require(["dojo/dom","dojo/_base/xhr","dojo/domReady!"], function(dom, xhr) {
        xhr.post({
                    url: "/${user_id}/edit",
                    form: dom.byId("edit-details-container"),
                    load: function(response) {
                        console.log("Saved details successfully.");
                        console.log("New details are : " + response);
                    },
                    error: function() {
                        console.log("Error saving details.");
                    },
                    handle: function() {

                    }
                });
    });
}

function refreshTweets() {
    var position;
    if (newOrOldFlag == 0) return;

    require(["dojo/fx","dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(fx, xhr, dom, domConstruct) {
                transitionTabs("tweets-tab");
                xhr.get({
                            url: "/${user_id}/tweets/fetch",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},
                            content: {
                                latest_tweet_id : latest_tweet_id,
                                oldest_tweet_id : oldest_tweet_id,
                                newOrOldFlag : newOrOldFlag
                            },
                            load: function(response) {
                                if (response.length > 0 && response[0]["tweet_id"] > latest_tweet_id)
                                    latest_tweet_id = response[0]["tweet_id"];
                                if (response.length > 0 && (oldest_tweet_id == -1 || response[response.length - 1]["tweet_id"] < oldest_tweet_id))
                                    oldest_tweet_id = response[response.length - 1]["tweet_id"];
                                if (newOrOldFlag == 1) {
                                    position = "last";
                                }
                                else {
                                    position = "first";
                                    response.reverse();
                                }
                                for (var i in response) {
                                    if (response[i]["user_id"] ==${user_id} && response[0]["tweet_id"] == latest_tweet_id) {
                                        dom.byId("profile-tweet-count").innerHTML = parseInt(dom.byId("profile-tweet-count").innerHTML) + 1;
                                    }
                                    response[i]["timestamp_readable"] = makeTimestamp(response[i]["timestamp"]["days"], response[i]["timestamp"]["hours"], response[i]["timestamp"]["minutes"]);
                                    var newTweet = new EJS({url: '${pageContext.request.contextPath}/static/ejs/tweet.ejs'}).render(response[i]);
                                    domConstruct.place(newTweet, dom.byId("stream-list"), position);
                                    fx.wipeIn({ node: dom.byId("stream-item-" + response[i]["tweet_id"]) }).play();
                                }

                                console.log("new tweets = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching json.");
                            },
                            handle: function() {
                                console.log("latest tweet id = " + latest_tweet_id);
                                console.log("oldest tweet id = " + oldest_tweet_id);
                                console.log("new or old flag = " + newOrOldFlag);
                                if (newOrOldFlag == 1)
                                    newOrOldFlag = 0;
                            }
                        });

            });
}

function triggerFollow(btn, id) {
    var triggerURL;
    if (btn.id == "following-button") {
        triggerURL = "/unfollow";
    }
    else if (btn.id == "not-following-button") {
        triggerURL = "/follow";
    }
    else if (btn.id == "edit-button") {
        editDetails();
        return;
    }
    require(["dojo/_base/xhr", "dojo/domReady!"],
            function(xhr) {
                xhr.get({
                            url: "/" + id + triggerURL,
                            load: function(response) {
                                console.log("followed = " + response);
                            },
                            error: function() {
                                console.log("Error following or unfollowing.");
                            },
                            handle: function() {
                                if (btn.id == "following-button") {
                                    btn.id = "not-following-button";
                                    addClass(btn.parentNode, "not-following");
                                    removeClass(btn.parentNode, "following");
                                }
                                else if (btn.id == "not-following-button") {
                                    btn.id = "following-button";
                                    removeClass(btn.parentNode, "not-following");
                                    addClass(btn.parentNode, "following");
                                }
                            }
                        });
            });
}

function editDetails() {
    require(["dojo/dom","dojo/domReady!"], function(dom) {
        clearInterval(tweetRefreshTimer);
        transitionTabs("edit-details-tab");
    });
}

function getFollowingList() {
    require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, dom, domConstruct) {
                clearInterval(tweetRefreshTimer);
                transitionTabs("following-tab");

                xhr.get({
                            url: "/${user_id}/following",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},

                            load: function(response) {
                                domConstruct.empty(dom.byId("stream-list-following"));
                                for (var i in response) {
                                    var followingItem = new EJS({url: '${pageContext.request.contextPath}/static/ejs/userListItem.ejs'}).render(response[i]);
                                    domConstruct.place(followingItem, dom.byId("stream-list-following"), "last");
                                }
                                console.log("following = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching following.");
                            }
                        });

            });
}

function getFollowerList() {
    require([ "dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, dom, domConstruct) {
                clearInterval(tweetRefreshTimer);
                transitionTabs("follower-tab");

                xhr.get({
                            url: "/${user_id}/follower",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},
                            load: function(response) {
                                domConstruct.empty(dom.byId("stream-list-follower"));
                                for (var i in response) {
                                    var followerItem = new EJS({url: '${pageContext.request.contextPath}/static/ejs/userListItem.ejs'}).render(response[i]);
                                    domConstruct.place(followerItem, dom.byId("stream-list-follower"), "last");

                                }
                                console.log("followers = " + response.length);


                            },
                            error: function() {
                                console.log("Error fetching followers.");
                            }
                        });


            });
}

function transitionTabs(destTab) {
    if (currentTab == destTab) return;
    require(["dojo/dom","dojo/fx","dojo/_base/fx","dojo/on","dojo/domReady!"], function(dom, fx, basefx, on) {
        var anim2 = fx.combine([
            fx.slideTo({ node: dom.byId(destTab),left:"0",duration:"500"}),
            basefx.fadeIn({ node: dom.byId(destTab),duration:"500" })
        ]);

        var anim = fx.combine([
            fx.slideTo({ node: dom.byId(currentTab),left:"200",duration:"500"}),
            basefx.fadeOut({ node: dom.byId(currentTab),duration:"500",onEnd:function() {
                        dom.byId(currentTab).style.display = "none";
                        dom.byId(destTab).style.display = "block";
                        currentTab = destTab;
                        anim2.play();
                    } })
        ]);

        anim.play();
    });
}

function highlightTab(selectedOption) {
    require(["dojo/query","dojo/domReady!"], function(query) {
        query(".profile-sidebar-item").removeClass("active");
        addClass(selectedOption.parentNode, "active");
    });
}

require(["dojo/_base/xhr", "dojo/on", "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"], function(xhr, on, dom, query, domConstruct) {
    var hide_searchresults_timeout;
    on(dom.byId("search-query"), "focus", function() {
        clearTimeout(hide_searchresults_timeout);
        query("#global-nav-search").addClass("focus");
        query("#search-query").addClass("focus");

        if (this.value != "" && dom.byId("results-list").childNodes.length != 0)
            dom.byId("search-results-container").style.display = "block";
    });


    on(dom.byId("search-query"), "blur", function() {
        query("#global-nav-search").removeClass("focus");
        query("#search-query").removeClass("focus");
        hide_searchresults_timeout = setTimeout(function() {
            dom.byId("search-results-container").style.display = "none"
        }, 1000);
    });

    on(dom.byId("search-query"), "keyup", function() {
        if (this.value != "")
            searchQuery(this.value);
        else {
            domConstruct.empty(dom.byId("results-list"));
            dom.byId("search-results-container").style.display = "none";
        }
    });

    function searchQuery(search_string) {
        xhr.post({
                    url: "/search.json",
                    handleAs: "json",
                    content: {
                        search_string : search_string
                    },
                    load: function(response) {
                        if (response.length == 0)
                            dom.byId("search-results-container").style.display = "none";
                        else
                            dom.byId("search-results-container").style.display = "block";
                        domConstruct.empty(dom.byId("results-list"));
                        for (var i in response) {
                            var result = new EJS({url: '${pageContext.request.contextPath}/static/ejs/searchResult.ejs'}).render(response[i]);
                            domConstruct.place(result, dom.byId("results-list"));
                        }
                    },
                    error: function() {
                        console.log("Error fetching search results.");
                    }
                });
    }

});

function getSimilarPeople() {

    require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, dom, domConstruct) {

                xhr.get({
                            url: "/${user_id}/similar_ppl",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},

                            load: function(response) {
                                for (var i in response) {

                                    var similarUser = new EJS({url: '${pageContext.request.contextPath}/static/ejs/similarppl.ejs'}).render(response[i]);
                                    domConstruct.place(similarUser, dom.byId("wtf"), "last");

                                }
                                console.log("similar ppl = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching similar ppl");
                            }

                        });
            });
}


function retweet(tweet_id) {
    require(["dojo/_base/xhr", "dojo/on", "dojo/dom", "dojo/query", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, on, dom, query) {


                console.log("retweeting " + tweet_id);
                xhr.post({
                            url: "${user_id}/retweet",
                            handleAs: "json",
                            content: {
                                tweet_id : tweet_id
                            },
                            load: function(response) {
                                console.log("Successfully tweeted : " + response["success"]);
                            },

                            error: function() {
                                console.log("Error sending retweets.");
                            }
                        });

            });
}
</script>


<style id="user-style-${user_id}" class="js-user-style">

    a,
    .btn-link,
    .pretty-link:hover s,
    .pretty-link:hover b,
        /* Account Group */
    .metadata a:hover,
    .account-group:hover .fullname,
    .stats a:hover,
    .stats a:hover strong,
    .profile-modal-header .fullname a:hover,
    .profile-modal-header .username a:hover,
    .story-article:hover .metadata,
    .find-friends-sources li:hover .source,
    .stream-item a:hover .fullname,
    .stream-item .view-all-supplements:hover,
    .tweet .time a:hover,
    .tweet:hover .user-dropdown .mark-as-spam-text,
    .tweet-actions a,
    .tweet .details.with-icn b,
    .stream-item:hover .original-tweet .expand-action-wrapper,
    .opened-tweet.original-tweet  .expand-action-wrapper,
    .stream-item:hover .original-tweet .details b,
    .stream-item.open .original-tweet .details b,
    .simple-tweet:hover .details b,
    .simple-tweet.open .details b,
    .simple-tweet:hover .details .expand-action-wrapper,
    .simple-tweet.open .details .collapse-action-wrapper,
    .simple-tweet:hover .details .simple-details-link,
    .client-and-actions a:hover,
    .dismiss-promoted:hover b,
    .tweet .context .pretty-link:hover s,
    .tweet .context .pretty-link:hover b,
    .list .username a:hover,
    .list-membership-container .create-a-list,
    .list-membership-container .create-a-list:hover,
    .story-header:hover .view-tweets,
    .card .list-details a:hover,
    .card .card-body:hover .attribution,
    .new-tweets-bar,
    .onebox .soccer ul.ticker a:hover,
    .discover-item-actions a,
    .remove-background-btn,
    .stream-item-activity-me .latest-tweet .tweet-row a:hover {
        color: #a6b0b3;
    }

    s,
    .pretty-link:hover s,
    .stream-item-activity-me .latest-tweet .tweet-row a:hover s {
        color: #C9CFD1;
    }

    .tweet .sm-reply,
    .tweet .sm-rt,
    .tweet .sm-fav,
    .tweet .sm-image,
    .tweet .sm-video,
    .tweet .sm-audio,
    .tweet .sm-geo,
    .tweet .sm-in,
    .tweet .sm-trash,
    .tweet .sm-page,
    .tweet .sm-embed,
    .tweet .sm-summary,
    .tweet .sm-chat,
    .tweet .mark-as-spam-flag,
    .tweet .mark-as-spam-silhouette,
    .timelines-navigation .active .profile-nav-icon,
    .timelines-navigation .profile-nav-icon:hover,
    .sm-top-tweet,
    .discover-item .js-action-card-search:hover .sm-search {
        background-color: #a6b0b3;
    }

    body {
        background-position: left 40px;
        background-attachment: fixed;
        background-repeat: repeat;
        background-color: #7a8282;
    }
</style>

<style id="user-style-${user_id}-bg-img" class="js-user-style-bg-img">
    body.user-style- ${user_id} {
        background-image: url(https://si0.twimg.com/profile_background_images/437788738/GRAZIA-SonamKapoor-2584.jpg);
    }
</style>

</head>

<body class="t1 logged-in user-style-${user_id}">

<div class="push-loader" id="pushStateSpinner"></div>

<div class="topbar js-topbar">
    <div id="banners" class="js-banners">

        <div class="banner-outer" id="slow-load-banner" style="display:none;">
            <div class="banner">
                <div class="banner-inside slow-warning">
                    <h5>Twitter.com is loading slowly.</h5>
                    <span class="warning">Hmm, this seems to be taking a while. If problems persist, <a
                            href="javascript:window.location.reload(true);">please reload</a> to try again.</span>
                </div>
            </div>
        </div>
    </div>
    <div class="global-nav" data-section-term="top_nav">
        <div class="global-nav-inner">
            <div class="container">
                <ul class="nav js-global-actions" id="global-actions">
                    <li id="global-nav-home" class="home" data-global-action="home">
                        <a class="js-hover" href="/home" data-component-term="home_nav" data-nav="home">
                            <span class="new-wrapper"><i class="nav-home"></i><i class="nav-new"></i></span> Home
                        </a>
                    </li>

                </ul>
                <i class="bird-topbar-etched"></i>

                <div class="pull-right">
                    <ul class="nav js-global-actions">
                        <li class="people" data-global-action="connect">
                            <a class="js-hover" href="/logout"
                               data-component-term="connect_nav"
                               data-nav="connect">
                                <span class="new-wrapper"><i class="nav-people"></i><i class="nav-new"></i></span>Logout</a>
                        </li>
                    </ul>
                </div>
                <i class="topbar-divider"></i>

                <form class="form-search js-search-form" action="/search" id="global-nav-search">
            <span class="search-icon js-search-action">
              <i class="nav-search" tabindex="0"></i>
            </span>
                    <label class="hidden-elements" for="search-query">Search</label>
                    <input data-focus="false" class="search-input" id="search-query" placeholder="Search" name="q"
                           autocomplete="off" spellcheck="false" tabindex="-1" type="text">
                    <input disabled="disabled" class="search-input search-hinting-input" id="search-query-hint"
                           autocomplete="off" spellcheck="false" type="text">

                    <div id="search-results-container" class="dropdown-menu typeahead" style="display: none; ">
                        <div class="dropdown-caret">
                            <div class="caret-outer"></div>
                            <div class="caret-inner"></div>
                        </div>
                        <div class="dropdown-inner js-typeahead-results">
                            <div class="js-typeahead-saved-searches" style="display: none; ">
                                <ul class="typeahead-items typeahead-searches" data-search-query="harish"></ul>
                            </div>
                            <div class="typeahead-accounts js-typeahead-accounts has-results" style="">
                                <ul id="results-list" class="typeahead-items" data-query="harish">


                                    <%--<li class="js-selectable js-shortcut"><a href="/#!/search/users/harish"
                                                                        data-search-query="harish"
                                                                        data-query-source="typeahead_click"
                                                                        data-shortcut="true">Search all people
                                   for <strong>harish</strong></a></li>--%>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>

            </div>


            <a id="close-all-button" class="close-all-tweets js-close-all-tweets" href="#"
               title="Close all open Tweets">
                <i class="nav-breaker"></i>
            </a>
        </div>
    </div>
</div>
<div class="alert-messages hidden" id="message-drawer">
    <div class="message ">
        <div class="message-inside">
            <span class="message-text"></span><a class="dismiss" href="#">×</a>
        </div>
    </div>
</div>

<div id="page-outer">
<div id="page-container" class="wrapper wrapper-profile">
<div class="module profile-card component" data-component-term="profile_follow_card">
    <div class="flex-module clearfix ">


        <a href="https://si0.twimg.com/profile_images/2325645639/image.jpg" class="profile-picture" target="_blank">
            <img src="data:image/jpeg;base64,${profile_dp}" alt="${profile_name}" class="avatar size128">
        </a>

        <div class="profile-card-inner" data-screen-name="${user_id}" data-user-id="51376979">
            <h1 class="fullname">
                ${profile_name}
            </h1>

            <h2 class="username">
                <span class="screen-name"><s>@</s>${user_id}</span>

            </h2>

            <p class="bio ">${profile_description}</p>

          <span class="url">
            <p class="bio ">${profile_location}</p>
          </span>
            </p>
        </div>
        <div class="profile-card-actions">

            <div class="user-actions btn-group ${profile_status} including" data-user-id="51376979"
                 data-screen-name="${user_id}" data-name="${profile_name}" data-protected="false">

                <button onclick="triggerFollow(this,${user_id});" id="${profile_status}-button"
                        class="js-follow-btn follow-button btn" type="button">
                    <span class="button-text follow-text">Follow</span>
                    <span class="button-text following-text">Following</span>
                    <span class="button-text unfollow-text">Unfollow</span>
                    <span class="button-text edit-text">Edit</span>
                </button>


            </div>
            <ul class="stats js-mini-profile-stats">
                <li><a href="#" data-element-term="tweet_stats"
                       onclick="refreshTweets();tweetRefreshTimer = setInterval(refreshTweets, 5000);"
                       data-nav="profile"><strong id="profile-tweet-count">${profile_tweetCount}</strong> Tweets</a>
                </li>
                <li><a href="#" data-element-term="following_stats" onclick="getFollowingList()"
                       data-nav="following"><strong>${profile_following}</strong> Following</a></li>
                <li><a href="#" data-element-term="follower_stats" onclick="getFollowerList()"
                       data-nav="followers"><strong>${profile_follower}</strong> Followers</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="dashboard">


    <div class="component">
        <div class="module profile-nav">
            <ul class="js-nav-links">
                <li class="active profile-sidebar-item">

                    <a class="list-link" href="#" data-nav="profile"
                       onclick="highlightTab(this);refreshTweets();tweetRefreshTimer = setInterval(refreshTweets, 5000);">Tweets<i

                            class="chev-right"></i></a>
                </li>
                <li class="profile-sidebar-item">
                    <a class="list-link" href="#" data-nav="following" onclick="highlightTab(this);getFollowingList()">Following<i
                            class="chev-right"></i></a>
                </li>
                <li class="profile-sidebar-item">
                    <a class="list-link" href="#" data-nav="followers" onclick="highlightTab(this);getFollowerList()">Followers<i
                            class="chev-right"></i></a>
                </li>


            </ul>
        </div>
    </div>


    <div class="component" data-component-term="similar_user_recommendations">
        <div class="module profile-nav wtf-module js-similar-to-module  has-content">

            <ul>
                <li class="js-sidenav-link" data-name="similarTo">
                    <p class="list-link" style="background-color:#f9f9f9">
                        Similar to ${profile_name}

                    </p>
                </li>
            </ul>

            <div class="flex-module">
                <div style="opacity: 1;" id="wtf" class="dashboard-user-recommendations flex-module-inner"
                     data-section-id="wtf">

                </div>
            </div>

        </div>
    </div>

    <div class="module site-footer ">
        <div class="flex-module">
            <div class="flex-module-inner js-items-container">
                <ul class="clearfix">
                    <li class="copyright">&#169; 2012 DiCon</li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Status</a></li>
                    <li><a href="#">Apps</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Advertisers</a></li>
                    <li><a href="#">Businesses</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="component" id="suggested-users"></div>
<div class="content-main" id="timeline">
    <div id="tweets-tab" style="position:relative;">
        <div class="content-header">
            <div class="header-inner">
                <h2 class="js-timeline-title">Tweets</h2>
            </div>
        </div>
        <ul id="stream-list">
        </ul>
    </div>


    <div id="following-tab" style="position:relative;opacity:0;left:200px;display:none;">
        <div class="content-header">
            <div class="header-inner">
                <h2 class="js-timeline-title">Following
                </h2>
            </div>
        </div>
        <ul id="stream-list-following">
        </ul>
    </div>

    <div id="follower-tab" style="position:relative;opacity:0;left:200px;display:none;">
        <div class="content-header">
            <div class="header-inner">
                <h2 class="js-timeline-title">Followers
                </h2>
            </div>
        </div>
        <ul id="stream-list-follower">
        </ul>
    </div>

    <div class="content-main" id="edit-details-tab" style="position:relative;opacity:0;left:200px;display:none;">
        <div class="content-header">
            <div class="header-inner">
                <h2>Profile</h2>

                <p class="subheader">This information appears on your public profile, search results, and beyond.</p>
            </div>
        </div>
        <form action="/${user_id}/edit" method="post" enctype="multipart/form-data" id="edit-details-container"
              class="content-inner no-stream-end">
            <div id="profile-form" class="form-horizontal">
                <div id="settings-alert-box" class="alert" style="display: none;">
                    <i id="settings-alert-close" class="close"></i>
                </div>
                <input name="authenticity_token" value="6682db2dd8ff40c23fb4265318fd06d67d834a66" type="hidden">
                <input value="PUT" name="_method" type="hidden">
                <fieldset id="profile-image-controls" class="control-group">
                    <label class="control-label" for="profile_image_uploaded_data">Picture</label>

                    <div class="controls">
                        <div class="uploader-avatar clearfix">
                            <img class="avatar size73" id="avatar_preview"
                                 src="data:image/jpeg;base64,${profile_dp}">

                            <div class="uploader-tools">
                                <div class="photo-selector">
                                    <button class="btn" type="button">Choose file</button>
                                    <span class="photo-file-name">No file selected</span>

                                    <div class="image-selector">
                                        <input name="media_file_name" class="file-name" type="hidden">
                                        <input name="media_data_empty" class="file-data" type="hidden">
                                        <input class="file-input" type="file" name="dp">

                                        <div class="swf-container"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </fieldset>
                <hr>
                <fieldset class="control-group">
                    <label class="control-label" for="user_name">Name</label>

                    <div class="controls">
                        <input id="user_name" maxlength="20" name="fullname"
                               value="${profile_name}" type="text">

                        <p>Enter your real name, so people you know can recognize you.</p>
                    </div>
                </fieldset>
                <fieldset class="control-group">
                    <label class="control-label" for="user_location">Location</label>

                    <div class="controls">
                        <input id="user_location" name="location" value="${profile_location}" type="text">

                        <p>Where in the world are you?</p>
                    </div>
                </fieldset>

                <fieldset class="control-group">
                    <label class="control-label" for="user_description">Bio</label>

                    <div class="controls">
                        <textarea class="input-xlarge" id="user_description"
                                  maxlength="160"
                                  name="description">${profile_description}</textarea>

                        <p>About yourself in fewer than <strong>160</strong> characters.</p>
                    </div>
                </fieldset>

                <hr>
                <div class="form-actions">
                    <button id="save-details" class="btn primary-btn" type="submit">Save changes</button>
                </div>
            </div>
        </form>

    </div>
</div>
</body>
</html>
