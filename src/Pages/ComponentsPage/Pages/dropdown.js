/* @flow */
import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";
import update from "immutability-helper";

import {
    Button,
    Dropdown,
    DropdownContainer,
    Container,
    Card,
    CardHeader,
    CardContent,
    Row,
    Column,
    Panel,
    Header,
    Text,
} from "ignite-components";
import { withRouter } from "react-router-dom";

type Props = {};

type State = {
    open: {
        [string]: boolean,
    },
};

class DropdownPage extends Component<Props, State> {
    state: State = {
        open: {},
    };

    toggleDropdown = (key: string) => {
        this.setState(state =>
            update(this.state, {
                open: {
                    [key]: { $set: !state.open[key] },
                },
            })
        );
    };

    render() {
        const docString = `
            /**
             *  Dropdown - The dropdown component is a toggleable overlay component that is used to display lists, links and more
             *
             *  @extends Card
             *
             *  @property {boolean}                  open?:         Indicator if the dropdown should be open or not
             *  @property {number | string}          height?:       The height of the dropdown
             *  @property {number | string}          width?:        The width of the dropdown
             *  @property {string}                   top?:          The top position og the dropdown
             *  @property {boolean}                  hideArrow?:    If the dropdown arrow should be hidden
             *
             */
             
             <Row>
                <Column text={'center'} padding={1}>
                    <DropdownContainer>

                        {/* Trigger */}
                        <Button
                            color={'light'}
                            onClick={() => this.toggleDropdown('light')}>
                            Toggle Light Dropdown
                        </Button>

                        {/* Content */}
                        <Dropdown width={'300px'} open={this.state.open['light']} arrow={true} bg={'light'} padding={2}>
                            <Header size={3}>A light dropdown</Header>
                            <Text>This is a dropdown with some content</Text>
                        </Dropdown>
                    </DropdownContainer>
                </Column>
                <Column text={'center'} padding={1}>
                    <DropdownContainer>

                        {/* Trigger */}
                        <Button
                            color={'dark'}
                            onClick={() => this.toggleDropdown('dark')}>
                            Toggle Dark Dropdown
                        </Button>

                        {/* Content */}
                        <Dropdown width={'300px'} open={this.state.open['dark']} arrow={true} bg={'dark'} padding={2}>
                            <Header size={3}>A dark dropdown</Header>
                            <Text>This is a dropdown with some content</Text>
                        </Dropdown>
                    </DropdownContainer>
                </Column>
            </Row>
        `;

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Dropdowns</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam
                                vel rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non
                                condimentum orci porttitor quis.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column text={"center"} padding={1}>
                            <DropdownContainer>
                                {/* Trigger */}
                                <Button color={"light"} onClick={() => this.toggleDropdown("light")}>
                                    Toggle Light Dropdown
                                </Button>

                                {/* Content */}
                                <Dropdown
                                    width={"300px"}
                                    open={this.state.open["light"]}
                                    arrow={true}
                                    bg={"light"}
                                    padding={2}
                                >
                                    <Header size={3}>A light dropdown</Header>
                                    <Text>This is a dropdown with some content</Text>
                                </Dropdown>
                            </DropdownContainer>
                        </Column>
                        <Column text={"center"} padding={1}>
                            <DropdownContainer>
                                {/* Trigger */}
                                <Button color={"dark"} onClick={() => this.toggleDropdown("dark")}>
                                    Toggle Dark Dropdown
                                </Button>

                                {/* Content */}
                                <Dropdown
                                    width={"300px"}
                                    open={this.state.open["dark"]}
                                    arrow={true}
                                    bg={"dark"}
                                    padding={2}
                                >
                                    <Header size={3}>A dark dropdown</Header>
                                    <Text>This is a dropdown with some content</Text>
                                </Dropdown>
                            </DropdownContainer>
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
    }
}

export default withRouter(DropdownPage);
