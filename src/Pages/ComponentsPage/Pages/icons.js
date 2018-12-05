import React, { Component } from "react";

import { Card, CardHeader, CardContent, Row, Column, Header, Text, Icon } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class IconPage extends Component {
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
            defaultValue: "1em",
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
            name: "rightMargin?",
            type: "number",
            defaultValue: "0",
            description: "Indicates if the icon should have a right margin",
        },
        {
            name: "leftMargin?",
            type: "number",
            defaultValue: "0",
            description: "Indicates if the icon should have a right margin",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Icon</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>The icon container that can be used to render font awesome icons. </Text>
                        </Column>
                    </Row>

                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <FontAwesomeIcon /> (https://github.com/FortAwesome/react-fontawesome)"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={IconPage.componentProps} />

                    <Row padding={1} text={"center"}>
                        <Column padding={1}>
                            <Icon size={"5em"} icon={"font-awesome-flag"} color={"secondary"} prefix={"fab"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"5em"} icon={"futbol"} color={"warning"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"5em"} color={"decline"} icon={"apple-alt"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"5em"} color={"dark"} icon={"bicycle"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"5em"} color={"primary"} icon={"brain"} prefix={"fas"} />
                        </Column>
                    </Row>

                    <Row padding={1} text={"center"} alignVertical={"center"}>
                        <Column padding={1}>
                            <Icon size={"1em"} icon={"beer"} color={"action"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"2em"} icon={"beer"} color={"action"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"3em"} icon={"beer"} color={"action"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"4em"} icon={"beer"} color={"action"} prefix={"fas"} />
                        </Column>
                        <Column padding={1}>
                            <Icon size={"5em"} icon={"beer"} color={"action"} prefix={"fas"} />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Row padding={1} text={"center"}>
                            <Column padding={1}>
                                <Icon size={"5em"} icon={"font-awesome-flag"} color={"secondary"} prefix={"fab"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"5em"} icon={"futbol"} color={"warning"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"5em"} color={"decline"} icon={"apple-alt"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"5em"} color={"dark"} icon={"bicycle"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"5em"} color={"primary"} icon={"brain"} prefix={"fas"} />
                            </Column>
                        </Row>

                        <Row padding={1} text={"center"} alignVertical={"center"}>
                            <Column padding={1}>
                                <Icon size={"1em"} icon={"beer"} color={"action"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"2em"} icon={"beer"} color={"action"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"3em"} icon={"beer"} color={"action"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"4em"} icon={"beer"} color={"action"} prefix={"fas"} />
                            </Column>
                            <Column padding={1}>
                                <Icon size={"5em"} icon={"beer"} color={"action"} prefix={"fas"} />
                            </Column>
                        </Row>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(IconPage);
