import { Layout } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          {routes.map((route, i) => (
            <Route
              key={i.toString()}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.page {...props} routes={route.routes} />
              )}
            />
          ))}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
