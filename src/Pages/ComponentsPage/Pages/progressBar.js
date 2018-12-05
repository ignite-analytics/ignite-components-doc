import React, { Component } from "react";

import { Card, CardHeader, CardContent, Row, Column, Header, Text, ProgressBar } from "ignite-components";

import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

class ProgressBarPage extends Component {
    static componentProps: Array<PropertyItem> = [
        {
            name: "progrews?",
            type: "number",
            defaultValue: "",
            description: "The percent of the progress bar that should be filled",
        },
        {
            name: "height?",
            type: "number",
            defaultValue: "2em",
            description: "TThe height of the progress bar",
        },
        {
            name: "round?",
            type: "boolean",
            defaultValue: "false",
            description: "Indicator on if the bar should have completely rounded edges",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Progress bar</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The library includes a ProgressBar component that helps visualize the progress of a
                                task.
                            </Text>
                        </Column>
                    </Row>

                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends Column"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={ProgressBarPage.componentProps} />

                    {/* Decline */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={10} color={"decline"}>
                                <Text weight={"bold"}>10%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={10} color={"decline"} />
                        </Column>
                    </Row>

                    {/* Warning */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={30} color={"warning"}>
                                <Text weight={"bold"}>30%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={30} color={"warning"} />
                        </Column>
                    </Row>

                    {/* Accept */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={20} color={"accept"}>
                                <Text weight={"bold"}>20%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={20} color={"accept"} />
                        </Column>
                    </Row>

                    {/* Primary */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={70} color={"primary"}>
                                <Text weight={"bold"}>70%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={70} color={"primary"} />
                        </Column>
                    </Row>

                    {/* Stable Dark */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={50} color={"stableDark"}>
                                <Text weight={"bold"}>50%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={50} color={"stableDark"} />
                        </Column>
                    </Row>

                    {/* Code snippet */}
                    <CodeSnippet
                        snippet={`
                        {/* Decline */}
                        <Row alignVertical={"center"}>
                            <Column padding={1}>
                                <ProgressBar progress={10} color={"decline"}>
                                    <Text weight={"bold"}>10%</Text>
                                </ProgressBar>
                            </Column>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={10} color={"decline"} />
                            </Column>
                        </Row>

                        {/* Warning */}
                        <Row alignVertical={"center"}>
                            <Column padding={1}>
                                <ProgressBar progress={30} color={"warning"}>
                                    <Text weight={"bold"}>30%</Text>
                                </ProgressBar>
                            </Column>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={30} color={"warning"} />
                            </Column>
                        </Row>

                        {/* Accept */}
                        <Row alignVertical={"center"}>
                            <Column padding={1}>
                                <ProgressBar progress={20} color={"accept"}>
                                    <Text weight={"bold"}>20%</Text>
                                </ProgressBar>
                            </Column>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={20} color={"accept"} />
                            </Column>
                        </Row>

                        {/* Primary */}
                        <Row alignVertical={"center"}>
                            <Column padding={1}>
                                <ProgressBar progress={70} color={"primary"}>
                                    <Text weight={"bold"}>70%</Text>
                                </ProgressBar>
                            </Column>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={70} color={"primary"} />
                            </Column>
                        </Row>

                        {/* Stable Dark */}
                        <Row alignVertical={"center"}>
                            <Column padding={1}>
                                <ProgressBar progress={50} color={"stableDark"}>
                                    <Text weight={"bold"}>50%</Text>
                                </ProgressBar>
                            </Column>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={50} color={"stableDark"} />
                            </Column>
                        </Row>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(ProgressBarPage);
