<!DOCTYPE html>
<html class="   js"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <title>DiCon Home</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">


      <link href="https://twitter.com/favicons/favicon.ico" rel="shortcut icon" type="image/x-icon">

    <!-- base href="https://twitter.com/" -->


        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core.css" type="text/css" media="screen">


      <link rel="canonical" href="https://twitter.com/">



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


  <style charset="utf-8" class="lazyload">@import "https://si0.twimg.com/a/1342481270/t1/css/t1_more.bundle.css";</style></head>
  <body class="t1  logged-in front-random-image-city-balcony    mozilla user-style-niteesh3k"><iframe tabindex="-1" role="presentation" style="position: absolute; top: -9999px;" src="${pageContext.request.contextPath}/static/html/receiver.html"></iframe>
    <div class="route-home" id="doc">
      <div class="push-loader" id="pushStateSpinner"></div>

    <div class="topbar js-topbar">
      <div id="banners" class="js-banners">
        <noscript><div class="banner-outer">
  <div class="banner">
    <div class="banner-inside noscript-warning">
      <h5>Twitter.com makes heavy use of JavaScript.</h5>
      <span class="warning">If you cannot enable it in your browser's preferences, you may have a better experience on our <a href="http://m.twitter.com">mobile site</a>.</span>
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
              <a class="js-hover" href="https://twitter.com/#%21/" data-component-term="home_nav" data-nav="home">
                <span class="new-wrapper"><i class="nav-home"></i><i class="nav-new"></i></span> Home
              </a>
              </li>
              <li class="people" data-global-action="connect">
              <a class="js-hover" href="https://twitter.com/i/connect" data-component-term="connect_nav" data-nav="connect">
                <span class="new-wrapper"><i class="nav-people"></i><i class="nav-new"></i></span> Connect
              </a>
              </li>
              <li class="topics" data-global-action="discover">
              <a class="js-hover" href="https://twitter.com/i/discover" data-component-term="discover_nav" data-nav="discover">
                <span class="new-wrapper"><i class="nav-topics"></i><i class="nav-new"></i></span> Discover
              </a>
              </li>
            </ul>
            <i class="bird-topbar-etched"></i>

            <div class="pull-right">
              <div class="well topbar-tweet-btn">
                <button original-title="Compose new Tweet" id="global-new-tweet-button" type="button" class="btn btn-tweet js-global-new-tweet js-hover js-tooltip" data-placement="bottom" data-component-term="new_tweet_button">
                  <i class="nav-tweet"></i>
                </button>
              </div>
              <i class="topbar-divider"></i>

              <ul class="nav">
                <li class="me dropdown session js-session" data-global-action="t1me" id="user-dropdown">
                <a class="dropdown-toggle js-dropdown-toggle js-hover" href="#" id="user-dropdown-toggle">
                  <span class="new-wrapper"><i class="nav-me"><span class="hidden-elements">Settings and help</span></i><i class="nav-new"></i></span> <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
              <li class="dropdown-caret">
                <span class="caret-outer"></span>
                <span class="caret-inner"></span>
              </li>

              <li class="current-user" data-name="profile">
                <a href="https://twitter.com/niteesh3k" class="account-summary account-summary-small" data-nav="profile">
    	<div class="content">
    	  <div class="account-group js-mini-current-user" data-user-id="612622708" data-screen-name="niteesh3k">
    	    <img class="avatar size32" src="DiCon_Home_Files/Niteesh_Kumar_normal.png" alt="niteesh kumar" data-user-id="612622708">
    	    <b class="fullname">niteesh kumar</b>
    	    <small class="metadata">View my profile page</small>
    	  </div>
    	</div>
    </a>
  </li>


                <li class="dropdown-divider"></li>
                <li class="messages" data-name="messages">
                  <a class="js-dm-dialog" href="https://twitter.com/#%21/" data-nav="messages">
                    <span class="js-direct-message-count count"></span>
                    Direct messages
                  </a>
                </li>
                <li data-name="lists"><a href="https://twitter.com/niteesh3k/lists" data-nav="all_lists">Lists</a></li>
                <li class="dropdown-divider"></li>


              <li><a href="https://support.twitter.com/" data-nav="help_center">Help</a></li>


                <li>
                  <a href="#" class="js-keyboard-shortcut-trigger" data-nav="shortcuts">
                    Keyboard shortcuts
                  </a>
                </li>








              <li class="dropdown-divider"></li>



                  <li><a href="https://twitter.com/settings/account" data-nav="settings">Settings</a></li>



              <li>
                <a class="js-signout-button" id="signout-button" href="#" data-nav="logout">Sign out</a>
                <form class="dropdown-link-form signout-form" id="signout-form" action="/logout" method="POST">
                  <input value="ee512842f7fde4a344c9fd1b474546d89bcd3a44" name="authenticity_token" class="authenticity_token" type="hidden">
                  <input name="reliability_event" class="js-reliability-event" type="hidden">
                  <input name="scribe_log" type="hidden">
                </form>
              </li>

            </ul>
            </li>
              </ul>

              <i class="topbar-divider"></i>
              <form class="form-search js-search-form has-saved-searches" action="/search" id="global-nav-search">
            <span class="search-icon js-search-action">
              <i class="nav-search" tabindex="0"></i>
            </span>
            <label class="hidden-elements" for="search-query">Search</label>
            <input class="search-input" id="search-query" placeholder="Search" name="q" autocomplete="off" spellcheck="false" tabindex="-1" type="text">
            <input disabled="disabled" class="search-input search-hinting-input" id="search-query-hint" autocomplete="off" spellcheck="false" type="text"><div class="dropdown-menu typeahead">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <div class="dropdown-inner js-typeahead-results">
  <div style="display: none;" class="js-typeahead-saved-searches">
  <ul class="typeahead-items typeahead-searches">
  </ul>
