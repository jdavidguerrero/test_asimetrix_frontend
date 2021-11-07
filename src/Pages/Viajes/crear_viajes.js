import React from 'react';
import {Row, Col, Card, ButtonGroup, Button} from 'react-bootstrap';
import Loki from 'react-loki';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import FormWizard from "./StepForm/index";







class FormsWizard extends React.Component {
  

    render() {
        return (
            <Aux>
                <Row>
                    <Col>  
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Asignar Viaje</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FormWizard />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsWizard;