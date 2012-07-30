<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">

<script>document.domain = 'twitter.com'</script>

<title>${profile_name} (${user_id}) on Twitter</title>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


<link href="https://twitter.com/favicons/favicon.ico" rel="shortcut icon" type="image/x-icon">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core.css" type="text/css" media="screen">

<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_more.css" type="text/css" media="screen">
<script type="text/javascript" src='${pageContext.request.contextPath}/static/js/ejs_production.js'></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/dojo/1.7.2/dojo/dojo.js"
        data-dojo-config="async: true"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>


<script type="text/javascript">


    var latest_tweet_id = 0;
    refreshTweets();
    setInterval(refreshTweets, 5000);

    function refreshTweets() {
        require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
                function(xhr, dom, domConstruct) {

                    xhr.get({
                                url: "${user_id}/tweets/fetch",
                                handleAs: "json",
                                headers: { "Accept": "application/json"},
                                content: {
                                    latest_tweet_id : latest_tweet_id
                                },
                                load: function(response) {
                                    for (var i in response) {
                                        var newTweet = new EJS({url: '${pageContext.request.contextPath}/static/ejs/tweet.ejs'}).render(response[i]);
                                        domConstruct.place(newTweet, dom.byId("stream-list"), "first");
                                        latest_tweet_id = response[i]["tweet_id"];
                                    }
                                    console.log("new tweets = " + response.length);


                                },
                                error: function() {
                                    console.log("Error fetching json.");
                                },
                                handle: function() {
                                    console.log("latest tweet id = " + latest_tweet_id);
                                }
                            });

                });
    }
    function hasClass(el, name) {
        return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
    }
    function addClass(el, name) {
        if (!hasClass(el, name)) {
            el.className += (el.className ? ' ' : '') + name;
        }
    }
    function removeClass(el, name) {
        if (hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
        }
    }
    function triggerFollow(btn) {
        var triggerURL;
        if (btn.id == "following-button") {
            triggerURL = "${user_id}/unfollow";
        }
        else if (btn.id == "not-following-button") {
            triggerURL = "${user_id}/follow";
        }
        require(["dojo/_base/xhr", "dojo/domReady!"],
                function(xhr) {
                    xhr.get({
                                url: triggerURL,
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

<script>

    (function() {
        function a() {
            document.write = "",window.top.location = window.self.location,setTimeout(function() {
                document.body.innerHTML = ""
            }, 0),window.self.onload = function(a) {
                document.body.innerHTML = ""
            }
        }

        if (window.top !== window.self)try {
            window.top.location.host || a()
        } catch(b) {
            a()
        }
    })();
</script>

<script>(function() {
    function f(a) {
        a = a || window.event;
        if (!a)return;
        !a.target && a.srcElement && (a.target = a.srcElement);
        if (!j(a))return;
        if (!document.addEventListener) {
            var b = {};
            for (var c in a)b[c] = a[c];
            a = b
        }
        return a.preventDefault = a.stopPropagation = function() {
        },d.push(a),!1
    }

    function g($) {
        i();
        for (var b = 0,c; c = d[b]; b++) {
            var e = $(c.target);
            if (c.type == "click" && c.target.tagName.toLowerCase() == "a") {
                var f = $.data(e.get(0), "events"),g = f && f.click,j = !c.target.hostname.match(a) || !c.target.href.match(/#$/);
                if (!g && j) {
                    window.location = c.target.href;
                    continue
                }
            }
            e.trigger(c)
        }
        window.swiftActionQueue.wasFlushed = !0
    }

    function i() {
        e && clearTimeout(e);
        for (var a = 0; a < c.length; a++)document["on" + c[a]] = null
    }

    function j(c) {
        var d = c.target.tagName.toLowerCase();
        if (d == "label")if (c.target.getAttribute("for")) {
            var e = document.getElementById(c.target.getAttribute("for"));
            if (e.getAttribute("type") == "checkbox")return!1
        } else for (var f = 0; f < c.target.childNodes.length; f++)if ((c.target.childNodes[f].tagName || "").toLowerCase() == "input" && c.target.childNodes[f].getAttribute("type") == "checkbox")return!1;
        if (d == "textarea" || d == "input" && c.target.getAttribute("type") == "text")if (c.type.match(b))return!1;
        return c.metaKey ? !1 : c.clientX && c.shiftKey && d == "a" ? !1 : c.target && c.target.hostname && !c.target.hostname.match(a) ? !1 : !0
    }

    var a = /^([^\.]+\.)*twitter.com$/,b = /^key/,c = ["click","keydown","keypress","keyup"],d = [],e = null;
    for (var k = 0; k < c.length; k++)document["on" + c[k]] = f;
    setTimeout(i, 1e4),window.swiftActionQueue = {flush:g,wasFlushed:!1}
})();</script>
</head>

<body class="t1 logged-in user-style-${user_id}">
<div id="doc" class="route-profile">
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
                        <a class="js-hover" href="https://twitter.com/" data-component-term="home_nav" data-nav="home">
                            <span class="new-wrapper"><i class="nav-home"></i><i class="nav-new"></i></span> Home
                        </a>
                    </li>
                    <li class="people" data-global-action="connect">
                        <a class="js-hover" href="https://twitter.com/i/connect" data-component-term="connect_nav"
                           data-nav="connect">
                            <span class="new-wrapper"><i class="nav-people"></i><i class="nav-new"></i></span> Connect
                        </a>
                    </li>
                    <li class="topics" data-global-action="discover">
                        <a class="js-hover" href="https://twitter.com/i/discover" data-component-term="discover_nav"
                           data-nav="discover">
                            <span class="new-wrapper"><i class="nav-topics"></i><i class="nav-new"></i></span> Discover
                        </a>
                    </li>
                </ul>
                <i class="bird-topbar-etched"></i>

                <div class="pull-right">
                    <div class="well topbar-tweet-btn">
                        <ul class="nav js-global-actions">
                            <li>
                                <a href="/logout" class="js-hover">Logout</a>
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

                        <div style="display: none;" class="dropdown-menu typeahead">
                            <div class="dropdown-caret">
                                <div class="caret-outer"></div>
                                <div class="caret-inner"></div>
                            </div>
                            <div class="dropdown-inner js-typeahead-results">
                                <ul class="typeahead-items saved-searches-list"></ul>
                                <ul style="display: none;" class="typeahead-items topics-list"></ul>
                                <div style="display: none;" class="typeahead-accounts js-typeahead-accounts">
                                    <ul class="typeahead-items">


                                        <li class="js-selectable typeahead-accounts-shortcut js-shortcut"><a href=""
                                                                                                             data-search-query=""
                                                                                                             data-query-source="typeahead_click"
                                                                                                             data-shortcut="true"
                                                                                                             data-ds="account_search"></a>
                                        </li>
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
</div>
<div id="page-outer">
<div id="page-container" class="wrapper wrapper-profile">
<div class="module profile-card component" data-component-term="profile_follow_card">
    <div class="flex-module clearfix ">


        <a href="https://si0.twimg.com/profile_images/2325645639/image.jpg" class="profile-picture" target="_blank">
            <img src="${user_id}_files/image_reasonably_small.jpg" alt="${profile_name}" class="avatar size128">
        </a>

        <div class="profile-card-inner" data-screen-name="${user_id}" data-user-id="51376979">
            <h1 class="fullname">
                ${profile_name}
                <i class="verified-large" title="Verified profile"></i>
            </h1>

            <h2 class="username">
                <span class="screen-name"><s>@</s>${user_id}</span>

            </h2>

            <p class="bio ">a female actor who lives to eat and read in that order.</p>

            <p class="location-and-url">
          <span class="location">
            ÜT: 19.167049,72.845301
          </span>
          <span class="url">
            <a target="_blank" rel="me nofollow" href="">

            </a>
          </span>
            </p>
        </div>
        <div class="profile-card-actions">

            <div class="user-actions btn-group ${profile_status} including" data-user-id="51376979"
                 data-screen-name="${user_id}" data-name="${profile_name}" data-protected="false">

                <button onclick="triggerFollow(this);" id="${profile_status}-button"
                        class="js-follow-btn follow-button btn" type="button">
                    <span class="button-text follow-text">Follow</span>
                    <span class="button-text following-text">Following</span>
                    <span class="button-text unfollow-text">Unfollow</span>
                    <span class="button-text blocked-text">Blocked</span>
                    <span class="button-text unblock-text">Unblock</span>
                    <span class="button-text pending-text">Pending</span>
                    <span class="button-text cancel-text">Cancel</span>
                </button>


            </div>
            <ul class="stats js-mini-profile-stats">
                <li><a href="https://twitter.com/${user_id}" data-element-term="tweet_stats" data-nav="profile">


                    <strong>${profile_tweetCount}</strong> Tweets
                </a></li>
                <li><a href="https://twitter.com/#%21/${user_id}/following" data-element-term="following_stats"
                       data-nav="following"><strong>${profile_following}</strong> Following</a></li>
                <li><a href="https://twitter.com/#%21/${user_id}/followers" data-element-term="follower_stats"
                       data-nav="followers"><strong>${profile_follower}</strong> Followers</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="dashboard">
<div class="module component" data-component-term="profile_tweetbox">
    <div class="profile-tweet-box flex-module" data-screen-name="${user_id}">
        <div class="tweet-box-title">
            <h2>Tweet to ${profile_name}</h2>
        </div>
        <form class="tweet-form condensed" method="post" target="tweet-post-iframe"
              action="//upload.twitter.com/i/tweet/create_with_media.iframe" enctype="multipart/form-data">
            <input name="post_authenticity_token" class="auth-token" type="hidden">
            <input name="iframe_callback" class="iframe-callback" type="hidden">
            <input name="in_reply_to_status_id" class="in-reply-to-status-id" type="hidden">
            <input name="impression_id" class="impression-id" type="hidden">

            <div class="tweet-content">

                <label class="hidden-elements" for="tweet-box-1343080785">Tweet text</label>
                <textarea dir="ltr" class="tweet-box" id="tweet-box-1343080785">@${user_id}</textarea><textarea
                    style="display: none;" dir="ltr" class="tweet-box" name="status">@${user_id}</textarea>

                <ul style="display: none;" class="dropdown-menu autocomplete-results">
                    <li class="dropdown-link dropdown-account template-row autocomplete-item">
                        <img class="avatar size24" width="24" height="24">
                        <strong class="fullname"></strong>
                        <span class="pretty-link"><s>@</s><b class="username"></b></span>
                    </li>
                </ul>

                <div class="thumbnail-container">
                    <div class="preview">
                        <div class="dismiss">
                            <i class="close"></i>
                        </div>
                        <span class="filename"></span>
                    </div>
                    <div class="preview-message">Image will appear as a link</div>
                </div>

            </div>

            <div class="tweet-box-extras">

                <div class="photo-selector">
                    <button class="btn" type="button" tabindex="-1">
                        <i class="tweet-camera"></i>
                    </button>
                    <div class="image-selector">
                        <input name="media_data_empty" class="file-data" type="hidden">
                        <input name="media_empty" class="file-input" tabindex="-1" type="file">

                        <div class="swf-container"></div>
                    </div>
                </div>

                <div class="geo-picker">
                    <button class="btn geo-picker-btn" type="button" tabindex="-1">
                        <i class="tweet-geo"><span class="hidden-elements">Add location</span></i> <span
                            class="caret"></span>
                    </button>
                    <span class="dropdown-container"></span>
                    <span class="geo-status"></span>
                    <input name="place_id" type="hidden">
                </div>

            </div>
            <div class="tweet-button">
                <span class="link-message single">Link will appear shortened</span>
                <span class="link-message plural">Links will appear shortened</span>
                <span class="spinner"></span>
                <span class="tweet-counter">140</span>
                <button class="btn primary-btn tweet-action" type="button">Tweet</button>
            </div>
        </form>
    </div>
</div>

<div class="component">
    <div class="module profile-nav">
        <ul class="js-nav-links">
            <li class="active">
                <a class="list-link" href="https://twitter.com/${user_id}" data-nav="profile">Tweets<i
                        class="chev-right"></i></a>
            </li>
            <li class="">
                <a class="list-link" href="https://twitter.com/#%21/${user_id}/following" data-nav="following">Following<i
                        class="chev-right"></i></a>
            </li>
            <li class="">
                <a class="list-link" href="https://twitter.com/#%21/${user_id}/followers" data-nav="followers">Followers<i
                        class="chev-right"></i></a>
            </li>
            <li class="">
                <a class="list-link" href="https://twitter.com/#%21/${user_id}/favorites" data-nav="favorites">Favorites<i
                        class="chev-right"></i></a>
            </li>
            <li class="">
                <a class="list-link" href="https://twitter.com/${user_id}/lists" data-nav="all_lists">Lists<i
                        class="chev-right"></i></a>
            </li>
            <li class="media-thumbnails recent_photos ">
                <a href="https://twitter.com/#%21/${user_id}/media/grid" class="list-link">
                    <div class="media-header">
                        Recent images
                        <i class="chev-right"></i>
                    </div>
                    <div class="media-row">
                        <div class="media-row-content">
                            <span data-resolved-url-small="//instagr.am/p/NZHX79QhbG/media/?size=t"
                                  data-load-status="loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FNZHX79QhbG%2F"
                                  data-url="http://instagr.am/p/NZHX79QhbG/" class="media-thumbnail"><img
                                    style="position: absolute; height: 66px; width: 66px; left: 0px; top: 0px;"
                                    src="${user_id}_files/a_002.jpeg"></span>
                            <span data-resolved-url-small="//instagr.am/p/NZGhjfwhaZ/media/?size=t"
                                  data-load-status="loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FNZGhjfwhaZ%2F"
                                  data-url="http://instagr.am/p/NZGhjfwhaZ/" class="media-thumbnail"><img
                                    style="position: absolute; height: 66px; width: 66px; left: 0px; top: 0px;"
                                    src="${user_id}_files/a_003.jpeg"></span>
                            <span data-resolved-url-small="//instagr.am/p/NTNamhQhSq/media/?size=t"
                                  data-load-status="loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FNTNamhQhSq%2F"
                                  data-url="http://instagr.am/p/NTNamhQhSq/" class="media-thumbnail"><img
                                    style="position: absolute; height: 66px; width: 66px; left: 0px; top: 0px;"
                                    src="${user_id}_files/a.jpeg"></span>
                            <span data-resolved-url-small="//instagr.am/p/NRcTT6QheA/media/?size=t"
                                  data-load-status="loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FNRcTT6QheA%2F"
                                  data-url="http://instagr.am/p/NRcTT6QheA/" class="media-thumbnail"><img
                                    style="position: absolute; height: 66px; width: 66px; left: 0px; top: 0px;"
                                    src="${user_id}_files/a_004.jpeg"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FNQ7CNIQhXN%2F"
                                  data-url="http://instagr.am/p/NQ7CNIQhXN/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DH9ZTP2k0DRc"
                                  data-url="http://www.youtube.com/watch?v=H9ZTP2k0DRc" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Fm.tmi.me%2Ftn6n5"
                                  data-url="http://m.tmi.me/tn6n5" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhrbKp5N74zE"
                                  data-url="http://www.youtube.com/watch?v=hrbKp5N74zE" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Flockerz.com%2Fs%2F223610427"
                                  data-url="http://lockerz.com/s/223610427" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Fyoutu.be%2FLj5_FhLaaQQ"
                                  data-url="http://youtu.be/Lj5_FhLaaQQ" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Flockerz.com%2Fs%2F220926344"
                                  data-url="http://lockerz.com/s/220926344" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=pic.twitter.com%2FEEb5kcvn"
                                  data-url="https://p.twimg.com/AwjxpXsCEAA-Yh2.jpg:thumb"
                                  data-resolved-url-small="https://p.twimg.com/AwjxpXsCEAA-Yh2.jpg:thumb"
                                  class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FMbl0wbLVUU%2F"
                                  data-url="http://instagr.am/p/Mbl0wbLVUU/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Flockerz.com%2Fs%2F220185150"
                                  data-url="http://lockerz.com/s/220185150" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Flockerz.com%2Fs%2F217734041"
                                  data-url="http://lockerz.com/s/217734041" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FL8G1j9rVSm%2F"
                                  data-url="http://instagr.am/p/L8G1j9rVSm/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FLnyNAErVUK%2F"
                                  data-url="http://instagr.am/p/LnyNAErVUK/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FLn4icErVXr%2F"
                                  data-url="http://instagr.am/p/Ln4icErVXr/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FLn4U2MLVXh%2F"
                                  data-url="http://instagr.am/p/Ln4U2MLVXh/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FLn5v8KSdNF%2F"
                                  data-url="http://instagr.am/p/Ln5v8KSdNF/" class="media-thumbnail"></span>
                            <span data-load-status="not-loaded"
                                  data-href="/#!/${user_id}/media/slideshow?url=http%3A%2F%2Finstagr.am%2Fp%2FLlSqw7whUV%2F"
                                  data-url="http://instagr.am/p/LlSqw7whUV/" class="media-thumbnail"></span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>


<div class="component" data-component-term="similar_user_recommendations">
    <div class="module profile-nav wtf-module js-similar-to-module  has-content">

        <ul>
            <li class="js-sidenav-link" data-name="similarTo">
                <a class="list-link" href="https://twitter.com/similar_to/${user_id}">
                    Similar to ${profile_name}
                    <i class="chev-right"></i>
                </a>
            </li>
        </ul>

        <div class="flex-module">
            <div style="opacity: 1;" class="dashboard-user-recommendations flex-module-inner" data-section-id="wtf">
                <div class="js-account-summary account-summary js-actionable-user account-summary-small"
                     data-user-id="57879889" data-feedback-token="2">
                    <div class="content">
                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                           href="https://twitter.com/Minissha_Lamba" data-user-id="57879889">

                            <img class="avatar js-action-profile-avatar size32"
                                 src="${user_id}_files/mini_profile_pic_normal.jpg" alt="Minissha Lamba">
        <span class="account-group-inner js-action-profile-name" data-user-id="57879889">
          <b class="fullname">Minissha Lamba</b>
          <span>‏</span>
          
          <span class="username"><s>@</s><span class="js-username">Minissha_Lamba</span></span>
        </span>
                        </a>

                        <small class="metadata social-context">
                        </small>
  
        <span class="user-actions not-following" data-user-id="57879889">
        <a href="#" class="follow-link">
            <span class="link-text follow-text">Follow</span>
            <span class="link-text unfollow-text">Unfollow</span>
            <span class="link-text cancel-text">Cancel</span>
        </a>
      </span>
                    </div>
                </div>

                <div class="js-account-summary account-summary js-actionable-user account-summary-small"
                     data-user-id="102594253" data-feedback-token="2">
                    <div class="content">
                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                           href="https://twitter.com/mbhandarkar268" data-user-id="102594253">

                            <img class="avatar js-action-profile-avatar size32"
                                 src="${user_id}_files/mbhandarkar268_normal.jpg" alt="Madhur Bhandarkar">
        <span class="account-group-inner js-action-profile-name" data-user-id="102594253">
          <b class="fullname">Madhur Bhandarkar</b>
          <span>‏</span>
          
          <span class="username"><s>@</s><span class="js-username">mbhandarkar268</span></span>
        </span>
                        </a>

                        <small class="metadata social-context">
                        </small>
  
        <span class="user-actions not-following" data-user-id="102594253">
        <a href="#" class="follow-link">
            <span class="link-text follow-text">Follow</span>
            <span class="link-text unfollow-text">Unfollow</span>
            <span class="link-text cancel-text">Cancel</span>
        </a>
      </span>
                    </div>
                </div>

                <div class="js-account-summary account-summary js-actionable-user account-summary-small"
                     data-user-id="125095065" data-feedback-token="1">
                    <div class="content">
                        <a class="account-group js-recommend-link js-user-profile-link user-thumb"
                           href="https://twitter.com/rohiniyer" data-user-id="125095065">

                            <img class="avatar js-action-profile-avatar size32" src="${user_id}_files/Ro.jpg"
                                 alt="rohini iyer">
        <span class="account-group-inner js-action-profile-name" data-user-id="125095065">
          <b class="fullname">rohini iyer</b>
          <span>‏</span>
          
          <span class="username"><s>@</s><span class="js-username">rohiniyer</span></span>
        </span>
                        </a>

                        <small class="metadata social-context">
                        </small>
  
        <span class="user-actions not-following" data-user-id="125095065">
        <a href="#" class="follow-link">
            <span class="link-text follow-text">Follow</span>
            <span class="link-text unfollow-text">Unfollow</span>
            <span class="link-text cancel-text">Cancel</span>
        </a>
      </span>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
<div class="module site-footer ">
    <div class="flex-module">
        <div class="flex-module-inner js-items-container">
            <ul class="clearfix">
                <li class="copyright">© 2012 Twitter</li>
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
<div class="component" id="suggested-users"></div>
<div class="content-main" id="timeline">
<div class="content-header">
    <div class="header-inner">
        <h2 class="js-timeline-title">Tweets
            <small class="view-toggler"><a class="toggle-item-1 "
                                           href="https://twitter.com/${user_id}/with_replies">All</a> /
                <a class="toggle-item-2 active" href="https://twitter.com/${user_id}">No replies</a></small>
        </h2>
    </div>
</div>
<ul id="stream-list">
</ul>


<div class="modal-overlay"></div>

<div class="hidden-elements">
    <div id="flash-preload"></div>
    <iframe class="tweet-post-iframe" name="tweet-post-iframe"></iframe>


    <div id="inline-reply-tweetbox">
        <form class="tweet-form " method="post" target="tweet-post-iframe"
              action="//upload.twitter.com/i/tweet/create_with_media.iframe" enctype="multipart/form-data">
            <input name="post_authenticity_token" class="auth-token" type="hidden">
            <input name="iframe_callback" class="iframe-callback" type="hidden">
            <input name="in_reply_to_status_id" class="in-reply-to-status-id" type="hidden">
            <input name="impression_id" class="impression-id" type="hidden">

            <div class="tweet-content">

                <label class="hidden-elements" for="tweet-box-1343080786">Tweet text</label>
                <textarea class="tweet-box" name="status" id="tweet-box-1343080786"></textarea>

                <ul class="dropdown-menu autocomplete-results">
                    <li class="dropdown-link dropdown-account template-row autocomplete-item">
                        <img class="avatar size24" width="24" height="24">
                        <strong class="fullname"></strong>
                        <span class="pretty-link"><s>@</s><b class="username"></b></span>
                    </li>
                </ul>

                <div class="thumbnail-container">
                    <div class="preview">
                        <div class="dismiss">
                            <i class="close"></i>
                        </div>
                        <span class="filename"></span>
                    </div>
                    <div class="preview-message">Image will appear as a link</div>
                </div>

            </div>

            <div class="tweet-box-extras">

                <div class="photo-selector">
                    <button class="btn" type="button" tabindex="-1">
                        <i class="tweet-camera"></i>
                    </button>
                    <div class="image-selector">
                        <input name="media_data_empty" class="file-data" type="hidden">
                        <input name="media_empty" class="file-input" tabindex="-1" type="file">

                        <div class="swf-container"></div>
                    </div>
                </div>

                <div class="geo-picker">
                    <button class="btn geo-picker-btn" type="button" tabindex="-1">
                        <i class="tweet-geo"><span class="hidden-elements">Add location</span></i> <span
                            class="caret"></span>
                    </button>
                    <span class="dropdown-container"></span>
                    <span class="geo-status"></span>
                    <input name="place_id" type="hidden">
                </div>

            </div>
            <div class="tweet-button">
                <span class="link-message single">Link will appear shortened</span>
                <span class="link-message plural">Links will appear shortened</span>
                <span class="spinner"></span>
                <span class="tweet-counter">140</span>
                <button class="btn primary-btn tweet-action disabled" type="button">Tweet</button>
            </div>
        </form>
    </div>
</div>

<div id="dm_dialog" class="modal-container dm-conversation-list">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable twttr-dialog dm-dialog">
        <div id="dm_dialog_conversation_list" class="modal-content">

            <div class="twttr-dialog-header modal-header">
                <h3>Direct messages</h3>
                <a class="btn dm-new-button dm-header-new" href="#">New message</a>

                <div class="twttr-dialog-close"><b>×</b></div>
            </div>


            <div class="twttr-dialog-inside">
                <div class="twttr-dialog-body clearfix">
                    <div class="dm-error js-dm-error">
                        <a href="#" class="js-dismiss">
                            <i class="close"></i>
                        </a>
                        <span class="dm-error-text"></span>
                    </div>
                    <div class="twttr-dialog-content">
                        <div class="dm-threads js-dm-threads js-modal-scrollable js-twttr-dialog-not-draggable">
                            <ul class="dm-thread-list js-dm-thread-list">
                                <div class="dm-placeholder-empty dm-no-messages">
                                    <p><strong>You don't have any messages yet.</strong></p>

                                    <p>Direct messages are 140 characters, private, and can be sent to any user who
                                        follows you on Twitter.</p>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div class="twttr-dialog-footer">
                        Tip: you can send a message to anyone who follows you. <a
                            href="http://support.twitter.com/groups/31-twitter-basics/topics/109-tweets-messages/articles/14606-what-is-a-direct-message-dm"
                            target="_blank" class="learn-more">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="dm_dialog_conversation" class="modal-content">

            <div class="twttr-dialog-header modal-header">
                <h3><a class="js-dm-header-title" href="#">Direct messages</a> › with <span
                        class="dm_dialog_real_name"></span></h3>

                <div class="twttr-dialog-close"><b>×</b></div>
            </div>


            <div class="twttr-dialog-inside">
                <div class="twttr-dialog-body clearfix">
                    <div class="dm-error js-dm-error">
                        <a href="#" class="js-dismiss">
                            <i class="close"></i>
                        </a>
                        <span class="dm-error-text"></span>
                    </div>
                    <div class="twttr-dialog-content">
                    </div>
                    <form class="dm-tweetbox tweet-form">
                        <div class="tweet-content">
                            <label class="hidden-elements" for="tweet-box-1343080787">Tweet text</label>
                            <textarea id="tweet-box-1343080787" class="tweet-box"></textarea>
                        </div>
                        <div class="tweet-button">
                            <span class="spinner"></span>
                            <span class="tweet-counter">140</span>
                            <button class="btn tweet-action primary-btn disabled" type="submit">Send message</button>
                        </div>
                        <div class="dm-delete-confirm js-dm-delete-confirm">
                            <p>Are you sure you want to delete this message?</p>
                            <button type="button" class="btn caution-btn js-prompt-ok" data-message-id="">Delete
                                message
                            </button>
                            <button type="button" class="btn js-prompt-cancel">Cancel</button>
                        </div>
                    </form>
                </div>

                <div class="twttr-dialog-footer">
                    Tip: you can send a message to anyone who follows you. <a
                        href="http://support.twitter.com/groups/31-twitter-basics/topics/109-tweets-messages/articles/14606-what-is-a-direct-message-dm"
                        target="_blank" class="learn-more">Learn more</a>
                </div>
            </div>
        </div>
        <div id="dm_dialog_new" class="modal-content">

            <div class="twttr-dialog-header modal-header">
                <h3><a href="#">Direct messages</a> › New</h3>

                <div class="twttr-dialog-close"><b>›</b></div>
            </div>


            <div class="twttr-dialog-inside">
                <div class="twttr-dialog-body clearfix">
                    <div class="dm-dialog-content">
                        <div class="dm-to">
                            <input class="dm-to-input twttr-directmessage-input" type="text">
                            <img class="avatar size24 selected-profile"
                                 src="${user_id}_files/default_profile_6_mini.png"
                                 data-default-img="https://si0.twimg.com/sticky/default_profile_images/default_profile_6_mini.png">
                            <ul style="display: none;" class="dropdown-menu autocomplete-results">
                                <li class="dropdown-link dropdown-account template-row autocomplete-item">
                                    <img class="avatar size24" width="24" height="24">
                                    <strong class="fullname"></strong>
                                    <span class="pretty-link"><s>@</s><b class="username"></b></span>
                                </li>
                            </ul>
                        </div>

                        <div class="dm-convo-placeholder">
                            <div class="dm-error js-dm-error">
                                <a href="#" class="js-dismiss">
                                    <i class="close"></i>
                                </a>
                                <span class="dm-error-text"></span>
                            </div>
                        </div>

                    </div>

                    <form class="dm-tweetbox tweet-form">
                        <div class="tweet-content">
                            <label class="hidden-elements" for="tweet-box-1343080788">Tweet text</label>
                            <textarea id="tweet-box-1343080788" class="tweet-box"></textarea>
                        </div>
                        <div class="tweet-button">
                            <span class="spinner"></span>
                            <span class="tweet-counter">140</span>
                            <button class="btn tweet-action primary-btn disabled" type="submit">Send message</button>
                        </div>
                        <div class="dm-delete-confirm js-dm-delete-confirm">
                            <p>Are you sure you want to delete this message?</p>
                            <button type="button" class="btn caution-btn js-prompt-ok" data-message-id="">Delete
                                message
                            </button>
                            <button type="button" class="btn js-prompt-cancel">Cancel</button>
                        </div>
                    </form>
                    <div class="twttr-dialog-footer">
                        Tip: you can send a message to anyone who follows you. <a
                            href="http://support.twitter.com/groups/31-twitter-basics/topics/109-tweets-messages/articles/14606-what-is-a-direct-message-dm"
                            target="_blank" class="learn-more">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="global-tweet-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable">
        <div class="modal-content">
            <button type="button" class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>

            <div class="modal-header">
                <h3 class="modal-title"></h3>
            </div>

            <div class="modal-body">
                <form class="tweet-form " method="post" target="tweet-post-iframe"
                      action="//upload.twitter.com/i/tweet/create_with_media.iframe" enctype="multipart/form-data">
                    <input name="post_authenticity_token" class="auth-token" type="hidden">
                    <input name="iframe_callback" class="iframe-callback" type="hidden">
                    <input name="in_reply_to_status_id" class="in-reply-to-status-id" type="hidden">
                    <input name="impression_id" class="impression-id" type="hidden">

                    <div class="tweet-content">

                        <label class="hidden-elements" for="tweet-box-1343080789">Tweet text</label>
                        <textarea class="tweet-box" name="status" id="tweet-box-1343080789"></textarea>

                        <ul style="display: none;" class="dropdown-menu autocomplete-results">
                            <li class="dropdown-link dropdown-account template-row autocomplete-item">
                                <img class="avatar size24" width="24" height="24">
                                <strong class="fullname"></strong>
                                <span class="pretty-link"><s>@</s><b class="username"></b></span>
                            </li>
                        </ul>

                        <div class="thumbnail-container">
                            <div class="preview">
                                <div class="dismiss">
                                    <i class="close"></i>
                                </div>
                                <span class="filename"></span>
                            </div>
                            <div class="preview-message">Image will appear as a link</div>
                        </div>

                    </div>

                    <div class="tweet-box-extras">

                        <div class="photo-selector">
                            <button class="btn" type="button" tabindex="-1">
                                <i class="tweet-camera"></i>
                            </button>
                            <div class="image-selector">
                                <input name="media_data_empty" class="file-data" type="hidden">
                                <input name="media_empty" class="file-input" tabindex="-1" type="file">

                                <div class="swf-container"></div>
                            </div>
                        </div>

                        <div class="geo-picker">
                            <button class="btn geo-picker-btn" type="button" tabindex="-1">
                                <i class="tweet-geo"><span class="hidden-elements">Add location</span></i> <span
                                    class="caret"></span>
                            </button>
                            <span class="dropdown-container"></span>
                            <span class="geo-status"></span>
                            <input name="place_id" type="hidden">
                        </div>

                    </div>
                    <div class="tweet-button">
                        <span class="link-message single">Link will appear shortened</span>
                        <span class="link-message plural">Links will appear shortened</span>
                        <span class="spinner"></span>
                        <span class="tweet-counter">140</span>
                        <button class="btn primary-btn tweet-action disabled" type="button">Tweet</button>
                    </div>
                </form>
            </div>

            <div style="display: none;" class="modal-footer modal-tweet"></div>
        </div>
    </div>
</div>


<div id="goto-user-dialog" class="modal-container">
    <div class="modal modal-small draggable">
        <div class="modal-content">
            <button type="button" class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>

            <div class="modal-header">
                <h3 class="modal-title">Go to a person's profile</h3>
            </div>

            <div class="modal-body">
                <div class="modal-inner">
                    <form class="goto-user-form">
                        <input class="username-input" placeholder="Start typing a name to jump to a profile"
                               type="text">
                        <ul style="display: none;" class="dropdown-menu autocomplete-results">
                            <li class="dropdown-link dropdown-account template-row autocomplete-item">
                                <img class="avatar size24" width="24" height="24">
                                <strong class="fullname"></strong>
                                <span class="pretty-link"><s>@</s><b class="username"></b></span>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>


<div id="retweet-tweet-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable">
        <div class="modal-content">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>

            <div class="modal-header">

                <h3 class="modal-title">Retweet this to your followers?</h3>

            </div>

            <div style="display: none;" class="modal-body modal-tweet"></div>

            <div class="modal-footer">
                <button class="btn cancel-action">Cancel</button>

                <button class="btn primary-btn retweet-action">Retweet</button>

            </div>
        </div>
    </div>
</div>
<div id="delete-tweet-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable">
        <div class="modal-content">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>

            <div class="modal-header">
                <h3 class="modal-title">Are you sure you want to delete this Tweet?</h3>
            </div>

            <div style="display: none;" class="modal-body modal-tweet"></div>

            <div class="modal-footer">
                <button class="btn cancel-action">Cancel</button>
                <button class="btn primary-btn delete-action">Delete</button>
            </div>
        </div>
    </div>
</div>


<div id="keyboard-shortcut-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal modal-large draggable">
        <div class="modal-content">
            <button type="button" class="modal-btn modal-close js-dimiss"><i class="close-medium"><span
                    class="hidden-elements">Close</span></i></button>


            <div class="modal-header">
                <h3 class="modal-title">Keyboard shortcuts</h3>
            </div>


            <div class="modal-body">

                <div class="keyboard-shortcuts clearfix" id="keyboard-shortcut-menu">

                    <table class="modal-table">
                        <thead>
                        <tr>
                            <th colspan="2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">F</b>
                            </td>
                            <td class="shortcut-label">Favorite</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">R</b>
                            </td>
                            <td class="shortcut-label">Reply</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">T</b>
                            </td>
                            <td class="shortcut-label">Retweet</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">M</b>
                            </td>
                            <td class="shortcut-label">Direct message</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">N</b>
                            </td>
                            <td class="shortcut-label">New Tweet</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">Enter</b>
                            </td>
                            <td class="shortcut-label">Open Tweet details</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">L</b>
                            </td>
                            <td class="shortcut-label">Close all open Tweets</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="modal-table">
                        <thead>
                        <tr>
                            <th colspan="2">Navigation</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">?</b>
                            </td>
                            <td class="shortcut-label">This menu</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">J</b>
                            </td>
                            <td class="shortcut-label">Next Tweet</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">K</b>
                            </td>
                            <td class="shortcut-label">Previous Tweet</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">Space</b>
                            </td>
                            <td class="shortcut-label">Page down</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">/</b>
                            </td>
                            <td class="shortcut-label">Search</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">.</b>
                            </td>
                            <td class="shortcut-label">Load new Tweets</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="modal-table">
                        <thead>
                        <tr>
                            <th colspan="2">Timelines</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">H</b>
                            </td>
                            <td class="shortcut-label">Home</td>
                        </tr>

                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">R</b>
                            </td>
                            <td class="shortcut-label">Mentions</td>
                        </tr>

                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">D</b>
                            </td>
                            <td class="shortcut-label">Discover</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">P</b>
                            </td>
                            <td class="shortcut-label">Profile</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">F</b>
                            </td>
                            <td class="shortcut-label">Favorites</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">M</b>
                            </td>
                            <td class="shortcut-label">Messages</td>
                        </tr>
                        <tr>
                            <td class="shortcut">
                                <b class="sc-key">G</b> <b class="sc-key">U</b>
                            </td>
                            <td class="shortcut-label">Go to user...</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="geo-disabled-dropdown">
    <ul class="dropdown-menu" tabindex="-1">
        <li class="dropdown-caret">
            <span class="caret-outer"></span>
            <span class="caret-inner"></span>
        </li>
        <li class="geo-not-enabled-yet">
            <h2>Add a location to your Tweets</h2>

            <p>
                When you tweet with a location, Twitter stores that location.
                You can switch location on/off before each Tweet and always have the option to delete your location
                history.
                <a href="http://support.twitter.com/forums/26810/entries/78525" target="_blank">Learn more</a>
            </p>

            <div>
                <button type="button" class="geo-turn-on btn primary-btn">Turn location on</button>
                <button type="button" class="geo-not-now btn-link">Not now</button>
            </div>
        </li>
    </ul>
</div>

<div id="geo-enabled-dropdown">
    <ul class="dropdown-menu" tabindex="-1">
        <li class="dropdown-caret">
            <span class="caret-outer"></span>
            <span class="caret-inner"></span>
        </li>
        <li class="geo-query-location">
            <input autocomplete="off" placeholder="Search for a neighborhood or city" type="text">
            <i class="generic-search"></i>
        </li>
        <li class="geo-dropdown-status"></li>
        <li class="dropdown-link geo-turn-off-item geo-focusable">
            <i class="close"></i>Turn off location
        </li>
    </ul>
</div>


<div id="profile_popup" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div style="height: auto;" class="modal modal-small draggable">
        <div class="modal-content clearfix">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>
            <div class="modal-header">
                <h3 class="modal-title">Profile summary</h3>
            </div>

            <div class="modal-body profile-modal"></div>

            <div class="loading">
                <img src="${user_id}_files/bigger_spinner.gif">
            </div>
        </div>
    </div>
</div>
<div id="list-membership-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal modal-small draggable">
        <div class="modal-content">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>
            <div class="modal-header">
                <h3 class="modal-title">Your lists</h3>
            </div>
            <div class="modal-body">
                <div class="list-membership-content"></div>
                <span class="spinner lists-spinner" title="Loading…"></span>
            </div>
        </div>
    </div>
</div>
<div id="list-create-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal modal-medium draggable">
        <div class="modal-content">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>
            <div class="modal-header">
                <h3 class="modal-title">Create a new list</h3>
            </div>
            <div class="modal-body">

                <div class="list-editor">
                    <div class="field">
                        <label for="list-name">List name</label>
                        <input class="text" name="name" type="text">
                    </div>
                    <div class="field" style="display:none">
                        <label for="list-link">List link</label>
                        <span></span>
                    </div>
                    <hr>

                    <div class="field">
                        <label for="description">Description</label>
                        <textarea name="description"></textarea>
                        <span class="help-text">Under 100 characters, optional</span>
                    </div>
                    <hr>

                    <div class="field">
                        <label for="mode">Privacy</label>

                        <div class="options">
                            <label for="list-public-radio">
                                <input class="radio" name="mode" id="list-public-radio" value="public" checked="checked"
                                       type="radio">
                                <b>Public</b> · Anyone can follow this list
                            </label>
                            <label for="list-private-radio">
                                <input class="radio" name="mode" id="list-private-radio" value="private" type="radio">
                                <b>Private</b> · Only you can access this list
                            </label>
                        </div>
                    </div>
                    <hr>

                    <div class="list-editor-save">
                        <div class="button btn btn-primary update-list-button disabled" data-list-id="50406360">Save
                            list
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<div id="activity-popup-dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable">
        <div class="modal-content clearfix">
            <button type="button" class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>

            <div class="modal-header">
                <h3 class="modal-title"></h3>
            </div>

            <div class="modal-body">
                <div class="activity-tweet clearfix"></div>
                <div class="loading">
                    <img src="${user_id}_files/bigger_spinner.gif">
                </div>
                <div class="activity-content clearfix"></div>
            </div>
        </div>
    </div>
</div>

<div id="confirm_dialog" class="modal-container">
    <div class="close-modal-background-target"></div>
    <div class="modal draggable">
        <div class="modal-content">
            <button class="modal-btn modal-close"><i class="close-medium"><span class="hidden-elements">Close</span></i>
            </button>
            <div class="modal-header">
                <h3 class="modal-title"></h3>
            </div>
            <div class="modal-body">
                <p class="modal-body-text"></p>
            </div>
            <div class="modal-footer">
                <button class="btn" id="confirm_dialog_cancel_button"></button>
                <button id="confirm_dialog_submit_button" class="btn primary-btn modal-submit"></button>
            </div>
        </div>
    </div>
</div>

<script>
    using.path = 'https://si0.twimg.com/c/swift/en';

    using.bundles.push({"$bundle\/search.81c566ac7f7721d7b785f3b52b20f080.js":["app\/data\/trends","app\/data\/trends_scribe","app\/ui\/trends\/trends","app\/ui\/trends\/trends_dialog","app\/boot\/trends","app\/ui\/dialogs\/search_operators_dialog","app\/pages\/search\/home","app\/ui\/advanced_search","app\/pages\/search\/advanced"],"$bundle\/vitonboarding.0a9c7438137152d76afd16977d5daa76.js":["app\/ui\/vit\/verification_step","app\/ui\/vit\/mobile_topbar","app\/pages\/vit\/onboarding"],"$bundle\/typeahead.c30cf835bdc22b8bd059e73828fe1f42.js":["app\/pages\/search\/swift_typeahead"],"$bundle\/login.461661e75296ca05c612e3af0605c027.js":["app\/ui\/forms\/input_with_placeholder","app\/pages\/login"],"$bundle\/core.abb4ec6bab8d4be1d1ba0d4fb9f85ff2.js":["$lib\/jquery.js","$lib\/jquery.event.drag.js","core\/jquery","core\/utils","app\/utils\/is_ie","core\/compose","core\/fn","core\/registry","core\/component","core\/clock","core\/parameterize","core\/i18n","core\/logger","$lib\/mustache.js","debug\/mustache","debug\/debug","app\/utils\/querystring","app\/utils\/params","app\/utils\/auth_token","app\/data\/scribe_transport","app\/data\/client_event","app\/data\/with_scribe","app\/data\/scribe_monitor","app\/data\/ddg","app\/ui\/with_interaction_data","app\/utils\/scribe_item_types","app\/utils\/scribe_association_types","app\/data\/with_interaction_data_scribe","app\/data\/tweet_actions_scribe","app\/data\/user_actions_scribe","app\/data\/item_actions_scribe","app\/data\/navigation_scribe","app\/boot\/scribing","app\/data\/with_auth_token","app\/data\/with_data","app\/data\/promoted_logger","app\/ui\/keyboard_shortcuts","app\/ui\/navigation","app\/utils\/time","app\/data\/navigation","$lib\/jquery_autoellipsis.js","$lib\/jquery_color_picker.js","$lib\/jquery.swfobject.js","$lib\/jquery.hashchange.js","$lib\/bootstrap_tooltip.js","app\/jquery_with_plugins","app\/ui\/with_scrollbar_width","app\/ui\/with_dialog","app\/ui\/with_position","app\/ui\/dialogs\/keyboard_shortcuts_dialog","app\/ui\/dialogs\/with_modal_tweet","app\/ui\/dialogs\/retweet_dialog","app\/ui\/dialogs\/delete_tweet_dialog","app\/utils\/with_event_params","app\/ui\/dialogs\/confirm_dialog","app\/ui\/dialogs\/list_membership_dialog","app\/ui\/dialogs\/list_create_dialog","app\/data\/direct_messages","app\/data\/direct_messages_scribe","app\/utils\/levenshtein","app\/utils\/storage\/core","$lib\/gibberish-aes.js","app\/utils\/crypto\/aes","app\/utils\/storage\/with_crypto","app\/utils\/storage\/with_expiry","app\/utils\/storage\/array\/with_array","app\/utils\/storage\/array\/with_max_elements","app\/utils\/storage\/array\/with_unique_elements","app\/utils\/storage\/custom","app\/utils\/cached_ajax","app\/data\/autocomplete","app\/ui\/with_timestamp_updating","app\/ui\/direct_message_dialog","lib\/twitter-text","app\/ui\/with_character_counter","app\/utils\/caret","app\/ui\/with_rtl_tweet_box","app\/ui\/tweet_box","app\/ui\/with_autocomplete_helpers","app\/utils\/string","app\/ui\/autocomplete_dropdown","app\/boot\/direct_messages","app\/data\/profile_popup","app\/data\/profile_popup_scribe","app\/ui\/with_user_actions","app\/ui\/with_item_actions","app\/ui\/profile_popup","app\/data\/user","app\/data\/lists","app\/boot\/profile_popup","app\/ui\/message_drawer","app\/ui\/dialogs\/goto_user_dialog","app\/utils\/setup_polling_with_backoff","app\/ui\/page_title","app\/utils\/cookie","app\/data\/geo","app\/data\/tweet","app\/ui\/tweet_dialog","app\/ui\/new_tweet_button","app\/data\/tweet_box_scribe","app\/utils\/image","app\/utils\/image_thumbnail","app\/ui\/tweet_box_thumbnails","app\/utils\/image_resize","app\/ui\/with_image_selection","app\/ui\/image_selector","app\/ui\/with_click_outside","app\/ui\/geo_picker","app\/ui\/tweet_box_manager","app\/boot\/tweet_boxes","app\/ui\/with_dropdown","app\/ui\/user_dropdown","app\/ui\/signin_dropdown","app\/ui\/language_dropdown","app\/ui\/search_input","app\/ui\/global_nav","app\/ui\/navigation_links","app\/data\/typeahead\/with_cache","app\/utils\/typeahead_helpers","app\/data\/typeahead\/accounts_datasource","app\/data\/typeahead\/saved_searches_datasource","app\/data\/typeahead\/with_external_event_listeners","app\/data\/typeahead\/topics_datasource","app\/data\/typeahead\/typeahead","app\/ui\/typeahead\/with_accounts","app\/ui\/typeahead\/with_saved_searches","app\/ui\/typeahead\/with_topics","app\/ui\/typeahead\/typeahead_dropdown","app\/ui\/typeahead\/typeahead_input","app\/data\/typeahead_scribe","app\/boot\/top_bar","app\/ui\/google","app\/ui\/tooltips","app\/ui\/facebook_token_iframe","app\/ui\/impression_cookies","app\/ui\/banners\/email_banner","app\/ui\/search_query_source","app\/data\/email_banner","app\/boot","app\/utils\/ttft"],"$bundle\/home.d7681b0487cd666f6e252056ec1e0d78.js":["app\/data\/trends","app\/data\/trends_scribe","app\/ui\/trends\/trends","app\/ui\/trends\/trends_dialog","app\/boot\/trends","app\/ui\/infinite_scroll_watcher","app\/data\/timeline","app\/boot\/timeline","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/data\/tweet_actions","app\/data\/conversations","app\/data\/media_settings","app\/ui\/dialogs\/sensitive_flag_confirmation","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/expando\/expanding_tweets","app\/ui\/expando\/close_all_button","app\/ui\/media\/phoenix_shim","app\/utils\/twt","app\/ui\/media\/types","$lib\/easyXDM.js","app\/utils\/easy_xdm","app\/utils\/sandboxed_ajax","app\/ui\/media\/with_legacy_icons","app\/utils\/third_party_application","app\/ui\/media\/legacy_embed","app\/ui\/media\/with_legacy_embeds","app\/ui\/media\/with_flag_action","app\/ui\/media\/with_hidden_display","app\/ui\/media\/with_legacy_media","app\/ui\/media\/with_native_media","app\/ui\/media\/media_tweets","app\/data\/url_resolver","app\/ui\/timelines\/with_keyboard_navigation","app\/ui\/timelines\/with_base_timeline","app\/ui\/timelines\/with_timeline_tweet_spam","app\/ui\/timelines\/with_old_items","app\/utils\/chrome","app\/ui\/timelines\/with_new_items","app\/ui\/timelines\/with_tweet_pagination","app\/ui\/timelines\/tweet_timeline","app\/ui\/user_actions","app\/boot\/tweet_timeline","app\/ui\/who_to_follow_dashboard","app\/data\/who_to_follow","app\/data\/who_to_follow_scribe","app\/ui\/promptbird","app\/utils\/oauth_popup","app\/data\/promptbird","app\/data\/promptbird_scribe","app\/ui\/dashboard_tweetbox","app\/utils\/boomerang","app\/pages\/home"],"$bundle\/mobile_gallery.5f4cde88d8646201ffcafd82980b7faa.js":["app\/ui\/dialogs\/mobile_gallery_download_dialog","app\/ui\/mobile_gallery\/gallery_buttons","app\/ui\/forms\/mobile_gallery_email_form","app\/data\/mobile_gallery\/send_download_link","app\/pages\/mobile_gallery\/gallery","app\/pages\/mobile_gallery\/apps","app\/ui\/mobile_gallery\/firefox_tweet_button","app\/pages\/mobile_gallery\/firefox"],"$bundle\/events.aeffd306337fb07a346eebadf4ad45b9.js":["app\/ui\/media\/phoenix_shim","app\/utils\/twt","app\/ui\/media\/types","$lib\/easyXDM.js","app\/utils\/easy_xdm","app\/utils\/sandboxed_ajax","app\/ui\/media\/with_legacy_icons","app\/utils\/third_party_application","app\/ui\/media\/legacy_embed","app\/ui\/media\/with_legacy_embeds","app\/ui\/media\/with_flag_action","app\/ui\/media\/with_hidden_display","app\/ui\/media\/with_legacy_media","app\/ui\/media\/media_thumbnails","app\/data\/media_thumbnails_scribe","app\/ui\/dashboard_tweetbox","app\/ui\/dialogs\/signin_or_signup","app\/ui\/forms\/input_with_placeholder","app\/ui\/signup_call_out","app\/data\/signup_click_scribe","app\/logged_out_boot","app\/ui\/infinite_scroll_watcher","app\/data\/timeline","app\/boot\/timeline","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/data\/tweet_actions","app\/data\/conversations","app\/data\/media_settings","app\/ui\/dialogs\/sensitive_flag_confirmation","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/expando\/expanding_tweets","app\/ui\/expando\/close_all_button","app\/ui\/media\/with_native_media","app\/ui\/media\/media_tweets","app\/data\/url_resolver","app\/ui\/timelines\/with_keyboard_navigation","app\/ui\/timelines\/with_base_timeline","app\/ui\/timelines\/with_timeline_tweet_spam","app\/ui\/timelines\/with_old_items","app\/utils\/chrome","app\/ui\/timelines\/with_new_items","app\/ui\/timelines\/with_tweet_pagination","app\/ui\/timelines\/tweet_timeline","app\/ui\/user_actions","app\/boot\/tweet_timeline","app\/ui\/timelines\/event_timeline","app\/ui\/gallery\/gallery","app\/pages\/events\/hashtag"],"$bundle\/permalink.9db193ec5b4a66ca4888d6ecc20d6bff.js":["app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/permalink_keyboard_shortcuts","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/utils\/twt","app\/ui\/dialogs\/embed_tweet","app\/data\/tweet_actions","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/expando\/expanding_tweets","app\/ui\/dialogs\/sms_codes","app\/ui\/dialogs\/signin_or_signup","app\/ui\/forms\/input_with_placeholder","app\/ui\/signup_call_out","app\/data\/signup_click_scribe","app\/logged_out_boot","app\/data\/url_resolver","app\/ui\/media\/phoenix_shim","app\/ui\/media\/types","$lib\/easyXDM.js","app\/utils\/easy_xdm","app\/utils\/sandboxed_ajax","app\/ui\/media\/with_legacy_icons","app\/utils\/third_party_application","app\/ui\/media\/legacy_embed","app\/ui\/media\/with_legacy_embeds","app\/ui\/media\/with_flag_action","app\/ui\/media\/with_hidden_display","app\/ui\/media\/with_legacy_media","app\/ui\/media\/with_native_media","app\/ui\/media\/media_tweets","app\/pages\/permalink","app\/pages\/permalink_photo"],"$bundle\/boomerang.24a59a23201b496f7e7a68a52f6dd115.js":["$lib\/boomerang.js","app\/utils\/boomerang_lib"],"$bundle\/profiles.ca311df49d6d2e8278bccc548952a7fc.js":["app\/ui\/dialogs\/signin_or_signup","app\/ui\/forms\/input_with_placeholder","app\/ui\/signup_call_out","app\/data\/signup_click_scribe","app\/logged_out_boot","app\/ui\/profile\/head","app\/ui\/timelines\/profile_timeline","app\/ui\/dashboard_tweetbox","app\/ui\/who_to_follow_dashboard","app\/data\/who_to_follow","app\/data\/who_to_follow_scribe","app\/ui\/media\/phoenix_shim","app\/utils\/twt","app\/ui\/media\/types","$lib\/easyXDM.js","app\/utils\/easy_xdm","app\/utils\/sandboxed_ajax","app\/ui\/media\/with_legacy_icons","app\/utils\/third_party_application","app\/ui\/media\/legacy_embed","app\/ui\/media\/with_legacy_embeds","app\/ui\/media\/with_flag_action","app\/ui\/media\/with_hidden_display","app\/ui\/media\/with_legacy_media","app\/ui\/media\/media_thumbnails","app\/data\/media_thumbnails_scribe","app\/ui\/suggested_users","app\/data\/suggested_users","app\/boot\/profile","app\/ui\/infinite_scroll_watcher","app\/data\/timeline","app\/boot\/timeline","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/data\/tweet_actions","app\/data\/conversations","app\/data\/media_settings","app\/ui\/dialogs\/sensitive_flag_confirmation","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/expando\/expanding_tweets","app\/ui\/expando\/close_all_button","app\/ui\/media\/with_native_media","app\/ui\/media\/media_tweets","app\/data\/url_resolver","app\/ui\/timelines\/with_keyboard_navigation","app\/ui\/timelines\/with_base_timeline","app\/ui\/timelines\/with_timeline_tweet_spam","app\/ui\/timelines\/with_old_items","app\/utils\/chrome","app\/ui\/timelines\/with_new_items","app\/ui\/timelines\/with_tweet_pagination","app\/ui\/timelines\/tweet_timeline","app\/ui\/user_actions","app\/boot\/tweet_timeline","app\/pages\/profile\/favorites","app\/pages\/profile\/tweets","app\/ui\/timelines\/with_cursor_pagination","app\/ui\/timelines\/user_timeline","app\/boot\/user_timeline","app\/pages\/profile\/followers","app\/pages\/profile\/following"],"$bundle\/signup.504db5a9d9c96629ee5825e0a4155765.js":["app\/ui\/signup\/with_captcha","app\/utils\/common_regexp","app\/ui\/signup\/signup_form","app\/ui\/with_password_strength","app\/data\/signup_data","app\/data\/settings","app\/data\/signup_scribe","app\/ui\/signup\/suggestions","app\/ui\/signup\/small_print_expander","app\/pages\/signup\/signup"],"$bundle\/accounts.44dff1420609cffc7755a1914f85dae1.js":["app\/ui\/account\/password_reset_controls","app\/ui\/password_match_pair","app\/ui\/with_password_strength","app\/ui\/password_strength","app\/pages\/account\/password_reset","app\/pages\/account\/password_reset_sent","app\/pages\/account\/password_reset_type","app\/ui\/captcha_dialog","app\/ui\/account\/resend_password_controls","app\/pages\/account\/resend_password","app\/ui\/account\/verify_personal_information_controls","app\/pages\/account\/verify_personal_information","app\/ui\/account\/verify_device_token_controls","app\/pages\/account\/verify_device_token","app\/pages\/account\/mobile_complete","app\/pages\/account\/mobile_sms_complete","app\/pages\/account\/mobile_verify"],"$bundle\/discover.92a242703342e23b34938def6ac20304.js":["app\/data\/trends","app\/data\/trends_scribe","app\/ui\/trends\/trends","app\/ui\/trends\/trends_dialog","app\/boot\/trends","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/data\/tweet_actions","app\/data\/discover_scribe","app\/data\/discover","app\/utils\/ellipsis","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/with_discover_expando","app\/ui\/with_discover_clicks","app\/ui\/discover","app\/ui\/expando\/close_all_button","app\/ui\/discover_nav","app\/pages\/discover\/discover"],"$bundle\/connect.0315b0f632613cab2a098ee4a70dd1c1.js":["app\/ui\/who_to_follow_dashboard","app\/data\/who_to_follow","app\/data\/who_to_follow_scribe","app\/boot\/connect","app\/ui\/infinite_scroll_watcher","app\/data\/timeline","app\/boot\/timeline","app\/data\/activity_popup","app\/ui\/dialogs\/activity_popup","app\/data\/activity_popup_scribe","app\/boot\/activity_popup","app\/data\/tweet_actions","app\/data\/conversations","app\/data\/media_settings","app\/ui\/dialogs\/sensitive_flag_confirmation","app\/ui\/expando\/with_expanding_containers","app\/ui\/expando\/expando_helpers","app\/utils\/tweet_helper","app\/ui\/with_tweet_actions","app\/ui\/tweets","app\/ui\/tweet_injector","app\/utils\/google_maps","app\/ui\/map","app\/ui\/expando\/with_expanding_social_activity","app\/ui\/expando\/expanding_tweets","app\/ui\/expando\/close_all_button","app\/ui\/media\/phoenix_shim","app\/utils\/twt","app\/ui\/media\/types","$lib\/easyXDM.js","app\/utils\/easy_xdm","app\/utils\/sandboxed_ajax","app\/ui\/media\/with_legacy_icons","app\/utils\/third_party_application","app\/ui\/media\/legacy_embed","app\/ui\/media\/with_legacy_embeds","app\/ui\/media\/with_flag_action","app\/ui\/media\/with_hidden_display","app\/ui\/media\/with_legacy_media","app\/ui\/media\/with_native_media","app\/ui\/media\/media_tweets","app\/data\/url_resolver","app\/ui\/timelines\/with_keyboard_navigation","app\/ui\/timelines\/with_base_timeline","app\/ui\/timelines\/with_timeline_tweet_spam","app\/ui\/timelines\/with_old_items","app\/utils\/chrome","app\/ui\/timelines\/with_new_items","app\/ui\/timelines\/with_tweet_pagination","app\/ui\/timelines\/tweet_timeline","app\/ui\/user_actions","app\/boot\/tweet_timeline","app\/pages\/connect\/interactions","app\/pages\/connect\/mentions"],"$bundle\/settings.ebb0e2b41f3d0e81e48721e2cbb03de3.js":["app\/data\/settings","app\/ui\/alert_banner","app\/boot\/settings","app\/data\/settings\/account_scribe","app\/data\/form_scribe","app\/ui\/with_forgot_password","app\/ui\/password_dialog","app\/ui\/protected_verified_dialog","app\/ui\/validating_fieldset","app\/ui\/email_confirmation","app\/ui\/timezone_detector","app\/ui\/deactivated","app\/ui\/geo_deletion","app\/ui\/settings_controls","app\/pages\/settings\/account","app\/data\/settings\/applications_scribe","app\/ui\/oauth_revoker","app\/pages\/settings\/applications","app\/data\/settings\/confirm_deactivation_scribe","app\/pages\/settings\/confirm_deactivation","app\/data\/settings\/design_scribe","app\/ui\/color_picker","app\/ui\/design","app\/ui\/theme_preview","app\/ui\/theme_picker","app\/ui\/image_uploader","app\/pages\/settings\/design","app\/data\/settings\/enhanced_profile_scribe","app\/ui\/capped_file_upload","app\/ui\/settings\/enhanced_profile_form","app\/pages\/settings\/enhanced_profile","app\/ui\/settings\/notifications","app\/pages\/settings\/notifications","app\/ui\/password","app\/ui\/password_match_pair","app\/ui\/with_password_strength","app\/ui\/password_strength","app\/pages\/settings\/password","app\/pages\/settings\/password_confirmation","app\/data\/settings\/profile_scribe","app\/ui\/facebook_button","app\/ui\/profile_image_monitor","app\/ui\/field_edit_warning","app\/ui\/dialogs\/in_product_help_dialog","app\/pages\/settings\/profile","app\/data\/settings\/sms_scribe","app\/ui\/forms\/select_box","app\/ui\/settings\/sms_phone_create_form","app\/ui\/forms\/element_group_toggler","app\/ui\/settings\/device_verified_form","app\/ui\/settings\/sms_phone_verify_form","app\/pages\/settings\/sms"]});


    using(
            'app/pages/profile/tweets',
            'core/jquery',

            function(page, $) {

                page({"smsDeviceVerified":false,"swiftRoutes":{"profile":"\/niteesh3k"},"pageName":"profile","initialState":{"module":"app\/pages\/profile\/tweets","cache_ttl":300,"section":null,"title":"${profile_name} (${user_id}) on Twitter"},"deviceEnabled":false,"pushState":false,"sectionName":"no_replies","loggedIn":true,"sandboxes":{"jsonp":"https:\/\/si0.twimg.com\/a\/1342841381\/jsonp_sandbox.html","detailsPane":"https:\/\/si0.twimg.com\/a\/1342841381\/details_pane_content_sandbox.html"},"hasPushDevice":false,"scribeMetrics":500,"geoEnabled":false,"experiments":{"recommended_bid_283":{"bucket":"lower_recommended_bid","experiment_key":"recommended_bid_283","bucket_names":["control","lower_recommended_bid"],"version":8},"mobile_redirect_to_signup_278":{"bucket":"redirect","experiment_key":"mobile_redirect_to_signup_278","bucket_names":["control","redirect"],"version":5},"mobile_screen_name_hint_new_281":{"bucket":"fancy","experiment_key":"mobile_screen_name_hint_new_281","bucket_names":["control","fancy"],"version":4},"search_experiments":{"bucket":"hashtags_hits_500_decay_60","experiment_key":"more_recent_hashtag_cashtag_ranking_310","bucket_names":["control","hashtags_hits_750_decay_60","hashtags_hits_500_decay_360","hashtags_hits_500_decay_60","hashtags_hits_250_decay_60"],"version":8},"welcome_top_people_286":{"bucket":"control","experiment_key":"welcome_top_people_286","bucket_names":["control","top_people"],"version":3},"mobile_m5_nux_295":{"bucket":"control","experiment_key":"mobile_m5_nux_295","bucket_names":["control","sul_then_wtf","no_blocking"],"version":6}},"assetsBasePath":"https:\/\/si0.twimg.com\/a\/1342841381\/","profile_id":51376979,"internalReferer":"\/","typeaheadData":{"savedSearches":{"items":[],"enabled":true},"accounts":{"remoteQueriesEnabled":true,"blockedIds":[],"enabled":true,"localQueriesEnabled":true},"showDebugInfo":false,"topics":{"remoteQueriesEnabled":true,"enabled":true,"localQueriesEnabled":true}},"scribeBufferSize":3,"periodicScribeFlush":0,"screenName":"niteesh3k","environment":"production","wtf_options":{"screen_name":"${user_id}","limit":3,"small_avatar":true,"pc":true,"display_location":"st-component"},"formAuthenticityToken":"534b1bd42ec027a09d024e9b698d9ad37d9171f2","profile_user":{"id":51376979,"profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2325645639\/image_normal.jpg","geo_enabled":false,"default_profile_image":false,"profile_sidebar_border_color":"edf2ea","favourites_count":4,"following":true,"show_all_inline_media":false,"utc_offset":19800,"profile_background_tile":true,"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2325645639\/image_normal.jpg","url":null,"profile_sidebar_fill_color":"292028","name":"${profile_name}","followers_count":1412237,"created_at":"Sat Jun 27 07:25:39 +0000 2009","verified":true,"protected":false,"time_zone":"Mumbai","default_profile":false,"profile_background_color":"7a8282","friends_count":279,"id_str":"51376979","location":"\u00dcT: 19.167049,72.845301","description":"a female actor who lives to eat and read in that order.","follow_request_sent":false,"profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/437788738\/GRAZIA-SonamKapoor-2584.jpg","screen_name":"${user_id}","profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/437788738\/GRAZIA-SonamKapoor-2584.jpg","listed_count":11332,"profile_link_color":"a6b0b3","lang":"en","profile_use_background_image":true,"statuses_count":5968,"status":{"in_reply_to_user_id":null,"in_reply_to_status_id_str":null,"id_str":"227688930449965056","in_reply_to_status_id":null,"favorited":false,"created_at":"Tue Jul 24 08:57:25 +0000 2012","in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"truncated":false,"coordinates":null,"geo":null,"place":null,"retweet_count":43,"source":"\u003Ca href=\"http:\/\/ubersocial.com\" rel=\"nofollow\"\u003EUberSocial for BlackBerry\u003C\/a\u003E","contributors":null,"retweeted":false,"id":227688930449965056,"text":"Ok I'm obsessed with cut the rope."},"is_translator":false,"profile_text_color":"e8e1e8","notifications":false,"contributors_enabled":false},"timeline_url":"\/${user_id}"});
                window.__swift_loaded = true;
                window.swiftActionQueue && window.swiftActionQueue.flush($);
                $(document).trigger('uiSwiftLoaded');
            });
</script>
<script></script>

</body>
</html>
