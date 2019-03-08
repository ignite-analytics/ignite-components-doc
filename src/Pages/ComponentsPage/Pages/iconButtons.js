import React, { Component } from "react";

import { Card, CardHeader, CardContent, Row, Column, Header, Text, IconButton } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class IconButtonPage extends Component {
    /**
     *  Icon button component that uses the Icon component to render a clickable icon
     *
     *  @extends button (HTML)
     *
     *  @property {Object}                   style?: The general style property
     *  @property {string}                   className?: The general className property
     *
     *  @property {number | Array<number>}   margin?: The margin of the button
     *
     */

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
            defaultValue: "1.3em",
            description: "The icon size",
        },
        {
            name: "icon?",
            type: "string",
            defaultValue: "plus",
            description: "The font awesome icon key",
        },
        {
            name: "color?",
            type: "string",
            defaultValue: "inherit",
            description: "The icon color",
        },
        {
            name: "prefix?",
            type: "string",
            defaultValue: "fas",
            description: "The font awesome font prefix",
        },
        {
            name: "margin?",
            type: "number | Array<number>",
            defaultValue: "",
            description: "The margin of the button",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>IconButton</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Icon button component that uses the Icon component to render a clickable icon
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

                    <PropsTable componentProps={IconButtonPage.componentProps} />

                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <IconButton size={2} icon={"plus"} color={"secondary"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} icon={"trash"} color={"decline"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"primary"} icon={"info"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"dark"} icon={"question-circle"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"stableDark"} icon={"align-center"} prefix={"fas"} />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Column padding={1}>
                            <IconButton size={2} icon={"plus"} color={"secondary"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} icon={"trash"} color={"decline"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"primary"} icon={"info"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"dark"} icon={"question-circle"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <IconButton size={2} color={"stableDark"} icon={"align-center"} prefix={"fas"} />
                        </Column>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(IconButtonPage);