</div><div style="display: none;" class="typeahead-accounts js-typeahead-accounts">
  <ul class="typeahead-items">
  </ul>
</div></div>
</div>
          </form>

            </div>



            <a style="display: none;" original-title="Close all open Tweets" id="close-all-button" class="close-all-tweets js-close-all-tweets" href="#">
              <i class="nav-breaker"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="alert-messages " id="message-drawer">
      </div>
    </div>
    <div id="page-outer">
        <div id="page-container" class="wrapper home-container">
          <div class="new-js-banners"></div>
            <div id="page-node-home">
              <div class="dashboard"><div data-component-term="promptbird_dashboard_placeholder" id="js-promptbird-dashboard-narrow-hook" class="component"></div><div data-component-term="mini_home_profile" class="module mini-profile component">

  <div class="flex-module profile-summary js-profile-summary">
  <a href="https://twitter.com/niteesh3k" class="account-summary account-summary-small" data-nav="profile">
	<div class="content">
	  <div class="account-group js-mini-current-user" data-user-id="612622708" data-screen-name="niteesh3k">
	    <img class="avatar size32" src="DiCon_Home_Files/Niteesh_Kumar_normal.png" alt="niteesh kumar" data-user-id="612622708">
	    <b class="fullname">${current_user_fullname}</b>
	    <small class="metadata">View my profile page</small>
	  </div>
	</div>
</a></div>

    <div class="js-mini-profile-stats-container"><ul class="stats js-mini-profile-stats">
   <li><a href="https://twitter.com/niteesh3k" data-element-term="tweet_stats" data-nav="profile">


        <strong>0</strong> Tweets

    </a></li>
    <li><a href="https://twitter.com/#%21/following" data-element-term="following_stats" data-nav="following"><strong>15</strong> Following</a></li>
    <li><a href="https://twitter.com/#%21/followers" data-element-term="follower_stats" data-nav="followers"><strong>0</strong> Followers</a></li>
</ul></div>

<div class="tweet-box tweet-user"><div class="tweet-box condensed">
  <div class="text-area">
    <div class="text-area-editor twttr-editor"><textarea style="width: 258px; height: 75px; overflow: hidden;" class="twitter-anywhere-tweet-box-editor">Compose new Tweet...</textarea><ul style="width: 274px; top: 31px; left: 0px; visibility: hidden;" class="autocomplete-container"></ul><div style="display: none; font-family: &quot;Helvetica Neue&quot;,Arial,sans-serif; font-size: 13px; font-weight: 400; line-height: 18px; padding: 6px 8px 5px; white-space: pre-wrap; width: 258px; word-wrap: break-word;"></div></div>
  </div>
  <div class="tweet-button-container"><div class="turkey-control">
  <div class="turkey-add-action">
    <div class="turkey"></div>
    <div class="swf"></div>
  </div>
  <form method="post" action="https://upload.twitter.com/1/statuses/update_with_media.iframe" enctype="multipart/form-data" class="turkey-selected-files" target="tweetbox_1"></form>
  <iframe class="turkey-post-target" name="tweetbox_1"></iframe>
</div>
      <span class="geo-control">
  <a href="#" class="geo-location">
    <span original-title="" class="geo-icon">&nbsp;</span>
    <span class="geo-dropdown-icon">&nbsp;</span>
  </a>
</span>    <div class="tweet-button-sub-container">
      <img src="DiCon_Home_Files/spinner.gif" class="tweet-spinner" style="display: none;">
      <span style="opacity: 0;" class="tweetbox-counter-tipsy"></span><input class="tweet-counter" value="120" disabled="disabled">
      <a href="#" class="tweet-button btn disabled">Tweet</a>    </div>
  </div>
