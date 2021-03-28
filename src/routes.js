import ListTransaction from './Pages/ListTransaction';
import DetailTransaction from './Pages/DetailTransaction';

const routes = [
  {
    path: "/",
    exact: true,
    page: ListTransaction
  },
  {
    path: "/detail/:id",
    // exact: true,
    page: DetailTransaction
  },
];

export default routes;