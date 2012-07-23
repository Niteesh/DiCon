dojo.registerModulePath("todo", "/static/js/widgets")
function ajaxFormPost(form, load) {
    dojo.xhrPost({
        form:form,
        url:form.action,
        handleAs: "json",
        load: load
    });
}