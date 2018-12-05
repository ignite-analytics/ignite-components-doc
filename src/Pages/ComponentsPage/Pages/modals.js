import React, { Component } from "react";
import update from "immutability-helper";

import { Button, Card, CardHeader, CardContent, Row, Column, Input, Header, Text, Modal } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class ModalPage extends Component {
    static componentProps: Array<PropertyItem> = [
        {
            name: "open?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicates if the modal should appear or not",
        },
    ];

    state = {
        show: {
            center: false,
            topCenter: false,
            bottomRight: false,
        },
    };

    toggleState = key => {
        this.setState(state =>
            update(state, {
                show: {
                    [key]: { $set: !state.show[key] },
                },
            })
        );
    };

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Modal</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The Modal Component covers the screen with a dark layover and allows for the content to
                                position using the same principles as for the Row component.
                            </Text>
                        </Column>
                    </Row>

                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends Row"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={ModalPage.componentProps} />

                    {/* Center Modal */}
                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <Button onClick={() => this.toggleState("center")}>Open center modal</Button>
                            <Modal animated open={this.state.show.center}>
                                <Card bg={"light"} width={"400px"}>
                                    <CardHeader>
                                        <Header size={4}>Centered modal</Header>
                                    </CardHeader>
                                    <CardContent>
                                        <Row padding={[1, 0]}>
                                            <Text size={1}>
                                                This is a centered modal that, for example, can act as a desicion box.
                                            </Text>
                                        </Row>
                                        <Row>
                                            <Button color={"decline"} onClick={() => this.toggleState("center")}>
                                                No
                                            </Button>
                                            <Button color={"accept"} onClick={() => this.toggleState("center")}>
                                                Yes
                                            </Button>
                                        </Row>
                                    </CardContent>
                                </Card>
                            </Modal>
                        </Column>

                        {/* Top Center Modal */}
                        <Column padding={1}>
                            <Button onClick={() => this.toggleState("topCenter")}>Open top center modal</Button>
                            <Modal animated open={this.state.show.topCenter} alignVertical={"start"}>
                                <Card bg={"light"} width={"400px"}>
                                    <CardHeader>
                                        <Header size={4}>Top centered modal</Header>
                                    </CardHeader>
                                    <CardContent>
                                        <Row>
                                            <Input autofocus label={"Write a message"} placeholder={"Write here"} />
                                        </Row>
                                        <Row align={"center"}>
                                            <Button color={"primary"} onClick={() => this.toggleState("topCenter")}>
                                                Submit
                                            </Button>
                                        </Row>
                                    </CardContent>
                                </Card>
                            </Modal>
                        </Column>

                        {/* Bottom Right Modal */}
                        <Column padding={1}>
                            <Button onClick={() => this.toggleState("bottomRight")}>Open bottom right modal</Button>
                            <Modal animated open={this.state.show.bottomRight} align={"end"} alignVertical={"end"}>
                                <Card bg={"primary"} width={"400px"}>
                                    <CardContent>
                                        <Row padding={[1, 0]}>
                                            <Column>
                                                <Header size={4}>Bottom right modal</Header>
                                                <Text size={1}>
                                                    This is a centered modal that, for example, can act as a desicion
                                                    box.
                                                </Text>
                                            </Column>
                                        </Row>
                                        <Row align={"center"}>
                                            <Button
                                                color={"light"}
                                                border
                                                onClick={() => this.toggleState("bottomRight")}
                                            >
                                                OK!
                                            </Button>
                                        </Row>
                                    </CardContent>
                                </Card>
                            </Modal>
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                            {/* Center Modal */}
                            <Column padding={1}>
                                <Button onClick={() => this.toggleState("center")}>Open center modal</Button>
                                <Modal animated open={this.state.show.center}>
                                    <Card bg={"light"} width={"400px"}>
                                        <CardHeader>
                                            <Header size={4}>Centered modal</Header>
                                        </CardHeader>
                                        <CardContent>
                                            <Row padding={[1, 0]}>
                                                <Text size={1}>
                                                    This is a centered modal that, for example, can act as a desicion box.
                                                </Text>
                                            </Row>
                                            <Row>
                                                <Button color={"decline"} onClick={() => this.toggleState("center")}>
                                                    No
                                                </Button>
                                                <Button color={"accept"} onClick={() => this.toggleState("center")}>
                                                    Yes
                                                </Button>
                                            </Row>
                                        </CardContent>
                                    </Card>
                                </Modal>
                            </Column>

                            {/* Top Center Modal */}
                            <Column padding={1}>
                                <Button onClick={() => this.toggleState("topCenter")}>Open top center modal</Button>
                                <Modal animated open={this.state.show.topCenter} alignVertical={"start"}>
                                    <Card bg={"light"} width={"400px"}>
                                        <CardHeader>
                                            <Header size={4}>Top centered modal</Header>
                                        </CardHeader>
                                        <CardContent>
                                            <Row>
                                                <Input autofocus label={"Write a message"} placeholder={"Write here"} />
                                            </Row>
                                            <Row align={"center"}>
                                                <Button color={"primary"} onClick={() => this.toggleState("topCenter")}>
                                                    Submit
                                                </Button>
                                            </Row>
                                        </CardContent>
                                    </Card>
                                </Modal>
                            </Column>

                            {/* Bottom Right Modal */}
                            <Column padding={1}>
                                <Button onClick={() => this.toggleState("bottomRight")}>Open bottom right modal</Button>
                                <Modal animated open={this.state.show.bottomRight} align={"end"} alignVertical={"end"}>
                                    <Card bg={"primary"} width={"400px"}>
                                        <CardContent>
                                            <Row padding={[1, 0]}>
                                                <Column>
                                                    <Header size={4}>Bottom right modal</Header>
                                                    <Text size={1}>
                                                        This is a centered modal that, for example, can act as a desicion
                                                        box.
                                                    </Text>
                                                </Column>
                                            </Row>
                                            <Row align={"center"}>
                                                <Button
                                                    color={"light"}
                                                    border
                                                    onClick={() => this.toggleState("bottomRight")}
                                                >
                                                    OK!
                                                </Button>
                                            </Row>
                                        </CardContent>
                                    </Card>
                                </Modal>
                            </Column>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(ModalPage);
