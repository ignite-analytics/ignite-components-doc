import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Alert, Card, CardHeader, CardContent, Row, Column, Header, Text } from "ignite-components";

import PropsTable from "../../../Components/PropsTable";
import CodeSnippet from "../../../Components/CodeSnippet";

class AlertPage extends Component {
    static componentProps = [
        { name: "iconSize?", type: "string", defaultValue: "1.5em", description: "The text size of the icon" },
        { name: "icon?", type: "string", defaultValue: "", description: "The font awesome icon key" },
        { name: "iconPrefix?", type: "string", defaultValue: "fas", description: "The font awesome font prefix" },
        { name: "color", type: "string", defaultValue: "", description: "Defines the color of the alert container" },
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
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Alert</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Alerts are used to notify the user, and can contain any content such as text, images and
                                buttons. They can also be displayed with an icon by passing in the icon property.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                @extends Container
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={AlertPage.componentProps} />
                    <Row>
                        <Column padding={1}>
                            <Alert color={"decline"} icon={"exclamation-circle"}>
                                <Text size={1}>This went terrible wrong!</Text>
                            </Alert>

                            <Alert color={"warning"} icon={"exclamation-triangle"}>
                                <Text size={1}>This went somewhat wrong...</Text>
                            </Alert>

                            <Alert color={"accept"} icon={"check"}>
                                <Text size={1}>This went very good!</Text>
                            </Alert>

                            <Alert color={"primary"} icon={"question"}>
                                <Text size={1}>Some information</Text>
                            </Alert>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            <Alert color={'decline'} icon={'exclamation-circle'}>
                                <Text size={1}>This went terrible wrong!</Text>
                            </Alert>

                            <Alert color={'warning'} icon={'exclamation-triangle'}>
                                <Text size={1}>This went somewhat wrong...</Text>
                            </Alert>

                            <Alert color={'accept'} icon={'check'}>
                                <Text size={1}>This went very good!</Text>
                            </Alert>

                            <Alert color={'primary'} icon={'question'}>
                                <Text size={1}>Some information</Text>
                            </Alert>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(AlertPage);
