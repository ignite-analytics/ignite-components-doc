import React, { Component } from "react";

import { Row, Column, Card, CardHeader, CardContent, Header, Text, Icon } from "ignite-components";
import CodeSnippet from "../../../Components/CodeSnippet";
import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

class GridPage extends Component {
    static rowProps: Array<PropertyItem> = [
        {
            name: "aling",
            type: "string",
            defaultValue: "start",
            description: "Specifies how the content should be aligned (horizontal)",
        },
        {
            name: "alingVertical",
            type: "string",
            defaultValue: "start",
            description: "Specifies how the content should be aligned (vertical)",
        },
    ];

    static columnProps: Array<PropertyItem> = [
        {
            name: "sm",
            type: "number",
            defaultValue: "",
            description: "The size the column should have in the small view port (1-12)",
        },
        {
            name: "md",
            type: "number",
            defaultValue: "",
            description: "The size the column should have in the medium view port (1-12)",
        },
        {
            name: "lg",
            type: "number",
            defaultValue: "",
            description: "The size the column should have in the large view port (1-12)",
        },
        {
            name: "align",
            type: "string",
            defaultValue: "start",
            description: "How the column should align according to its parent container",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Grid</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"} padding={1}>
                        <Column>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Ignite Components uses rows and columns to structure content and uses flex to align
                                content. Both the Row and the Column components extends the Container component and have
                                thus the same style properties as this component.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column>
                            <Header size={4}>The Row Component</Header>
                            <Text size={1}>
                                The Row Component fills its parent in terms of width and displays its children using the
                                flex property. It can help developers align items both vertically and horizontally.
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
                    <PropsTable componentProps={GridPage.rowProps} />
                    <Row>
                        <Column padding={1}>
                            <Row alignVertical={"center"} bg={"stableLight"} padding={1} color={"decline"}>
                                <Icon rightMargin={1} icon={"fire"} size={"2em"} />
                                <Header size={4}>Ignite Components</Header>
                            </Row>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            <Row alignVertical={"center"} bg={"stable"} padding={1} color={"decline"}>
                                <Icon rightMargin={1} icon={"fire"} size={"2em"} />
                                <Header size={3}>Ignite Components</Header>
                            </Row>
                        `}
                    />
                    <Row padding={1}>
                        <Column>
                            <Header size={4}>The Column Component</Header>
                            <Text size={1}>
                                The most common way to align items is by using columns. Columns can span different
                                percentage of the row based on the width of the device screen, or it can span equally as
                                all other columns in the row by not defining any span properties.
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
                    <PropsTable componentProps={GridPage.columnProps} />
                    <Row padding={1}>
                        <Column>
                            <Row alignVertical={"stretch"} text={"center"}>
                                <Column padding={2} bg={"primary"}>
                                    <Header size={3}>Flex column</Header>
                                </Column>
                                <Column padding={2} bg={"secondary"}>
                                    <Header size={3}>Flex column</Header>
                                </Column>
                                <Column md={6} padding={2} bg={"action"}>
                                    <Header size={3}>md-6</Header>
                                </Column>
                            </Row>
                            <Row alignVertical={"stretch"} text={"center"}>
                                <Column sm={6} padding={2} bg={"decline"}>
                                    <Header size={3}>sm-6</Header>
                                </Column>
                                <Column sm={3} padding={2} bg={"dark"}>
                                    <Header size={3}>sm-3</Header>
                                </Column>
                                <Column sm={3} padding={2} bg={"stableDark"}>
                                    <Header size={3}>sm-3</Header>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            <Row alignVertical={"stretch"} text={"center"}>
                                <Column padding={2} bg={"primary"}>
                                    <Header size={3}>Flex column</Header>
                                </Column>
                                <Column padding={2} bg={"secondary"}>
                                    <Header size={3}>Flex column</Header>
                                </Column>
                                <Column md={6} padding={2} bg={"action"}>
                                    <Header size={3}>md-6</Header>
                                </Column>
                            </Row>
                            <Row alignVertical={"stretch"} text={"center"}>
                                <Column sm={6} padding={2} bg={"decline"}>
                                    <Header size={3}>sm-6</Header>
                                </Column>
                                <Column sm={3} padding={2} bg={"dark"}>
                                    <Header size={3}>sm-3</Header>
                                </Column>
                                <Column sm={3} padding={2} bg={"stableDark"}>
                                    <Header size={3}>sm-3</Header>
                                </Column>
                            </Row>
                        `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default GridPage;
