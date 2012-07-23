dojo.provide("todo.TodoItem");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");

dojo.declare("todo.TodoItem", [dijit._Widget, dijit._Templated], {
    templateString: dojo.cache("todo", "TodoItem.html"),
    deleteItem: function() {
        var widget = this
        dojo.xhrPost({
            content : {
                id : this.itemID
            },
            url: "/todo/delete",
            handleAs: "json",
            load: function(response, ioArgs) {
                widget.destroyRecursive()
            }
        });
    },
    updateItem: function(event) {
        var widget = this
        var newName = dojo.byId("updateItemName" + widget.itemID).value
        var form = event.srcElement
        ajaxFormPost(form, function(response, ioArgs) {
            dojo.byId("itemName" + widget.itemID).innerHTML = newName
        })
    }
});