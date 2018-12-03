import React, { Component } from "react";

import { Button, Card, CardHeader, CardContent, Container, Row, Column, Header, Text } from "ignite-components";

import PropsTable from "../../../Components/PropsTable";
import CodeSnippet from "../../../Components/CodeSnippet";

import { withRouter } from "react-router-dom";

class ButtonsPage extends Component {
    static componentProps = [
        { name: "style?", type: "Object", defaultValue: "", description: "The general style property" },
        { name: "className?", type: "string", defaultValue: "", description: "The general className property" },
        { name: "children?", type: "Array<Node>", defaultValue: "fas", description: "The general children property" },

        {
            name: "leftIcon?",
            type: "string",
            defaultValue: "",
            description: "The font awesome key for the left icon in the button",
        },
        {
            name: "rightIcon?",
            type: "string",
            defaultValue: "",
            description: "The font awesome key for the right icon in the button",
        },
        { name: "iconPrefix?", type: "string", defaultValue: "fas", description: "The font awesome font prefix" },
        { name: "type?", type: "string", defaultValue: "button", description: "The HTML button type" },
        { name: "color?", type: "string", defaultValue: "primary", description: "The color of the button" },
        {
            name: "loading?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicates if the button should appear in a loading mode or not",
        },
        { name: "disabled?", type: "boolean", defaultValue: "", description: "Indicates if the button is disabled" },
        {
            name: "border?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicates if the button should be a border button",
        },
        {
            name: "round?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicates if the button should be a round button",
        },
        {
            name: "onClick?",
            type: "Function",
            defaultValue: "false",
            description: "The function that is triggered when the button is clicked",
        },
    ];

    static buttonTypes = [
        {
            title: "Regular buttons",
            description:
                "Buttons gives the user the possibility to interact with the application. Ignite Components offer a large variety of different buttons.",
            props: {},
        },
        {
            title: "Regular buttons",
            description:
                "Buttons gives the user the possibility to interact with the application. Ignite Components offer a large variety of different buttons.",
            props: { border: true },
        },
        {
            title: "Round buttons",
            description:
                "Buttons gives the user the possibility to interact with the application. Ignite Components offer a large variety of different buttons.",
            props: { round: true },
        },
        {
            title: "Buttons with icons",
            description:
                "Buttons gives the user the possibility to interact with the application. Ignite Components offer a large variety of different buttons.",
            props: { leftIcon: "apple-alt" },
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Buttons</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Buttons gives the user the possibility to interact with the application. Ignite
                                Components offer a large variety of different buttons.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <button />"}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={ButtonsPage.componentProps} />

                    {ButtonsPage.buttonTypes.map((type, i) => (
                        <Container padding={[2, 1]} key={i}>
                            <Row>
                                <Column padding={1}>
                                    <Header size={3}>{type.title}</Header>
                                    <Text size={1}>{type.description}</Text>
                                    <Container padding={[1, 0]}>
                                        <Button {...type.props} key={0} color={"primary"}>
                                            primary
                                        </Button>

                                        <Button {...type.props} key={1} color={"secondary"}>
                                            secondary
                                        </Button>

                                        <Button {...type.props} key={2} color={"action"}>
                                            action
                                        </Button>

                                        <Button {...type.props} key={3} color={"warning"}>
                                            warning
                                        </Button>
                                    </Container>
                                </Column>
                            </Row>
                            <CodeSnippet
                                snippet={`
                                    <Button ${Object.keys(type.props)
                                        .reduce((res, key) => res + ` ${key}={${type.props[key]}}`, "")
                                        .trim()} key={0} color={"primary"}>
                                        primary
                                    </Button>

                                    <Button ${Object.keys(type.props)
                                        .reduce((res, key) => res + ` ${key}`, "")
                                        .trim()} key={1} color={"secondary"}>
                                        secondary
                                    </Button>

                                    <Button ${Object.keys(type.props)
                                        .reduce((res, key) => res + ` ${key}`, "")
                                        .trim()} key={2} color={"action"}>
                                        action
                                    </Button>

                                    <Button ${Object.keys(type.props)
                                        .reduce((res, key) => res + ` ${key}`, "")
                                        .trim()} key={3} color={"warning"}>
                                        warning
                                    </Button>
                                `}
                            />
                        </Container>
                    ))}
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(ButtonsPage);
