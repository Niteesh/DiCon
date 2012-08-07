<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head><title>Simple jsp page</title>
    <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/dojo/1.7.1/dijit/themes/claro/claro.css">
    <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.7.1/dojo/dojo.js"
            data-dojo-config="isDebug: true, async: true, parseOnLoad: true"></script>
</head>
<body class="claro">

<p>When pressing this button the dialog will popup:</p>
<button id="buttonThree" data-dojo-type="dijit.form.Button" type="button">Show me!
    <script type="dojo/method" data-dojo-event="onClick" data-dojo-args="evt">
        dijit.byId("formDialog").show();
    </script>
</button>

<div class="content-main" data-dojo-type="dijit.Dialog" id="formDialog" title="Form Dialog"
     execute="alert('submitted w/args:\n' + dojo.toJson(arguments[0], true));">
    <div class="content-header">
        <div class="header-inner">
            <h2>Profile</h2>

            <p class="subheader">This information appears on your public profile, search results, and beyond.</p>
        </div>
    </div>
    <div class="content-inner no-stream-end">
        <form id="profile-form" class="form-horizontal" enctype="multipart/form-data" method="POST"
              action="https://twitter.com/settings/profile">
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
                             src="https://twimg0-a.akamaihd.net/sticky/default_profile_images/default_profile_2_bigger.png">

                        <div class="uploader-tools">
                            <div class="photo-selector">
                                <button class="btn" type="button">Choose file</button>
                                <span class="photo-file-name">No file selected</span>

                                <div class="image-selector">
                                    <input name="media_file_name" class="file-name" type="hidden">
                                    <input name="media_data_empty" class="file-data" type="hidden">
                                    <input name="media_empty" class="file-input" type="file">

                                    <div class="swf-container"></div>
                                </div>
                            </div>
                            <p>
                                Maximum size of 700k. JPG, GIF, PNG.<br>
                                Need help uploading a profile image? <a
                                    href="https://support.twitter.com/articles/127871" target="_blank"
                                    id="profile_image_help">Learn more</a>.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </fieldset>
            <hr>
            <fieldset class="control-group">
                <label class="control-label" for="user_name">Name</label>

                <div class="controls">
                    <input id="user_name" maxlength="20" name="user[name]" value="Harishchandra Reddy" type="text">

                    <p>Enter your real name, so people you know can recognize you.</p>
                </div>
            </fieldset>
            <fieldset class="control-group">
                <label class="control-label" for="user_location">Location</label>

                <div class="controls">
                    <input id="user_location" name="user[location]" value="Mumbai" type="text">

                    <p>Where in the world are you?</p>
                </div>
            </fieldset>
            <fieldset id="user_web_fieldset" class="control-group">
                <label class="control-label" for="user_url">Website</label>

                <div class="controls">
                    <input id="user_url" name="user[url]" rel="http://" size="30" value="http://" type="text">

                    <p>Have a homepage or a blog? Put the address here.</p>

                    <p><a href="/goodies" title="Put Twitter on your site!" id="tfw_link">You can also add Twitter to
                        your site here.</a></p>
                </div>
                <div class="controls">
                </div>
            </fieldset>
            <fieldset class="control-group">
                <label class="control-label" for="user_description">Bio</label>

                <div class="controls">
                    <textarea class="input-xlarge" id="user_description" maxlength="160" name="user[description]">DotA,
                        WoW:Wotlk , AoE2, CS1.6. Nuff said.</textarea>

                    <p>About yourself in fewer than <strong>160</strong> characters.</p>
                </div>
            </fieldset>

            <hr>

            <div id="fb-button" class="fb-button-or-iframe">
                <label class="control-label" for="">Facebook</label>

                <div class="controls">
                    <iframe id="fb-iframe" style="display: none;" frameborder="0" scrolling="no"></iframe>
                    <p><a href="#" id="fb-anchor" class="btn" style=""><span>Post your Tweets to Facebook</span></a></p>

                    <p>Having trouble? <a href="https://support.twitter.com/articles/31113" target="_blank">Learn
                        more</a>.</p>
                </div>
            </div>
            <hr>
            <div class="form-actions">
                <button id="settings_save" class="btn primary-btn" type="submit">Save changes</button>
            </div>
        </form>

        <div id="in_product_help_dialog" class="modal-container modal-profile-image-help">
            <div class="close-modal-background-target"></div>
            <div class="modal modal-small draggable">
                <div class="modal-content">
                    <button class="modal-btn modal-close"><i class="close-medium"></i></button>
                    <div class="modal-header">
                        <h3 class="modal-title">Upload a profile image</h3>
                    </div>
                    <div class="modal-body">
                        <p>How to upload or change your profile picture:</p>
                        <ol>
                            <li>Click the <strong>Choose file</strong> button.</li>
                            <li><strong>Select a file</strong> to upload as your picture. It must be smaller than 700k
                                and in JPG, GIF, or PNG format (no animated GIFs).
                            </li>
                            <li>Click <strong>Save changes</strong> at the bottom of the page to see a thumbnail.</li>
                        </ol>
                    </div>
                    <div class="modal-footer">
                    <span class="satisfaction-prompt">
                      <span id="satisfaction_question">Was this helpful?</span>
                      <span style="display: none;" id="satisfaction_feedback">Thanks for the feedback!</span>
                    </span>

                        <div id="satisfaction_buttons">
                            <button id="helpful_button" class="btn">Yes</button>
                            <button id="not_helpful_button" class="btn">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<script>
    require(["dojo/parser", "dijit/form/Button", "dijit/Dialog", "dojo/domReady!"]);
</script>
</body>
</html>