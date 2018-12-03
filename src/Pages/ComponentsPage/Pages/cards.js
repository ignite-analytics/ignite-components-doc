import React, { Component } from "react";

import { Row, Column, Card, CardHeader, CardContent, CardFooter, IconButton, Header, Text } from "ignite-components";
import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";

class CardsPage extends Component {
    render = () => {
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
                                cards consist of three components:
                            </Text>
                            <ul>
                                <li>
                                    <Text code color={"code"}>
                                        {"<CardHeader />"}
                                    </Text>
                                </li>
                                <li>
                                    <Text code color={"code"}>
                                        {"<CardContent />"}
                                    </Text>
                                </li>
                                <li>
                                    <Text code color={"code"}>
                                        {"<CardFooter />"}
                                    </Text>
                                </li>
                            </ul>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {"@extends Container"}
                            </Text>
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
                            <Card bg={"dark"}>
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
                    <CodeSnippet
                        snippet={`
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
                                <Card bg={"dark"}>
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
                                    `}
                    />
                </CardContent>
            </Card>
        );
    };
}

export default withRouter(CardsPage);
