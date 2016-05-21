/*
    app config
*/
softnetApp.main
    .constant('Config', {
        api: {
            url: window.location.protocol + "//" + window.location.host + "/api",
        },
        app: {
            // url: window.location.protocol + "//" + window.location.host,
            url: window.location.protocol + "//" + window.location.host + '/app',
            defaultState: 'app.home',
        }
    });