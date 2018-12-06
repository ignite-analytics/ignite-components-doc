import React, { Component } from "react";

import { Container, Row, Column, Card, CardHeader, CardContent, Header, Text } from "ignite-components";
import PropsTable from "../../../Components/PropsTable";
import CodeSnippet from "../../../Components/CodeSnippet";

class ContainerPage extends Component {
    static componentProps = [
        { name: "style?", type: "Object", defaultValue: "1.5em", description: "The general style property" },
        { name: "className?", type: "string", defaultValue: "", description: "The general className property" },
        { name: "children?", type: "Array<Node>", defaultValue: "fas", description: "The general children property" },

        {
            name: "bg",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as background",
        },
        {
            name: "color",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as text color",
        },
        {
            name: "padding?",
            type: "{Array<number> | number}",
            defaultValue: "[1, 2]",
            description: "An array of or a single number indicating the padding of the container",
        },
        {
            name: "margin?",
            type: "{Array<number> | number}",
            defaultValue: "[0.5, 0]",
            description: "An array of or a single number indicating the margin of the container",
        },
        {
            name: "clickable?",
            type: "boolean",
            defaultValue: "false",
            description: "An boolean value that indicates if the container should appear clickable",
        },
        {
            name: "hover?",
            type: "boolean",
            defaultValue: "false",
            description: "An boolean value that indicates if the container should change background if it is hovered",
        },
        {
            name: "animated?",
            type: "boolean",
            defaultValue: "false",
            description: "An boolean value that indicates if the container should fade in upon rendering",
        },
        {
            name: "text?",
            type: "boolean",
            defaultValue: "false",
            description: "An string that specifies the alignment of the inline elements of the container",
        },
        {
            name: "unit?",
            type: "string",
            defaultValue: "em",
            description: "The unit for size properties",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Containers</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The container is the most general component in the library and acts as the base for many
                                of the other compoents. Its main purpose is to give the user the possibility to easily
                                style different segments of the page.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <div />"}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={ContainerPage.componentProps} />
                    <Row alignVertical={"stretch"}>
                        <Column md={6} padding={1}>
                            <Container animated bg={"primary"} padding={2}>
                                <Header size={3}>Animated</Header>
                                <Text size={1}>This container fades in on mount</Text>
                            </Container>
                        </Column>
                        <Column md={6} padding={1}>
                            <Container hover bg={"secondary"} padding={2}>
                                <Header size={3}>Hover</Header>
                                <Text size={1}>This container changes color on hover</Text>
                            </Container>
                        </Column>
                    </Row>
                    <Row alignVertical={"stretch"}>
                        <Column md={6} padding={1}>
                            <Container bg={"stable"} color={"decline"} padding={2}>
                                <Header size={3}>Color</Header>
                                <Text size={1}>This container has a custom text color</Text>
                            </Container>
                        </Column>
                        <Column md={6} padding={1}>
                            <Container bg={"warning"} text={"center"} padding={2}>
                                <Header size={3}>Text alignment</Header>
                                <Text size={1}>This container has text that is center aligned</Text>
                            </Container>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                        <Row alignVertical={"stretch"}>
                            <Column md={6} padding={1}>
                                <Container animated bg={"primary"} padding={2}>
                                    <Header size={3}>Animated</Header>
                                    <Text size={1}>This container fades in on mount</Text>
                                </Container>
                            </Column>
                            <Column md={6} padding={1}>
                                <Container hover bg={"secondary"} padding={2}>
                                    <Header size={3}>Hover</Header>
                                    <Text size={1}>This container changes color on hover</Text>
                                </Container>
                            </Column>
                        </Row>
                        <Row alignVertical={"stretch"}>
                            <Column md={6} padding={1}>
                                <Container bg={"stable"} color={"decline"} padding={2}>
                                    <Header size={3}>Color</Header>
                                    <Text size={1}>This container has a custom text color</Text>
                                </Container>
                            </Column>
                            <Column md={6} padding={1}>
                                <Container bg={"warning"} text={"center"} padding={2}>
                                    <Header size={3}>Text alignment</Header>
                                    <Text size={1}>This container has text that is center aligned</Text>
                                </Container>
                            </Column>
                        </Row>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default ContainerPage;
