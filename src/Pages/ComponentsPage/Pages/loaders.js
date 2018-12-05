import React, { Component } from "react";

import { Card, CardHeader, CardContent, Row, Column, Loader, Header, Text } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class LoaderPage extends Component {
    static componentProps: Array<PropertyItem> = [
        {
            name: "style?",
            type: "Object",
            defaultValue: "",
            description: "The general style property",
        },
        {
            name: "className?",
            type: "string",
            defaultValue: "",
            description: "The general className property",
        },
        {
            name: "size?",
            type: "string",
            defaultValue: "md",
            description: "The size of the loader",
        },
        {
            name: "color?",
            type: "string",
            defaultValue: "primary",
            description: "The border color of the loader",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Loader</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The loader component can be used to indicate that a process is running. There are three
                                different sizes for the loader, small, medium and large.
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

                    <PropsTable componentProps={LoaderPage.componentProps} />

                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <Loader size={"sm"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"sm"} color={"secondary"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"sm"} color={"decline"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"sm"} color={"warning"} />
                        </Column>
                    </Row>

                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <Loader />
                        </Column>
                        <Column padding={1}>
                            <Loader color={"secondary"} />
                        </Column>
                        <Column padding={1}>
                            <Loader color={"decline"} />
                        </Column>
                        <Column padding={1}>
                            <Loader color={"warning"} />
                        </Column>
                    </Row>
                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <Loader size={"lg"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"lg"} color={"secondary"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"lg"} color={"decline"} />
                        </Column>
                        <Column padding={1}>
                            <Loader size={"lg"} color={"warning"} />
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                        <Row padding={1} text={"center"}>
                            <Column padding={1}>
                                <Loader size={"sm"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"sm"} color={"secondary"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"sm"} color={"decline"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"sm"} color={"warning"} />
                            </Column>
                        </Row>

                        <Row padding={1} text={"center"}>
                            <Column padding={1}>
                                <Loader />
                            </Column>
                            <Column padding={1}>
                                <Loader color={"secondary"} />
                            </Column>
                            <Column padding={1}>
                                <Loader color={"decline"} />
                            </Column>
                            <Column padding={1}>
                                <Loader color={"warning"} />
                            </Column>
                        </Row>
                        <Row padding={1} text={"center"}>
                            <Column padding={1}>
                                <Loader size={"lg"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"lg"} color={"secondary"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"lg"} color={"decline"} />
                            </Column>
                            <Column padding={1}>
                                <Loader size={"lg"} color={"warning"} />
                            </Column>
                        </Row>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(LoaderPage);
