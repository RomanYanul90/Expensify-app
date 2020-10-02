import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import React from "react";
import NotFoundPage from "../components/NotFoundPage";
import EditExpansePage from "../components/EditExpensePage";
import AddExpansePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpansePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpansePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter