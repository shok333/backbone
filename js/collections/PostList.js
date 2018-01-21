import Post from '../models/Post';
let PostListCollection = Backbone.Collection.extend({
    url: '/ajax',
    model: Post,
    load: function () {
        this.fetch({
            success: (function () {
                this.trigger('load');
            }).bind(this),
            remove: false
        });
    }
});

export default PostListCollection;