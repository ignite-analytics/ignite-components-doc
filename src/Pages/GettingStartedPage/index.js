/* @flow */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Row, Column, Header } from "ignite-components";

type Props = {};

class GettingStartedPage extends Component<Props> {
    render() {
        return (
            <Row bg={"dark"} align={"center"} padding={5}>
                <Container width={"1200px"}>
                    <Row>
                        <Column>
                            <Header>Getting Started</Header>
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(GettingStartedPage);
