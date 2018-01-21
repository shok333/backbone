let AddPostForm = Backbone.View.extend({
    $main: $('main'),
    template:  _.template( $('#form-template').html()),
    show: function () {
        this.$main.html(this.template());
    }
});
export default AddPostForm;