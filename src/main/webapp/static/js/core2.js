require(["dojo/_base/xhr", "dojo/on", "dojo/dom", "dojo/query", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"], function(xhr, on, dom, query, domConstruct) {
    var hide_searchresults_timeout;
    on(dom.byId("search-query"), "focus", function() {
        clearTimeout(hide_searchresults_timeout);
        query("#global-nav-search").addClass("focus");
        query("#search-query").addClass("focus");

        if (this.value != "" && dom.byId("results-list").childNodes.length > 0)
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
                            var result = new EJS({url: '/static/ejs/searchResult.ejs'}).render(response[i]);
                            domConstruct.place(result, dom.byId("results-list"));
                        }
                    },
                    error: function() {
                        console.log("Error fetching search results.");
                    }
                });
    }
});


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