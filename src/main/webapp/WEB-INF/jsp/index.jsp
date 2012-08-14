<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <title>DiCon</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="descripetion"
          content="Instantly connect to what's most important to you. Follow your friends, experts, favorite celebrities, and breaking news.">

    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_core_logged_out.css" type="text/css"
          media="screen">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/t1_more.css" type="text/css"
          media="screen">


</head>
<body class="t1  logged-out   front-random-image-city-balcony    mozilla front-page">
<div class="route-front" id="doc">

    <div class="topbar js-topbar">
        <div class="global-nav" data-section-term="top_nav">
            <div class="global-nav-inner">
                <div class="container">


                    <ul class="nav js-global-actions">
                        <li class="home" data-global-action="t1home">
                            <a class="nav-logo-link" href="#" data-nav="front">
                                <i class="bird-topbar-blue"></i>
                            </a>
                        </li>
                    </ul>


                    <ul class="nav secondary-nav language-dropdown">
                        <li class="dropdown js-language-dropdown">
                            <a class="dropdown-toggle" href="javascript:;">
                                <small>Language:</small>
                                <span class="js-current-language">English</span>
                                <b class="caret"></b>
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
        <div class="alert-messages " id="message-drawer">
        </div>
    </div>
    <div id="page-outer">
        <div class="front-container " id="front-container">

            <noscript>
                <div class="front-warning">
                    <h3>DiCon.com makes heavy use of JavaScript</h3>

                    <p>If you cannot enable it in your browser's preferences, you may have a better experience on our <a
                            href="http://m.DiCon.com">mobile site</a>.</p>
                </div>
            </noscript>

            <div class="front-warning" id="front-no-cookies-warn">
                <h3>DiCon.com makes heavy use of browser cookies</h3>

                <p>Please enable cookies in your browser preferences before signing in.</p>
            </div>


            <div class="front-card">
                <div class="alert-messages ${messageVisibility}" id="message-drawer">
                    <div class="message ">
                        <div class="message-inside">
                            <span class="message-text"><font color="red">${message}</font></span>
                            <a class="dismiss" href="#">&times;</a>
                        </div>
                    </div>
                </div>
                <div class="front-welcome">
                    <div class="front-welcome-text">
                        <h1>Welcome to DiCon.</h1>

                        <p>Find out what's happening, right now, with the people and organizations you care about.</p>
                    </div>
                </div>


                <div class="front-signin js-front-signin">
                    <form action="/sign_in" class="signin" method="post">
                        <div class="placeholding-input username">

                            <input class="text-input email-input" name="email" title="Email" autocomplete="on"
                                   type="email"
                                   placeholder="Email">


                        </div>

                        <table class="flex-table password-signin">
                            <tbody>
                            <tr>
                                <td class="flex-table-primary">
                                    <div class="placeholding-input password flex-table-form">

                                        <input class="text-input flex-table-input" name="password" title="Password"
                                               type="password" placeholder="Password">

                                        <div display="block" style="possition : absolute; left: 100px"> wrong password
                                        </div>

                                    </div>
                                </td>
                                <td class="flex-table-secondary">
                                    <button tabindex="0" type="submit"
                                            class="submit btn primary-btn flex-table-btn js-submit">Sign in
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="remember-forgot">
                            <label class="remember">
                                <input value="1" name="remember_me" type="checkbox">
                                <span>Remember me</span>
                            </label>
                            <span class="separator">&nbsp;-&nbsp;</span>
                            <a class="forgot" href="#">Forgot password?</a>
                        </div>


                    </form>
                </div>

                <div class="front-signup js-front-signup">
                    <h2><strong>New to DiCon?</strong> Sign up</h2>

                    <form action="/sign_up" class="signup" method="post">

                        <div class="placeholding-input">

                            <input class="text-input" autocomplete="off" name="fullname" maxlength="20" type="text"
                                   placeholder="Full name">

                        </div>
                        <div class="placeholding-input">
                            <input class="text-input email-input" autocomplete="off" name="email" type="email"
                                   placeholder="Email">

                        </div>
                        <div class="placeholding-input">
                            <input class="text-input" name="password" type="password" placeholder="Password">


                        </div>

                        <input value="front" name="context" type="hidden">
                        <input value="ad861fffa7f545d27ed2e05407ade8f72ae08abe" name="authenticity_token" type="hidden">
                        <button type="submit" class="btn signup-btn">
                            Sign up for DiCon
                        </button>
                    </form>
                </div>


            </div>

            <div class="footer inline-list">
                <ul>
                    <li><a href="#">About</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Help</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Blog</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Mobile</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Status</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Jobs</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Terms</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Privacy</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Advertisers</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Businesses</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Media</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Developers</a><span class="dot divider"> ·</span></li>
                    <li><a href="#">Resources</a><span class="dot divider"></span></li>
                    <li><span class="copyright">&#169; 2012 DiCon</span></li>
                </ul>
            </div>


        </div>

    </div>
</div>


</body>
</html>
