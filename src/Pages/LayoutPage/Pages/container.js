import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Container, Row, Column, Card, CardHeader, CardContent, Panel, Header, Text } from "ignite-components";

class ContainerPage extends Component {
    render() {
        const docString = `
            /**
             *  Container - The most general component in the library
             *
             *  @property {Object}                  style?: The general style property
             *  @property {string}                  className?: The general className property
             *  @property {Array<Node>}             children?: The general children property
             *
             *  @property {string}                  bg?:         A key to a color specified in the theme file that is used as background
             *  @property {string}                  color?:      A key to a color specified in the theme file that is used as text color
             *  @property {Array<number> | number}  padding?:    An array of or a single number indicating the padding of the container
             *  @property {Array<number> | number}  margin?:     An array of or a single number indicating the margin of the container
             *  @property {boolean}                 clickable?:  An boolean value that indicates if the container should appear clickable
             *  @property {boolean}                 hover?:      An boolean value that indicates if the container should change background if it is hovered
             *  @property {boolean}                 animated?:   An boolean value that indicates if the container should fade in upon rendering
             *  @property {string}                  text?:       An string that specifies the alignment of the inline elements of the container
             */
             
            <Row alignVertical={'stretch'}>
                <Column md={6} padding={1}>
                    <Container animated bg={'primary'} padding={2}>
                        <Header size={3}>Animated</Header>
                        <Text size={1}>This container fades in on mount</Text>
                    </Container>
                </Column>
                <Column md={6} padding={1}>
                    <Container hover bg={'secondary'} padding={2}>
                        <Header size={3}>Hover</Header>
                        <Text size={1}>This container changes color on hover</Text>
                    </Container>
                </Column>
            </Row>
            <Row alignVertical={'stretch'}>
                <Column md={6} padding={1}>
                    <Container bg={'stable'} color={'decline'} padding={2}>
                        <Header size={3}>Color</Header>
                        <Text size={1}>This container has a custom text color</Text>
                    </Container>
                </Column>
                <Column md={6} padding={1}>
                    <Container bg={'warning'} text={'center'} padding={2}>
                        <Header size={3}>Text alignment</Header>
                        <Text size={1}>This container has text that is center aligned</Text>
                    </Container>
                </Column>
            </Row>
        `;

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Containers</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                The container is the most general component in the library and acts as the base for many
                                of the other compoents. Its main purpose is to give the user the possibility to easily
                                style different segments of the page.
                            </Text>
                        </Column>
                    </Row>
                    <Row alignVertical={"stretch"}>
                        <Column md={6} padding={1}>
                            <Container animated bg={"primary"} padding={2}>
                                <Header size={3}>Animated</Header>
                                <Text size={1}>This container fades in on mount</Text>
                            </Container>
                        </Column>
                        <Column md={6} padding={1}>
                            <Container hover bg={"secondary"} padding={2}>
                                <Header size={3}>Hover</Header>
                                <Text size={1}>This container changes color on hover</Text>
                            </Container>
                        </Column>
                    </Row>
                    <Row alignVertical={"stretch"}>
                        <Column md={6} padding={1}>
                            <Container bg={"stable"} color={"decline"} padding={2}>
                                <Header size={3}>Color</Header>
                                <Text size={1}>This container has a custom text color</Text>
                            </Container>
                        </Column>
                        <Column md={6} padding={1}>
                            <Container bg={"warning"} text={"center"} padding={2}>
                                <Header size={3}>Text alignment</Header>
                                <Text size={1}>This container has text that is center aligned</Text>
                            </Container>
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

export default ContainerPage;
