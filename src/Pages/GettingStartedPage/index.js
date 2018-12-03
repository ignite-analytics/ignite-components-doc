/* @flow */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Row, Column, Header, OutsideAlerter } from "ignite-components";

type Props = {};

class GettingStartedPage extends Component<Props> {
    render() {
        return (
            <Row bg={"dark"} align={"center"} padding={5}>
                <Container width={"1200px"}>
                    <Row>
                        <Column>
                            <OutsideAlerter
                                onOutsideClick={() => {
                                    console.log("hello");
                                }}
                            >
                                <Header>Getting Started</Header>
                            </OutsideAlerter>
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(GettingStartedPage);
