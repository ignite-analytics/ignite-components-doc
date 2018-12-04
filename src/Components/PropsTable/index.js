/* @flow */
import React from "react";
import { Container, Row, Column, Text, Table, THead, TBody, Tr, Th, Td } from "ignite-components";
import type { PropertyItem } from "./types";

type Props = {
    componentProps: Array<PropertyItem>,
};

class PropsTable extends React.Component<Props> {
    render() {
        return (
            <Row alignVertical={"center"}>
                <Column padding={1}>
                    <Container padding={[1, 0]} color={"stableDark"}>
                        <Table border={["tr"]}>
                            <THead>
                                <Tr>
                                    <Th>Prop</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Tr>
                            </THead>

                            <TBody>
                                {this.props.componentProps.map((prop, i) => (
                                    <Tr key={i}>
                                        <Td>
                                            <Text color={"code"} code>
                                                {prop.name}
                                            </Text>
                                        </Td>
                                        <Td>
                                            <Text code>{prop.type}</Text>
                                        </Td>
                                        <Td>
                                            <Text code>{prop.defaultValue}</Text>
                                        </Td>
                                        <Td>
                                            <Text size={1}>{prop.description}</Text>
                                        </Td>
                                    </Tr>
                                ))}
                            </TBody>
                        </Table>
                    </Container>
                </Column>
            </Row>
        );
    }
}

export default PropsTable;
