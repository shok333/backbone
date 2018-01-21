import PostListCollection from '../collections/PostList';

let PostList = Backbone.View.extend({
    initialize : function (props){
        this.collection = props.collection;
        this.collection.on('load', () => {
           this.show();
        });
    },
    $main: $('main'),
    template:  _.template( $('#post-list-template').html()),
    show: function () {
        _.each(this.collection.toJSON(), (item) => {
            console.log(item);
            this.$main.append(this.template(item));
        });
    },
    load: function () {
        this.collection.load();
    }
});

export default new PostList({collection: new PostListCollection()});