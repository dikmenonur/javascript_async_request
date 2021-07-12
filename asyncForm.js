var asyncRequest = new function () {
    async function initialize() {
        console.log("Async Load");
        $.ajaxSetup({
            async: false,
            dataType: 'json',
            method: 'POST',
            contentType: "application/json; charset=utf-8"
        });
    }

    var dataResponse = [];
    async function asyncFormOnSubmit(event, obj) {
        event.preventDefault();
        var jTarget = jQuery(event.target);
        var action = jTarget.attr('action');
        //var type = jTarget.attr('type');

        const response = await $.post(env.applicationUrl + "/" + action, obj)
            .done(function (response) {
                console.log(response.data);
            }).fail(function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }).always(function () {
                console.log("finished");
            });
        return response;
    }                                       

    async function ajaxCompleteCheck() {
        return dataResponse;
    }

    async function asyncPostData(actionUrl, requestData) {
        const response = await $.post(env.applicationUrl + "/" + actionUrl, JSON.stringify(requestData))
            .done(function (response) {
                console.log(response.data);
            }).fail(function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            }).always(function () {
                console.log("finished");
            });

        return response;
    }

    async function asyncGetData(actionUrl, requestData) {
        const response = await $.get(env.applicationUrl + "/" + actionUrl, requestData)
            .done(function (response) {
                console.log(response.data);
                console.log("Request Successfully: " + response);
            }).fail(function (jqXHR, textStatus) {
                console.log("Request failed: " + textStatus);
            });

        return response;
    }

    async function asyncGet(actionUrl, data) {
        return await asyncGetData(actionUrl, data);
    }

    async function asyncPostAction(actionUrl, data) {
        return await asyncPostData(actionUrl, data);
    }

    async function asyncPost(event) {
        return await asyncFormOnSubmit(event);
    }

    async function asyncDelete(event) {
        return await asyncFormOnSubmit(event);
    }

    async function asyncModify(event) {
        return await asyncFormOnSubmit(event);
    }

    async function asyncInsert(event, obj) {
        return await asyncFormOnSubmit(event, obj);
    }

    return {
        InitAsync: async function () {
            await initialize();
        },

        PostAsync: async function (element) {
            return await asyncPost(element);
        },

        DeleteAsync: async function (element) {
            return await asyncDelete(element);
        },

        GetAsync: async function (actionUrl, element) {
            return await asyncGet(actionUrl, element);
        },

        PostActionAsync: async function (actionUrl, element) {
            return await asyncPostAction(actionUrl, element);
        },

        CompleteAsync: async function () {
            return await ajaxCompleteCheck(dataResponse);
        },

        UpdateAsync: async function (element) {
            return await asyncModify(element);
        },

        InsertAsync: async function (element, obj) {
            return await asyncInsert(element, obj);
        }
    }
}();

document.addEventListener('DOMContentLoaded', function () {
    asyncRequest.InitAsync();
});
