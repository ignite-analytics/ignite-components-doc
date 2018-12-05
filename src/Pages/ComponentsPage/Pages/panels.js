import React, { Component } from "react";
import { Container, Card, CardHeader, CardContent, Row, Column, Panel, Header, Text } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

class PanelsPage extends Component {
    static componentProps: Array<PropertyItem> = [
        {
            name: "summary?",
            type: "Element<*>",
            defaultValue: "",
            description: "The content that is visible inside the panel at all time",
        },
        {
            name: "open?",
            type: "boolean",
            defaultValue: "",
            description: "The initial state of the panel, indicating if it should begin open or closed",
        },
    ];

    render() {
        let panelContent = (
            <Container>
                <Header size={3}>Panel title</Header>
                <Text>This is under</Text>
            </Container>
        );

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Panels</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Panles are used to structure and hide large content into smaller containers that can
                                summarize their content.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends Card"}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={PanelsPage.componentProps} />
                    <Row>
                        <Column padding={1}>
                            <Panel bg={"light"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Light Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={"dark"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Dark Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={"warning"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Warning Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            let panelContent = (
                                <Container>
                                    <Header size={3}>Panel title</Header>
                                    <Text>This is under</Text>
                                </Container>
                            );

                            <Panel bg={"light"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Light Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={"dark"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Dark Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={"warning"} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Warning Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(PanelsPage);
