/* @flow */
import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import update from "immutability-helper";
import styled from "styled-components";

import {
    Button,
    Dropdown,
    DropdownContainer,
    Container,
    Row,
    Column,
    Panel,
    Header,
    Text,
    Icon
} from 'ignite-components';

const StyledIcon = styled(Icon, Panel);

type Props = {}

type State = {
    open: {
        [string]: boolean
    },
}

class DropdownPage extends Component<Props, State> {

    state: State = {
        open: {},
    };

    toggleDropdown = (key: string) => {
        this.setState((state) => update(this.state, {
            open: {
                [key]: {$set: !state.open[key]}
            }
        }))
    };

    render() {
        const docString = `
            /**
             * The alert component is used to display a message/status to the user
             *
             * @extends Container
             *
             * @property {?Object} style: The general style property
             * @property {?string} className: The general className property
             * @property {?Array<Node>} children: The general children property
             *
             * @property {?string} iconSize: The text size of the icon (default '1.5em')
             * @property {?string} icon: The font awesome icon key (default 'plus')
             * @property {?string} iconPrefix: The font awesome font prefix (default 'fas')
             *
             * @property {string} color: Defines the color of the alert container
             * @property {Array<number> | number} padding: Defines the padding of the alert container (default [1, 2])
             * @property {Array<number> | number} margin: Defines the margin of the alert container (default [0.5, 0])
             *
             */
             
            
        `;

        return (
            <Container>
                <Row alignVertical={'center'}>
                    <Column md={6} padding={1}>
                        <Header size={2}>Dropdowns</Header>
                        <Text size={1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                            rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                            porttitor quis.
                        </Text>
                        <StyledIcon icon={'plus'} color={'primary'} />
                    </Column>
                </Row>
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
                            <Dropdown open={this.state.open['light']} arrow={true} bg={'light'} padding={2}>
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
                            <Dropdown open={this.state.open['dark']} arrow={true} bg={'dark'} padding={2}>
                                <Header size={3}>A dark dropdown</Header>
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
                            <Dropdown open={this.state.open['dark']} arrow={true} bg={'dark'} padding={2}>
                                <Header size={3}>A dark dropdown</Header>
                                <Text>This is a dropdown with some content</Text>
                            </Dropdown>
                        </DropdownContainer>
                    </Column>
                </Row>
                <Row>
                    <Column padding={1} md={12}>
                        <Panel bg={'light'} padding={[1, 2]} summary={<Header size={3}>Code snippet</Header>}>
                            <Container padding={[1, 2]}>
                                <SyntaxHighlighter showLineNumbers language='jsx' style={atomDark}>
                                    {docString}
                                </SyntaxHighlighter>
                            </Container>
                        </Panel>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default DropdownPage;
