<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/dojo/1.7.2/dojo/dojo.js"
        data-dojo-config="async: true, parseOnLoad: true"></script>
<button id="fadeOutButton">Fade block out</button>
<button id="fadeInButton">Fade block in</button>

<div id="fadeTarget" style="display:none" height="auto" class="red-block">
    A red block
</div>
<script>
    require(["dojo/_base/fx", "dojo/on", "dojo/dom", "dojo/domReady!"], function(fx, on, dom) {
        var fadeOutButton = dom.byId("fadeOutButton"),
            fadeInButton = dom.byId("fadeInButton"),
            fadeTarget = dom.byId("fadeTarget");
        fadeTarget.style.opacity=0;
        on(fadeOutButton, "click", function(evt){
            fx.fadeOut({ node: fadeTarget }).play();
        });
        on(fadeInButton, "click", function(evt){
            fx.fadeIn({ node: fadeTarget }).play();
        });
    });
</script>