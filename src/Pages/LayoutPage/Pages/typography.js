import React, { Component } from "react";

import {
    Container,
    Row,
    Column,
    Card,
    CardHeader,
    CardContent,
    Header,
    Text,
    Table,
    THead,
    TBody,
    Tr,
    Td,
    Th,
} from "ignite-components";

import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

class TypographyPage extends Component {
    static headerTypes = [
        { type: "H1", description: "Largest header", size: 1 },
        { type: "H2", description: "Large header", size: 2 },
        { type: "H3", description: "Medium header", size: 3 },
        { type: "H4", description: "Regular header", size: 4 },
        { type: "H5", description: "Small header", size: 5 },
        { type: "H6", description: "Smallest header", size: 6 },
    ];

    static componentProps: Array<PropertyItem> = [
        {
            name: "text",
            type: "string",
            defaultValue: "right",
            description: "Specifies how the text should be aligned",
        },
        {
            name: "color",
            type: "string",
            defaultValue: "",
            description: "Specifies the color of the text",
        },
        {
            name: "size",
            type: "number",
            defaultValue: "",
            description: "Specifies the size the header text",
        },
    ];

    static textTypes = [
        { type: "P1", description: "Largest paragraph", size: 1 },
        { type: "P2", description: "Medium paragraph", size: 2 },
        { type: "P3", description: "Smallest paragraph", size: 3 },
    ];

    render() {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Typography</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The library offers two different text components; Header and Text. These two components
                                is meant to render the standard html header and paragraph tags.
                            </Text>
                        </Column>
                    </Row>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Header</Header>
                            <Text size={1}>
                                The library offers two different text components; Header and Text. These two components
                                is meant to render the standard html header and paragraph tags.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <h1/> | <h2/> | <h3/> | <h4/> | <h5/> | <h6/>"}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={TypographyPage.componentProps} />
                    <Row padding={1}>
                        <Column>
                            <Table border={["tr"]}>
                                <THead>
                                    <Tr>
                                        <Th>Type</Th>
                                        <Th>Description</Th>
                                        <Th>Size</Th>
                                    </Tr>
                                </THead>
                                <TBody>
                                    {TypographyPage.headerTypes.map((header, i) => (
                                        <Tr key={`header-${i}`}>
                                            <Td>
                                                <Header size={header.size}>{header.type}</Header>
                                            </Td>
                                            <Td>
                                                <Header size={header.size}>{header.description}</Header>
                                            </Td>
                                            <Td>
                                                <Container color={"code"}>
                                                    <Text code>{header.size}</Text>
                                                </Container>
                                            </Td>
                                        </Tr>
                                    ))}
                                </TBody>
                            </Table>
                        </Column>
                    </Row>

                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Text</Header>
                            <Text size={1}>
                                The library offers two different text components; Header and Text. These two components
                                is meant to render the standard html header and paragraph tags.
                            </Text>
                        </Column>
                    </Row>

                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends <p/>"}
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={TypographyPage.componentProps} />

                    <Row padding={1}>
                        <Column>
                            <Table border={["tr"]}>
                                <THead>
                                    <Tr>
                                        <Th>Type</Th>
                                        <Th>Description</Th>
                                        <Th>Size</Th>
                                    </Tr>
                                </THead>
                                <TBody>
                                    {TypographyPage.textTypes.map((header, i) => (
                                        <Tr key={`header-${i}`}>
                                            <Td>
                                                <Text size={header.size}>{header.type}</Text>
                                            </Td>
                                            <Td>
                                                <Text size={header.size}>{header.description}</Text>
                                            </Td>
                                            <Td>
                                                <Container color={"code"}>
                                                    <Text code>{header.size}</Text>
                                                </Container>
                                            </Td>
                                        </Tr>
                                    ))}
                                </TBody>
                            </Table>
                        </Column>
                    </Row>
                </CardContent>
            </Card>
        );
    }
}

export default TypographyPage;
