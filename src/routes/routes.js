import config from '../config';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Introduction from '../pages/Introduction';
import Category from '../pages/Category';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.introduction,
        component: Introduction,
    },
    {
        path: config.routes.category,
        component: Category,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
];

export { publicRoutes };
