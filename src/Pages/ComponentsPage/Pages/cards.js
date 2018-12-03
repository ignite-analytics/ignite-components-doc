import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import {
    Container,
    Row,
    Column,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    IconButton,
    Panel,
    Header,
    Text,
} from "ignite-components";
import { withRouter } from "react-router-dom";

class CardsPage extends Component {
    render = () => {
        const docString = `
            /**
             * Card - The main card component
             *
             * @extends Container
             *
             */
            
            /**
             * CardHeader - The card header component
             *
             * @extends Container
             *
             */
            
            /**
             * CardContent - The card content component
             *
             * @extends Container
             *
             */
            
            /**
             * CardFooter - The card footer component
             *
             * @extends Container
             *
             */
             
            <Card bg={'light'}>
                <CardHeader>
                    <Column>
                        <Header size={3}>Title on card</Header>
                    </Column>
                    <Column text={'right'}>
                        <IconButton icon={'pen'} />
                        <IconButton icon={'grip-vertical'} />
                    </Column>
                </CardHeader>
                <CardContent>
                    <Text size={1}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                        rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                        porttitor quis.
                    </Text>
                </CardContent>
                <CardFooter>
                    <Text>
                        Bottom text
                    </Text>
                </CardFooter>
            </Card>
        `;

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Cards</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Cards are used to divide content into different containers for better visibility. The
                                cards consist of three parts:
                            </Text>
                            <ul>
                                <li>
                                    <Text size={1}>CardHeader</Text>
                                </li>
                                <li>
                                    <Text size={1}>CardContent</Text>
                                </li>
                                <li>
                                    <Text size={1}>CardFooter</Text>
                                </li>
                            </ul>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Card bg={"light"}>
                                <CardHeader>
                                    <Column>
                                        <Header size={3}>Title on card</Header>
                                    </Column>
                                    <Column text={"right"}>
                                        <IconButton icon={"pen"} />
                                        <IconButton icon={"grip-vertical"} />
                                    </Column>
                                </CardHeader>
                                <CardContent>
                                    <Text size={1}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis
                                        quam vel rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem,
                                        non condimentum orci porttitor quis.
                                    </Text>
                                </CardContent>
                                <CardFooter>
                                    <Text>Bottom text</Text>
                                </CardFooter>
                            </Card>
                        </Column>
                        <Column padding={1}>
                            <Card bg={"warning"}>
                                <CardHeader>
                                    <Column>
                                        <Header size={3}>Title on card</Header>
                                    </Column>
                                    <Column text={"right"}>
                                        <IconButton icon={"pen"} />
                                        <IconButton icon={"grip-vertical"} />
                                    </Column>
                                </CardHeader>
                                <CardContent>
                                    <Text size={1}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis
                                        quam vel rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem,
                                        non condimentum orci porttitor quis.
                                    </Text>
                                </CardContent>
                                <CardFooter>
                                    <Text>Bottom text</Text>
                                </CardFooter>
                            </Card>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1} md={12}>
                            <Panel bg={"dark"} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
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
    };
}

export default withRouter(CardsPage);
