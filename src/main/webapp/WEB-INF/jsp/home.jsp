<!DOCTYPE html>
<html class="   js">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<title>DiCon Home</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">


<link href="https://twitter.com/favicons/favicon.ico" rel="shortcut icon" type="image/x-icon">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core.css" type="text/css" media="screen"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core.bundle.css" type="text/css"
      media="screen"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_more.bundle.css" type="text/css"
      media="screen"/>

<link rel="canonical" href="https://twitter.com/">


<script src="//ajax.googleapis.com/ajax/libs/dojo/1.7.2/dojo/dojo.js" data-dojo-config="async: true"></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/static/js/ejs_production.js'></script>
<script type="text/javascript">
require(["dojo/_base/xhr", "dojo/on", "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"], function(xhr, on, dom, query, domConstruct) {

    on(dom.byId("new-tweet-textarea"), "blur", function() {
        if (dom.byId("new-tweet-textarea").value == "") {
            query(".tweet-button-container")[0].style.display = "none";
            query("#new-tweet-textarea-container").addClass("condensed");
        }
    });

    on(dom.byId("new-tweet-textarea"), "focus", function() {
        query(".tweet-button-container")[0].style.display = "block";
        query("#new-tweet-textarea-container").removeClass("condensed");
    });

    on(dom.byId("new-tweet-textarea"), "keyup", function() {
        query(".tweet-counter")[0].value = 140 - dom.byId("new-tweet-textarea").value.length;
        if (dom.byId("new-tweet-textarea").value == "" || query(".tweet-counter")[0].value < 0) {
            query("#tweet-button").addClass("disabled");
            query("#tweet-button").removeClass("primary-btn");
        }
        else {
            query("#tweet-button").addClass("primary-btn");
            query("#tweet-button").removeClass("disabled");
        }
    });
    var hide_searchresults_timeout;
    on(dom.byId("search-query"), "focus", function() {
        clearTimeout(hide_searchresults_timeout);
        query("#global-nav-search").addClass("focus");
        query("#search-query").addClass("focus");

        if (this.value != "")
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


require(["dojo/_base/xhr", "dojo/on", "dojo/dom", "dojo/query", "dojo/NodeList-dom", "dojo/domReady!"],
        function(xhr, on, dom, query) {

            on(dom.byId("tweet-button"), "click", function() {
                xhr.post({
                            url: "/${current_user_id}/tweets/new",
                            handleAs: "json",
                            content: {
                                tweet_text : dom.byId("new-tweet-textarea").value.split("\n").join(" ")
                            },
                            load: function(response) {
                                console.log("Successfully tweeted : " + response["tweet_text"]);
                            },
                            handle: function() {
                                dom.byId("new-tweet-textarea").value = "";
                                query("#tweet-button").addClass("disabled");
                                query("#tweet-button").removeClass("primary-btn");
                                query("#new-tweet-textarea-container").addClass("condensed");
                                query(".tweet-button-container")[0].style.display = "none";
                            },
                            error: function() {
                                console.log("Error sending tweets.");
                            }
                        });
            });


        });



var latest_feed_id = 0;
var oldest_feed_id = -1;
var newOrOldFlag = 2;

refreshFeed();
setInterval(refreshFeed, 5000);
setInterval(updateTimestamps, 60000);
getFollowSuggestions();
getTrends();

window.onscroll = function(ev) {
    if (document.documentElement.scrollTop) {
        scrollCursor = document.documentElement.scrollTop;
    }
    else {
        scrollCursor = document.body.scrollTop;
    }
    if (scrollCursor <= 57)
        newOrOldFlag = 2;
    else if (document.body.parentNode.scrollHeight == scrollCursor + window.innerHeight) {

        newOrOldFlag = 1;
        refreshFeed();
    }
    else
        newOrOldFlag = 0;
};

function refreshFeed() {
    var position;
    if (newOrOldFlag == 0) return;
    require(["dojo/fx","dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(fx, xhr, dom, domConstruct) {

                xhr.get({
                            url: "/${current_user_id}/newsfeed",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},
                            content: {
                                latest_feed_id : latest_feed_id,
                                oldest_feed_id : oldest_feed_id,
                                newOrOldFlag : newOrOldFlag
                            },
                            load: function(response) {
                                if (response.length > 0 && response[0]["tweet_id"] > latest_feed_id)
                                    latest_feed_id = response[0]["tweet_id"];
                                if (response.length > 0 && (oldest_feed_id == -1 || response[response.length - 1]["tweet_id"] < oldest_feed_id))
                                    oldest_feed_id = response[response.length - 1]["tweet_id"];
                                if (newOrOldFlag == 1) {
                                    position = "last";
                                }
                                else {
                                    position = "first";
                                    response.reverse();
                                }
                                for (var i in response) {
                                    if (response[i]["user_id"] ==${current_user_id} && response[0]["tweet_id"] == latest_feed_id) {
                                        dom.byId("home-tweet-count").innerHTML = parseInt(dom.byId("home-tweet-count").innerHTML) + 1;
                                    }
                                    response[i]["timestamp_readable"] = makeTimestamp(response[i]["timestamp"]["days"], response[i]["timestamp"]["hours"], response[i]["timestamp"]["minutes"]);
                                    var newFeed = new EJS({url: '${pageContext.request.contextPath}/static/ejs/tweet.ejs'}).render(response[i]);
                                    domConstruct.place(newFeed, dom.byId("stream-list"), position);
                                    fx.wipeIn({ node: dom.byId("stream-item-" + response[i]["tweet_id"]) }).play();

                                }
                                console.log("new feeds = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching json for newsfeeds.");
                            },
                            handle: function() {
                                console.log("latest feed id = " + latest_feed_id);
                                console.log("oldest feed id = " + oldest_feed_id);
                                console.log("new or old flag = " + newOrOldFlag);
                                if (newOrOldFlag == 1)
                                    newOrOldFlag = 0;
                            }
                        });

            });
}

function makeTimestamp(days, hours, minutes) {
    if (days > 1)
        return days + " days ago";
    else if (days == 1)
        return "1 day ago";
    else if (hours > 1)
        return hours + " hours ago";
    else if (hours == 1)
        return "1 hour ago";
    else if (minutes > 1)
        return minutes + " minutes ago";
    else if (minutes == 1)
        return "1 minute ago";
    else return "a few seconds ago";
}

function updateTimestamps() {
   require(["dojo/query","dojo/domReady!"], function(query) {
        var list = query(".js-short-timestamp");
        for (var i = 0; i < list.length; i++) {
            list[i].setAttribute("minutes", parseInt(list[i].getAttribute("minutes")) + 1);

            if (parseInt(list[i].getAttribute("minutes")) == 60) {
                list[i].setAttribute("minutes", 0);
                list[i].setAttribute("hours", parseInt(list[i].getAttribute("hours")) + 1);
            }
            if (parseInt(list[i].getAttribute("hours")) == 24) {
                list[i].setAttribute("hours", 0);
                list[i].setAttribute("days", parseInt(list[i].getAttribute("days")) + 1);
            }
            list[i].innerHTML = makeTimestamp(list[i].getAttribute("days"), list[i].getAttribute("hours"), list[i].getAttribute("minutes"));
        }
    });


}
function getFollowSuggestions() {

    require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, dom, domConstruct) {

                xhr.get({
                            url: "/${current_user_id}/follow_suggestions",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},

                            load: function(response) {
                                domConstruct.empty(dom.byId("wtf"));
                                for (var i in response) {

                                    var followSuggestion = new EJS({url: '${pageContext.request.contextPath}/static/ejs/similarppl.ejs'}).render(response[i]);
                                    domConstruct.place(followSuggestion, dom.byId("wtf"), "last");

                                }
                                console.log("follow suggestions = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching follow suggestions.");
                            }

                        });
            });
}

