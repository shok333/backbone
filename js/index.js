import '../style.sass';
import Navbar from './views/Navbar';
import router from './router';
import AddPostForm from './views/AddPostForm';
import PostList from './views/PostList'
import PostListCollection from './collections/PostList';

let navbar = new Navbar({
    router: router,
    addPostForm: new AddPostForm(),
});

