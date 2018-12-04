import * as React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {RouteMap} from "./routeMap";
import {HomeComponent} from "./home/home";
import {ComponentExample} from "./component-example/component-example";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={RouteMap.componentExample} component={ComponentExample} />
                <Route path={RouteMap.home} component={HomeComponent} />
            </Switch>
        </BrowserRouter>
    )
}