function getTrends() {

    require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
            function(xhr, dom, domConstruct) {

                xhr.get({
                            url: "/trends",
                            handleAs: "json",
                            headers: { "Accept": "application/json"},

                            load: function(response) {
                                domConstruct.empty(dom.byId("trend-list"));
                                for (var i in response) {

                                    var trendItem = new EJS({url: '${pageContext.request.contextPath}/static/ejs/trend.ejs'}).render(response[i]);
                                    domConstruct.place(trendItem, dom.byId("trend-list"), "last");

                                }
                                console.log("trends = " + response.length);

                            },
                            error: function() {
                                console.log("Error fetching trends.");
                            }

                        });
            });
}
</script>


<style id="user-style-niteesh3k" class="js-user-style">


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
        color: #0084B4;
    }

    s,
    .pretty-link:hover s,
    .stream-item-activity-me .latest-tweet .tweet-row a:hover s {
        color: #66B5D2;
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
        background-color: #0084B4;
    }

    body {
        background-position: left 40px;
        background-attachment: fixed;
        background-repeat: repeat;
        background-repeat: no-repeat;
        background-color: #C0DEED;
    }
</style>

<style id="user-style-niteesh3k-bg-img" class="js-user-style-bg-img">
    body.user-style-niteesh3k {
        background-image: url(https://si0.twimg.com/images/themes/theme1/bg.png);
    }
</style>


<style charset="utf-8" class="lazyload">@import "https://si0.twimg.com/a/1342481270/t1/css/t1_more.bundle.css";</style>
</head>
<body class="t1  logged-in front-random-image-city-balcony    mozilla user-style-niteesh3k">
<iframe tabindex="-1" role="presentation" style="position: absolute; top: -9999px;"
        src="${pageContext.request.contextPath}/static/html/receiver.html"></iframe>

<div class="topbar js-topbar">
    <div id="banners" class="js-banners">
        <noscript>
            <div class="banner-outer">
                <div class="banner">
                    <div class="banner-inside noscript-warning">
                        <h5>Our site makes heavy use of JavaScript.</h5>
                        <span class="warning">If you cannot enable it in your browser's preferences, it is not our problem.</span>
                    </div>
                </div>
            </div>
        </noscript>

    </div>
    <div class="global-nav" data-section-term="top_nav">
        <div class="global-nav-inner">
            <div class="container">
                <ul class="nav js-global-actions" id="global-actions">
                    <li id="global-nav-home" class="home active" data-global-action="home">
                        <a class="js-hover" href="/home" data-component-term="home_nav"
                           data-nav="home">
                            <span class="new-wrapper"><i class="nav-home"></i><i class="nav-new"></i></span> Home
                        </a>
                    </li>
                    <li class="people" data-global-action="connect">
                        <a class="js-hover" href="https://twitter.com/i/connect" data-component-term="connect_nav"
                           data-nav="connect">
                            <span class="new-wrapper"><i class="nav-people"></i><i class="nav-new"></i></span>
                            Connect
                        </a>
                    </li>
                    <li class="topics" data-global-action="discover">
                        <a class="js-hover" href="https://twitter.com/i/discover" data-component-term="discover_nav"
                           data-nav="discover">
                            <span class="new-wrapper"><i class="nav-topics"></i><i class="nav-new"></i></span>
                            Discover
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
                    <input class="search-input" id="search-query" placeholder="Search" name="q" autocomplete="off"
                           spellcheck="false" tabindex="-1" type="text">
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


        </div>
    </div>
</div>
<div class="alert-messages " id="message-drawer">
</div>

<div id="page-outer">
    <div id="page-container" class="wrapper home-container">
        <div class="new-js-banners"></div>
        <div id="page-node-home">
            <div class="dashboard">
                <div data-component-term="promptbird_dashboard_placeholder" id="js-promptbird-dashboard-narrow-hook"
                     class="component"></div>
                <div data-component-term="mini_home_profile" class="module mini-profile component">

                    <div class="flex-module profile-summary js-profile-summary">
                        <a href="/${current_user_id}" class="account-summary account-summary-small" data-nav="profile">
                            <div class="content">
                                <div class="account-group js-mini-current-user" data-user-id="612622708"
                                     data-screen-name="niteesh3k">
                                    <img class="avatar size32" src="data:image/jpeg;base64,${current_user_dp}"
                                         alt="${current_user_fullname}"
                                         data-user-id="612622708">
                                    <b class="fullname">${current_user_fullname}</b>
                                    <small class="metadata">View my profile page</small>
                                </div>
                            </div>
                        </a></div>

                    <div class="js-mini-profile-stats-container">
                        <ul class="stats js-mini-profile-stats">
                            <li><a href="/${current_user_id}" data-element-term="tweet_stats"
                                   data-nav="profile"><strong id="home-tweet-count">${home_tweetCount}</strong>
                                Tweets</a></li>
                            <li><a href="" data-element-term="following_stats"
                                   data-nav="following"><strong>${home_followingCount}</strong> Following</a></li>
                            <li><a href="" data-element-term="follower_stats"
                                   data-nav="followers"><strong>${home_followerCount}</strong> Followers</a></li>
                        </ul>
                    </div>

                    <div class="tweet-box tweet-user">
                        <div id="new-tweet-textarea-container" class="tweet-box condensed">
                            <div class="text-area">
                                <div class="text-area-editor twttr-editor"><textarea
                                        style="width: 258px; height: 75px; overflow: hidden;" id="new-tweet-textarea"
                                        placeholder="Compose new Tweet..."
                                        class="twitter-anywhere-tweet-box-editor" id="new-tweet-box"></textarea>
                                    <ul style="width: 274px; top: 31px; left: 0px; visibility: hidden;"
                                        class="autocomplete-container"></ul>
                                    <div style="display: none; font-family: &quot;Helvetica Neue&quot;,Arial,sans-serif; font-size: 13px; font-weight: 400; line-height: 18px; padding: 6px 8px 5px; white-space: pre-wrap; width: 258px; word-wrap: break-word;"></div>
                                </div>
                            </div>
                            <div class="tweet-button-container">
                                <div class="turkey-control">
                                    <div class="turkey-add-action">
                                        <div class="turkey"></div>
                                        <div class="swf"></div>
                                    </div>
                                    <form method="post"
                                          action="https://upload.twitter.com/1/statuses/update_with_media.iframe"
                                          enctype="multipart/form-data" class="turkey-selected-files"
                                          target="tweetbox_1"></form>
                                    <iframe class="turkey-post-target" name="tweetbox_1"></iframe>
                                </div>
      <span class="geo-control">
  <a href="#" class="geo-location">
      <span original-title="" class="geo-icon">&nbsp;</span>
      <span class="geo-dropdown-icon">&nbsp;</span>
  </a>
</span>

                                <div class="tweet-button-sub-container">
                                    <img src="DiCon_Home_Files/spinner.gif" class="tweet-spinner"
                                         style="display: none;">
                                    <span style="opacity: 0;" class="tweetbox-counter-tipsy"></span>
                                    <input class="tweet-counter"
                                           value="140"
                                           disabled="disabled">
                                    <a href="#" class="tweet-button btn disabled" id="tweet-button">Tweet</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-component-term="japanese_ad" style="display: none;" class="component"></div>
                <div data-component-term="user_recommendations" class="component">
                    <div class="module wtf-module js-wtf-module has-content">

                        <div class="flex-module">

                            <div class="flex-module-header">
                                <h3>Who to follow</h3>
                                <small><a style="float:right;" class="js-refresh-suggestions" href="#"
                                          onclick="getFollowSuggestions();">Refresh</a></small>

                            </div>

                            <div id="wtf"
                                 class="js-recommended-followers dashboard-user-recommendations flex-module-inner"
                                 data-section-id="wtf">
                            </div>


                        </div>
                    </div>
                </div>
                <div data-component-term="trends" style="display: block;" class="module trends  component">
                    <div class="flex-module trends-inner">
                        <div class="flex-module-header">

                            <h3>
                                <span woeid="1" class="js-trend-location">Trends</span>
                            </h3>
                            <small><a style="float:right;" class="js-refresh-trends" href="#" onclick="getTrends();">Refresh</a>
                            </small>

                        </div>
                        <div class="flex-module-inner">
                            <ul id="trend-list" class="trend-items js-trends">
                            </ul>
                        </div>
                    </div>
                </div>
                <div data-component-term="footer" class="component">
                    <div class="module site-footer ">
                        <div class="flex-module">
                            <div class="flex-module-inner js-items-container">
                                <ul class="clearfix">
                                    <li class="copyright">&#169; 2012 DiCon</li>
                                    <li><a href="https://twitter.com/about">About</a></li>
                                    <li><a href="https://support.twitter.com/">Help</a></li>
                                    <li><a href="https://twitter.com/tos">Terms</a></li>
                                    <li><a href="https://twitter.com/privacy">Privacy</a></li>
                                    <li><a href="http://blog.twitter.com/">Blog</a></li>
                                    <li><a href="http://status.twitter.com/">Status</a></li>
                                    <li><a href="https://twitter.com/download">Apps</a></li>
                                    <li><a href="https://twitter.com/about/resources">Resources</a></li>
                                    <li><a href="https://twitter.com/jobs">Jobs</a></li>
                                    <li><a href="https://business.twitter.com/en/advertise/start">Advertisers</a></li>
                                    <li><a href="https://business.twitter.com/index_en.html">Businesses</a></li>
                                    <li><a href="http://media.twitter.com/">Media</a></li>
                                    <li><a href="https://dev.twitter.com/">Developers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-main js-content-main breakable">
                <div id="js-promptbird-below-black-bar-hook"></div>
                <div id="js-empty-timeline-recommendations-module-hook"></div>
                <div class="content-header js-stream-header">
                    <div class="header-inner">
                        <h2>
                            <span class="content-header-buttons js-header-button-container"></span>


                            <span class="js-stream-title">Tweets</span>&nbsp;
                            <small class="view-toggler js-view-toggler"></small>
                        </h2>
                    </div>
                </div>

                <div class="stream js-stream-manager-container">
                    <div class="stream-manager js-stream-manager-container" id="home-stream-manager">

                        <div class="stream-title"></div>
                        <div class="stream-container">
                            <div media="true" data-component-term="stream" class="stream home-stream">

                                <div class="js-stream-items stream-items" id="stream-items-id">
                                    <ul id="stream-list">
                                    </ul>

                                </div>

                                <div class="stream-loading">
                                    <div class="stream-end-inner">
                                        <span class="spinner" title="Loading..."></span>
                                    </div>
                                </div>
                                <script type="text/javascript">
                                    $(document).ready(function () {

                                        $("#moretab").mouseenter(function() {
                                            $("#categories").show();
                                        });

                                        $("#categories, #moretab").mouseleave(function() {
                                            $("#categories").hide();
                                        });
                                    });
                                </script>


</body>
</html>