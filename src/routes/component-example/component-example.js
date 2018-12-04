import * as React from "react";
import {Col} from "../../component-library/col/col";
import {Row} from "../../component-library/row/row";
import {Button} from "../../component-library/button/button";

export class ComponentExample extends React.Component {
    render() {
        return (
            <Col>
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