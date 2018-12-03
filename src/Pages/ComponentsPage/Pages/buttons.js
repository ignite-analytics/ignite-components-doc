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
            description: `The regular button is the most basic button type in the library. It comes in all the colors that is specified in the config file.`,
            props: {},
        },
        {
            title: "Border buttons",
            description: `In need of a button, but not the hefty background colors they bring? The border button is a simple button without any background and only a border to show its extents. The background color will appear upon hover.`,
            props: { border: true },
        },
        {
            title: "Round buttons",
            description: `Another button that can come handy is the round button. Many designers tend to vary between rectangular and round buttons to spice the design. The round button can also be combined with the border property.`,
            props: { round: true },
        },
        {
            title: "Buttons with icons",
            description: `In many situations it can be handy to include an icon inside the button in order to make it more clear to the user what the button does. In order to do so, simply apply the leftIcon and rightIcon props.`,
            props: { leftIcon: "fire" },
        },
        {
            title: "Loading button",
            description: `After the user has interacted with a button, it can be handy to display an indicator that something is happening. Therefore the Ignite Button Component comes equipped with a loading prop that, when enabled, replaces the button content with a spinning wheel.`,
            props: { loading: true },
        },
        {
            title: "Disabled button",
            description: `Sometimes buttons are not meant to trigger any actions when clicking a button. Therefore the button component comes with a disabled property that indicates that the button is not clickable.`,
            props: { disabled: true },
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
                                Buttons gives the user the possibility to interact with the application. This library
                                offers a large variety of different button types, such as regular buttons, border
                                buttons, round buttons, buttons with icons and the combination of the above.
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
                        <Row padding={[2, 1]} key={i}>
                            <Column>
                                <Row>
                                    <Column padding={1}>
                                        <Header size={3}>{type.title}</Header>
                                        <Text size={1}>{type.description}</Text>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column padding={1}>
                                        <Container text={"center"}>
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
                            </Column>
                        </Row>
                    ))}
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(ButtonsPage);
