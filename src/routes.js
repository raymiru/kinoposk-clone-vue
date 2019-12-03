export const routes = [
    {path: '/', name:'index', component: () => import('./pages/Home'), meta: { layout: 'InnerLayout' }},
    {path: '/film/*', name:'film', component: () => import('./pages/Film'), meta: { layout: 'InnerLayout' }}

];


