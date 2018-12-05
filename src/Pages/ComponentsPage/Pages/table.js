/* @flow */
import React, { Component } from "react";

import {
    Card,
    CardHeader,
    CardContent,
    Row,
    Column,
    Header,
    Text,
    Table,
    THead,
    TBody,
    Tr,
    Th,
    Td,
} from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import PropsTable from "../../../Components/PropsTable";
import type { PropertyItem } from "../../../Components/PropsTable/types";

class TablePage extends Component<{}> {
    static componentProps: Array<PropertyItem> = [
        {
            name: "bg?",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as background",
        },
        {
            name: "color?",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as text color",
        },
        {
            name: "text?",
            type: "string",
            defaultValue: "left",
            description: "Specifies the alignment of the text in the table (options: 'left', 'center', 'right')",
        },
        {
            name: "border?",
            type: "Array<string>",
            defaultValue: "",
            description:
                "A list of table components that should have a border (options: 'table', 'thead', 'tbody', 'tr', 'td', 'th')",
        },
        {
            name: "headerBg?",
            type: "string",
            defaultValue: "",
            description: "A key to a color specified in the theme file that is used as background for the header",
        },
        {
            name: "even?",
            type: "string",
            defaultValue: "light",
            description:
                "A key to a color specified in the theme file that is used as background for every even table row",
        },
        {
            name: "odd?",
            type: "string",
            defaultValue: "light",
            description:
                "A key to a color specified in the theme file that is used as background for every odd table row",
        },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Table</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={[0, 1, 1, 1]}>
                            <Header size={4}>General</Header>
                            <Text size={1}>The table component extends all the regular html table tags.</Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <table />"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={TablePage.componentProps} />

                    <Row>
                        <Column padding={1}>
                            <Table headerBg={"dark"} even={"stable"} bg={"light"}>
                                <THead>
                                    <Tr>
                                        <Th>Column 1</Th>
                                        <Th>Column 2</Th>
                                        <Th>Column 3</Th>
                                        <Th>Column 4</Th>
                                    </Tr>
                                </THead>

                                <TBody>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </Column>
                        <Column padding={1}>
                            <Table border={["table", "thead"]} even={"stable"} bg={"light"}>
                                <THead>
                                    <Tr>
                                        <Th>Column 1</Th>
                                        <Th>Column 2</Th>
                                        <Th>Column 3</Th>
                                        <Th>Column 4</Th>
                                    </Tr>
                                </THead>

                                <TBody>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                        <Column padding={1}>
                            <Table headerBg={"dark"} even={"stable"} bg={"light"}>
                                <THead>
                                    <Tr>
                                        <Th>Column 1</Th>
                                        <Th>Column 2</Th>
                                        <Th>Column 3</Th>
                                        <Th>Column 4</Th>
                                    </Tr>
                                </THead>

                                <TBody>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </Column>
                        <Column padding={1}>
                            <Table border={["table", "thead"]} even={"stable"} bg={"light"}>
                                <THead>
                                    <Tr>
                                        <Th>Column 1</Th>
                                        <Th>Column 2</Th>
                                        <Th>Column 3</Th>
                                        <Th>Column 4</Th>
                                    </Tr>
                                </THead>

                                <TBody>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Value 1</Td>
                                        <Td>Value 2</Td>
                                        <Td>Value 3</Td>
                                        <Td>Value 4</Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </Column>
                    `}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withRouter(TablePage);
