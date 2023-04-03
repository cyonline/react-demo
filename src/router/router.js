
import home from '../pages/home';
import ComponentOne from '../pages/ComponentOne';
import ComponentTwo from '../pages/ComponentTwo';
import LayoutBasic from '../components/layouts/layout-basic'

let routerConfig = [
    {
        path: '/',
        component: LayoutBasic,
        exact: true,
        children: [{
            path: '/home',
            component: home
        },{
            path: '/one',
            component: ComponentOne
        },{
            path: '/two',
            component: ComponentTwo
        }]
    },
    //  {
    //     path: '/page',
    //     component: LayoutSide,
    //     children: [{
    //         path: '/one',
    //         component: ComponentOne
    //     },{
    //         path: '/two',
    //         component: ComponentTwo
    //     }]
    // }
];

export default routerConfig;
