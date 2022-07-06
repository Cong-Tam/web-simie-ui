import config from '../config';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Introduction from '../pages/Introduction';
import Catalog from '../pages/Catalog';

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
        path: config.routes.catalog,
        component: Catalog,
    },
    {
        path: `${config.routes.catalog}/:slug`,
        component: Introduction,
    },
    {
        path: config.routes.cart,
        component: Cart,
    },
];

export { publicRoutes };
