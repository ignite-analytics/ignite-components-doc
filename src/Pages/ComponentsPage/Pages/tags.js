import React, { Component } from "react";

import { Card, CardHeader, CardContent, Row, Column, Tag, Header, Text } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class TagsPage extends Component {
    static componentProps: Array<PropertyItem> = [
        {
            name: "iconSize?",
            type: "string",
            defaultValue: "",
            description: "The size of the icons in the tag",
        },
        {
            name: "iconPrefix?",
            type: "string",
            defaultValue: "fas",
            description: "The font awesome font prefix",
        },
        {
            name: "leftIcon?",
            type: "string",
            defaultValue: "",
            description: "The font awesome icon key for an icon on the left side of the text",
        },
        {
            name: "rightIcon?",
            type: "string",
            defaultValue: "",
            description: "The font awesome icon key for an icon on the right side of the text",
        },
        {
            name: "color?",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as background color",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Tags</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Tags are inline containers of small content that can be used to display messages,
                                categories and more.
                            </Text>
                        </Column>
                    </Row>

                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <table />"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={TagsPage.componentProps} />

                    <Row>
                        <Column padding={1}>
                            <Tag bg={"decline"} leftIcon={"exclamation-circle"}>
                                <Text>This went terrible wrong!</Text>
                            </Tag>

                            <Tag bg={"warning"} leftIcon={"exclamation-triangle"} hover>
                                <Text>This went somewhat wrong...</Text>
                            </Tag>

                            <Tag bg={"accept"} leftIcon={"check"}>
                                <Text>This went very good!</Text>
                            </Tag>

                            <Tag bg={"primary"} leftIcon={"question"}>
                                <Text>Some information</Text>
                            </Tag>

                            <Tag bg={"stableDark"} rightIcon={"times"} hover>
                                <Text>Close this</Text>
                            </Tag>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                        <Tag bg={"decline"} leftIcon={"exclamation-circle"}>
                            <Text>This went terrible wrong!</Text>
                        </Tag>

                        <Tag bg={"warning"} leftIcon={"exclamation-triangle"} hover>
                            <Text>This went somewhat wrong...</Text>
                        </Tag>

                        <Tag bg={"accept"} leftIcon={"check"}>
                            <Text>This went very good!</Text>
                        </Tag>

                        <Tag bg={"primary"} leftIcon={"question"}>
                            <Text>Some information</Text>
                        </Tag>

                        <Tag bg={"stableDark"} rightIcon={"times"} hover>
                            <Text>Close this</Text>
                        </Tag>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(TagsPage);
