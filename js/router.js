var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'add': 'addPost',
    },
    index: function () {
    },
    addPost: function () {
    }
});

var router = new Router();

Backbone.history.start({pushState: true});

export default router;