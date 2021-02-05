import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Func1Page from './Func1Page';
import Func2Page from './Func2Page';
import Func3Page from './Func3Page';
import Func4Page from './Func4Page';
import Header from './Header';
import Home from './Home';


function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/func1-page">
                    <Func1Page />
                </Route>
                <Route path="/func2-page">
                    <Func2Page />
                </Route>
                <Route path="/func3-page">
                    <Func3Page />
                </Route>
                <Route path="/func4-page">
                    <Func4Page />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </BrowserRouter>
    )

}

export default Routes;
