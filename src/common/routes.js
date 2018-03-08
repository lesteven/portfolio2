import Home from './views/home/Home.jsx';
import HomeV2 from './views/home/HomeV2.jsx';
import About from './views/about/About.jsx';
import AboutV2 from './views/about/AboutV2.jsx';
import Projects from './views/projects/Projects.jsx';


const routes = {
    routes: [
        { path: '/', component: HomeV2, exact: true, title: 'Home' },
        { path: '/projects', component: Projects, exact:true,title:'Projects'},
        { path: '/about', component: AboutV2, exact: true, title: 'About' },
    ]



}

export default routes;
