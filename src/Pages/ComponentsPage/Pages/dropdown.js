/* @flow */
import React, { Component } from "react";
import update from "immutability-helper";
import { withRouter } from "react-router-dom";

import {
    Button,
    Dropdown,
    DropdownContainer,
    Container,
    Card,
    CardHeader,
    CardContent,
    Row,
    Column,
    Panel,
    Header,
    Text,
} from "ignite-components";

import CodeSnippet from "../../../Components/CodeSnippet";
import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

type Props = {};

type State = {
    open: {
        [string]: boolean,
    },
};

class DropdownPage extends Component<Props, State> {
    static componentProps: Array<PropertyItem> = [
        {
            name: "open?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicator if the dropdown should be open or not",
        },
        {
            name: "height?",
            type: "number | string",
            defaultValue: "",
            description: "The height of the dropdown",
        },
        {
            name: "width?",
            type: "number | string",
            defaultValue: "",
            description: "The width of the dropdown",
        },
        {
            name: "top?",
            type: "string",
            defaultValue: "",
            description: "The top position og the dropdown",
        },
        {
            name: "hideArrow?",
            type: "boolean",
            defaultValue: "",
            description: "If the dropdown arrow should be hidden",
        },
    ];

    state: State = {
        open: {},
    };

    toggleDropdown = (key: string) => {
        this.setState(state =>
            update(this.state, {
                open: {
                    [key]: { $set: !state.open[key] },
                },
            })
        );
    };

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Dropdowns</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Dropdowns are toggleable, contextual overlays for displaying lists of links and more. A
                                dropdown has to be wrapped with a DropdownContainer that includes the Dropdown component
                                and often the trigger that opens the component.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                @extends Card
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={DropdownPage.componentProps} />
                    <Row>
                        <Column text={"center"} padding={1}>
                            <DropdownContainer>
                                {/* Trigger */}
                                <Button color={"dark"} border onClick={() => this.toggleDropdown("light")}>
                                    Toggle Light Dropdown
                                </Button>

                                {/* Content */}
                                <Dropdown
                                    width={"300px"}
                                    open={this.state.open["light"]}
                                    arrow={false}
                                    bg={"light"}
                                    padding={2}
                                >
                                    <Header size={3}>A light dropdown</Header>
                                    <Text>This is a dropdown with some content</Text>
                                </Dropdown>
                            </DropdownContainer>
                        </Column>
                        <Column text={"center"} padding={1}>
                            <DropdownContainer>
                                {/* Trigger */}
                                <Button color={"dark"} onClick={() => this.toggleDropdown("dark")}>
                                    Toggle Dark Dropdown
                                </Button>

                                {/* Content */}
                                <Dropdown
                                    width={"300px"}
                                    open={this.state.open["dark"]}
                                    arrow={true}
                                    bg={"dark"}
                                    padding={2}
                                >
                                    <Header size={3}>A dark dropdown</Header>
                                    <Text>This is a dropdown with some content</Text>
                                </Dropdown>
                            </DropdownContainer>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            <Row>
                                <Column text={"center"} padding={1}>
                                    <DropdownContainer>
                                        {/* Trigger */}
                                        <Button color={"dark"} border onClick={() => this.toggleDropdown("light")}>
                                            Toggle Light Dropdown
                                        </Button>

                                        {/* Content */}
                                        <Dropdown
                                            width={"300px"}
                                            open={this.state.open["light"]}
                                            arrow={false}
                                            bg={"light"}
                                            padding={2}
                                        >
                                            <Header size={3}>A light dropdown</Header>
                                            <Text>This is a dropdown with some content</Text>
                                        </Dropdown>
                                    </DropdownContainer>
                                </Column>
                                <Column text={"center"} padding={1}>
                                    <DropdownContainer>
                                        {/* Trigger */}
                                        <Button color={"dark"} onClick={() => this.toggleDropdown("dark")}>
                                            Toggle Dark Dropdown
                                        </Button>

                                        {/* Content */}
                                        <Dropdown
                                            width={"300px"}
                                            open={this.state.open["dark"]}
                                            arrow={true}
                                            bg={"dark"}
                                            padding={2}
                                        >
                                            <Header size={3}>A dark dropdown</Header>
                                            <Text>This is a dropdown with some content</Text>
                                        </Dropdown>
                                    </DropdownContainer>
                                </Column>
                            </Row>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(DropdownPage);
