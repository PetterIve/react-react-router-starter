import * as React from "react";
import {Col} from "../../component-library/col/col";
import {Row} from "../../component-library/row/row";
import {Button} from "../../component-library/button/button";
import {RouteMap} from "../routeMap";
import {Link} from "react-router-dom";

export class ComponentExample extends React.Component {
    render() {
        return (
            <Col>
                <Link to={RouteMap.home}>Home</Link>
                <Row>
                    <Col>
                        Not rounded
                        <Button>
                            Clicky
                        </Button>
                    </Col>
                    <Col>
                        Rounded
                        <Button rounded>
                            Clicky
                        </Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}