import postListView from './PostList';

const Navbar = Backbone.View.extend({
    initialize: function (props) {
        this.router = props.router;
        this.addPostForm = props.addPostForm;
    },
    el: document.querySelector('nav ul'),
    events: {
        'click #index': 'clickButton',
        'click #add': 'clickButton',
    },
    clickButton: function (event) {
        if(event.target.id == 'index'){
            this.router.navigate('', { replace: true, trigger: true});
            postListView.load();
        }
        else {
            this.router.navigate(event.target.id, { replace: true, trigger: true});
            this.addPostForm.show();
        }
    }
});


export default Navbar;
