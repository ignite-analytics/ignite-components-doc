/* @flow */
import React from "react";
import { Container, Row, Column, Header, Text, Table, THead, TBody, Tr, Th, Td } from "ignite-components";

type Props = {
    componentProps: Array<Object>,
};

class PropsTable extends React.Component<Props> {
    render() {
        return (
            <Row alignVertical={"center"}>
                <Column padding={1}>
                    <Header size={4}>Props</Header>
                    <Container padding={[1, 0]} color={"stableDark"}>
                        <Table border={["tr"]}>
                            <THead>
                                <Tr>
                                    <Th>Name</Th>
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
                                            <Text>{prop.description}</Text>
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
