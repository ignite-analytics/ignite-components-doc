/* @flow */
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

import {
    Row,
    Container,
    Column,
    Header,
} from 'ignite-components';

type Props = {}

class HomePage extends Component<Props> {
    render() {
        return (
            <Row bg={'dark'} align={'center'} padding={5}>
                <Container width={'1200px'}>
                    <Row>
                        <Column>
                            <Header>Ignite Components</Header>
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(HomePage);
