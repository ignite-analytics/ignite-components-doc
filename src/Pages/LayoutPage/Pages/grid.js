import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import { Container, Row, Column, Card, CardHeader, CardContent, Panel, Header, Text, Icon } from "ignite-components";

class GridPage extends Component {
    render() {
        const docStringFirst = `
            /**
             * Column - The column component in the grid layout setup
             *
             * @extends Container
             *
             * @property {number}                   sm?: The size the column should have in the small view port
             * @property {number}                   md?: The size the column should have in the medium view port
             * @property {number}                   lg?: The size the column should have in the large view port
             *
             * @property {string}                   align?: How the column should align according to its parent container
             *
             */
             
            <Row>
                <Column padding={1}>
                    <Row alignVertical={'stretch'} text={'center'}>
                        <Column padding={2} bg={'primary'}>
                            <Header size={3}>Flex column</Header>
                        </Column>
                        <Column padding={2} bg={'secondary'}>
                            <Header size={3}>Flex column</Header>
                        </Column>
                        <Column md={6} padding={2} bg={'action'}>
                            <Header size={3}>md-6</Header>
                        </Column>
                    </Row>
                    <Row alignVertical={'stretch'} text={'center'}>
                        <Column sm={6} padding={2} bg={'decline'}>
                            <Header size={3}>sm-6</Header>
                        </Column>
                        <Column sm={3} padding={2} bg={'dark'}>
                            <Header size={3}>sm-3</Header>
                        </Column>
                        <Column sm={3} padding={2} bg={'stableDark'}>
                            <Header size={3}>sm-3</Header>
                        </Column>
                    </Row>
                </Column>
            </Row>
        `;

        const docStringSecond = `
            <Row>
                <Column padding={1}>
                    <Row alignVertical={'center'} bg={'stable'} padding={1} color={'decline'}>
                        <Icon rightMargin={1} icon={'fire'} size={'2em'} />
                        <Header size={3}>Ignite Components</Header>
                    </Row>
                </Column>
            </Row>
        `;

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Grid</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Ignite Components uses rows and columns to structure content and uses flex to align
                                content. Both the Row and the Column components extends the Container component and have
                                thus the same style properties as this component.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
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
                    <Row>
                        <Column padding={1} md={12}>
                            <Panel bg={"light"} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                                <Container padding={[1, 2]}>
                                    <SyntaxHighlighter showLineNumbers language="jsx" style={atomDark}>
                                        {docStringFirst}
                                    </SyntaxHighlighter>
                                </Container>
                            </Panel>
                        </Column>
                    </Row>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Row without columns</Header>
                            <Text size={1}>
                                The Row component can also be used to align other elements, such as an icon and a
                                header.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Row alignVertical={"center"} bg={"stable"} padding={1} color={"decline"}>
                                <Icon rightMargin={1} icon={"fire"} size={"2em"} />
                                <Header size={3}>Ignite Components</Header>
                            </Row>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1} md={12}>
                            <Panel bg={"light"} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                                <Container padding={[1, 2]}>
                                    <SyntaxHighlighter showLineNumbers language="jsx" style={atomDark}>
                                        {docStringSecond}
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

export default GridPage;