</div></div></div><div data-component-term="japanese_ad" style="display: none;" class="component"></div><div data-component-term="user_recommendations" class="component"><div class="module wtf-module js-wtf-module has-content">

  <div class="flex-module">

    <div class="flex-module-header">
      <h3>Who to follow</h3>
      <small>· <a class="js-refresh-suggestions" href="#">Refresh</a></small>
      <small class="view-all">· <a href="https://twitter.com/#%21/who_to_follow/suggestions" data-element-term="view_all_link">View all</a></small>
    </div>

    <div class="js-recommended-followers dashboard-user-recommendations flex-module-inner" data-section-id="wtf">
          <div class="js-account-summary account-summary js-actionable-user promoted-account js-profile-popup-actionable" data-user-id="14117843" data-feedback-token="38" data-impression-id="4a6fd52ccc9360bb">
  <div class="dismiss js-action-dismiss"><i class="close"></i></div>
  <div class="content">
    <a class="account-group js-recommend-link js-user-profile-link user-thumb" href="https://twitter.com/SamsungMobileUS" data-user-id="14117843">

      <img class="avatar js-action-profile-avatar " src="DiCon_Home_Files/SMUSA_Twitter_profile_normal.jpg" alt="Samsung Mobile US">
      <span class="account-group-inner js-action-profile-name" data-user-id="14117843">
        <b class="fullname">Follow Suggestion 1</b>
        <span>‏</span>
        <i class="verified"></i>
          <span class="username"><s>@</s><span class="js-username">followusername</span></span>
      </span>
    </a>

    <small class="metadata social-context">

      </small>


      <span class="js-follow-state follow-state">
        <a href="#" class="js-action-follow js-link" data-user-id="14117843">Follow</a>

      </span>
  </div>
</div>




    </div>



  </div>
</div></div><div data-component-term="trends" style="display: block;" class="module trends  component">
  <div class="flex-module trends-inner">
    <div class="flex-module-header">

  <h3>
    <span woeid="1" class="js-trend-location">Trends</span>
  </h3>

</div>
<div class="flex-module-inner">
  <ul class="trend-items js-trends"><li class="js-trend-item  " data-trend-name="#MyLastWordsBeforeIDie">
      <a href="https://twitter.com/#%21/search/%23MyLastWordsBeforeIDie" data-query-source="trend_click">NEW TRENDS</a>
</li></ul>
</div>
</div></div><div data-component-term="footer" class="component"><div class="module site-footer ">
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
</div></div></div>
<div class="content-main js-content-main breakable">
  <div id="js-promptbird-below-black-bar-hook"></div>
  <div id="js-empty-timeline-recommendations-module-hook"></div>
  <div class="content-header js-stream-header"><div class="header-inner">
  <h2>
    <span class="content-header-buttons js-header-button-container"></span>


    <span class="js-stream-title">Tweets</span>&nbsp;<small class="view-toggler js-view-toggler"></small>
  </h2>
  </div></div>

  <div class="stream js-stream-manager-container">
<div class="stream-manager js-stream-manager-container" id="home-stream-manager">
<div class="stream-title"></div>
<div class="stream-container">
<div media="true" data-component-term="stream" class="stream home-stream">

<div class="js-stream-items stream-items" id="stream-items-id">
<div class="js-stream-item stream-item stream-item expanding-stream-item" data-item-id="225153770210856960"
     data-item-type="tweet" id="stream-item-tweet-225153770210856960">


    <div class="tweet original-tweet js-stream-tweet js-actionable-tweet js-hover js-profile-popup-actionable js-original-tweet        with-social-proof"
         data-tweet-id="225153770210856960" data-item-id="225153770210856960" data-screen-name="sonamakapoor"
         data-name="Sonam Kapoor" data-user-id="51376979" data-is-reply-to="">


        <i class="dogear"></i>


        <div class="content">


            <div class="stream-item-header">
                <small class="time">
                    <a href="https://twitter.com/sonamakapoor/status/225153770210856960"
                       class="tweet-timestamp js-permalink" title="2:33 PM - 17 Jul 12"><span
                            class="_timestamp js-short-timestamp " data-time="1342515816000"
                            data-long-form="true">3h</span></a>
                </small>
                <a class="account-group js-account-group js-action-profile js-user-profile-link"
                   href="https://twitter.com/sonamakapoor" data-user-id="51376979">
                    <img class="avatar js-action-profile-avatar" src="DiCon_Home_Files/image_normal.jpg"
                         alt="Sonam Kapoor">
                    <strong class="fullname js-action-profile-name show-popup-with-id">FULL NAME</strong>
                    <span></span><span class="username js-action-profile-name"><s>@</s><b>USERNAME</b></span>
                </a>
            </div>


            <p class="js-tweet-text">TWEET TEXT</p>

                </a>


            </div>


            <div class="expanded-content js-tweet-details-dropdown">
            </div>
        </div>
    </div>

</div>

  <div class="stream-loading">
    <div class="stream-end-inner">
        <span class="spinner" title="Loading..."></span>
    </div>
</div>


</body></html>