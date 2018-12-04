import * as React from "react";
import {Col} from "../../component-library/col/col";
import {Link} from "react-router-dom";
import {RouteMap} from "../routeMap";

export const HomeComponent = () => {
    return (
        <Col>
            This is home
            <Link to={RouteMap.componentExample}>Component example</Link>
        </Col>
    )
}