

    var latest_feed_id = 0;
    refreshFeed();
    setInterval(refreshFeed, 5000);
    function refreshFeed() {
        require(["dojo/_base/xhr", "dojo/dom", "dojo/dom-construct", "dojo/_base/array", "dojo/NodeList-dom", "dojo/domReady!"],
                function(xhr, dom, domConstruct) {

                    xhr.get({
                                url: "${current_user_id}/newsfeed",
                                handleAs: "json",
                                headers: { "Accept": "application/json"},
                                content: {
                                    latest_feed_id : latest_feed_id
                                },
                                load: function(response) {
                                    for (var i in response) {
                                        var newFeed = new EJS({url: '${pageContext.request.contextPath}/static/ejs/tweet.ejs'}).render(response[i]);
                                        domConstruct.place(newFeed, dom.byId("stream-list"), "first");
                                        latest_feed_id = response[i]["tweet_id"];
                                    }
                                    console.log("new feeds = " + response.length);

                                },
                                error: function() {
                                    console.log("Error fetching json for newsfeeds.");
                                },
                                handle: function() {
                                    console.log("latest feed id  = " + latest_feed_id);
                                }
                            });

                });
    }


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
                        url: "search.json",
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
                                url: "${current_user_id}/tweets/new",
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
                                }
                                error: function() {
                                    console.log("Error sending tweets.");
                                }
                            });
                });


            });


