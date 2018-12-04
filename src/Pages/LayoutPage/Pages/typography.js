import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Container, Row, Column, Card, CardHeader, CardContent, Panel, Header, Text } from "ignite-components";

class TypographyPage extends Component {
    render() {
        const docString = ` 
            <Row>
                <Column text={'center'} padding={1}>
                    <Row>
                        <Column sm={1}>
                            <Header size={1}>H1</Header>
                        </Column>
                        <Column>
                            <Header size={1}>Largest header</Header>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Header size={2}>H2</Header>
                        </Column>
                        <Column>
                            <Header size={2}>Large header</Header>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Header size={3}>H3</Header>
                        </Column>
                        <Column>
                            <Header size={3}>Medium header</Header>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Header size={4}>H4</Header>
                        </Column>
                        <Column>
                            <Header size={4}>Regular header</Header>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Header size={5}>H5</Header>
                        </Column>
                        <Column>
                            <Header size={5}>Small header</Header>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Header size={6}>H6</Header>
                        </Column>
                        <Column>
                            <Header size={6}>Smallest header</Header>
                        </Column>
                    </Row>
                </Column>
            </Row>
            <Row>
                <Column text={'center'} padding={1}>
                    <Row>
                        <Column sm={1}>
                            <Text size={1}>P1</Text>
                        </Column>
                        <Column>
                            <Text size={1}>Largest paragraph</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Text size={2}>P2</Text>
                        </Column>
                        <Column>
                            <Text size={2}>Medium paragraph</Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column sm={1}>
                            <Text size={3}>P3</Text>
                        </Column>
                        <Column>
                            <Text size={3}>Smallest paragraph</Text>
                        </Column>
                    </Row>
                </Column>
            </Row>
        `;

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
                    <Row>
                        <Column text={"center"} padding={1}>
                            <Row>
                                <Column sm={1}>
                                    <Header size={1}>H1</Header>
                                </Column>
                                <Column>
                                    <Header size={1}>Largest header</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Header size={2}>H2</Header>
                                </Column>
                                <Column>
                                    <Header size={2}>Large header</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Header size={3}>H3</Header>
                                </Column>
                                <Column>
                                    <Header size={3}>Medium header</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Header size={4}>H4</Header>
                                </Column>
                                <Column>
                                    <Header size={4}>Regular header</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Header size={5}>H5</Header>
                                </Column>
                                <Column>
                                    <Header size={5}>Small header</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Header size={6}>H6</Header>
                                </Column>
                                <Column>
                                    <Header size={6}>Smallest header</Header>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column text={"center"} padding={1}>
                            <Row>
                                <Column sm={1}>
                                    <Text size={1}>P1</Text>
                                </Column>
                                <Column>
                                    <Text size={1}>Largest paragraph</Text>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Text size={2}>P2</Text>
                                </Column>
                                <Column>
                                    <Text size={2}>Medium paragraph</Text>
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={1}>
                                    <Text size={3}>P3</Text>
                                </Column>
                                <Column>
                                    <Text size={3}>Smallest paragraph</Text>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1} md={12}>
                            <Panel bg={"light"} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                                <Container padding={[1, 2]}>
                                    <SyntaxHighlighter showLineNumbers language="jsx" style={atomDark}>
                                        {docString}
                                    </SyntaxHighlighter>
                                </Container>
                            </Panel>
                        </Column>
                    </Row>
                </CardContent>
            </Card>
        );
    }
}

export default TypographyPage;
