import Home from './views/home/Home.jsx';
import HomeV2 from './views/home/HomeV2.jsx';
import About from './views/about/About.jsx';



const routes = {
    routes: [
        { path: '/', component: Home, exact: true, title: 'Home' },
        { path: '/homeV2', component: HomeV2, exact: true, title: 'HomeV2' },
        { path: '/about', component: About, exact: true, title: 'About' },
    ]



}

export default routes;
