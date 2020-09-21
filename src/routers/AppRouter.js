import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import EditExpansePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import AddExpansePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpansePage}/>
                <Route path="/edit/:id" component={EditExpansePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter