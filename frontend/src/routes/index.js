import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//pitu.tk/            -> Homepage
//pitu.tk/:code       -> RedirectPage
//pitu.tk/:code/stats -> StatsPage

import HomePage from '../pages/HomePage';
import StatsPage from '../pages/StatsPage';
import RedirectPage from '../pages/RedirectPage';
import NotFoundPage from '../pages/NotFoundPage';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/:code/stats" component={StatsPage} />
                <Route exact path="/:code" component={RedirectPage} />
                <Route exact path="/*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;