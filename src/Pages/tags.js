import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';

import {
    Container,
    Row,
    Column,
    Panel,
    Tag,
    Header,
    Text
} from 'ignite-components';


class TagsPage extends Component {

    render() {
        const docString = `
            /**
             * Container - The most general component in the library
             *
             *  @property {string}                  bg:         A key to a color specified in the theme file that is used as background
             *  @property {string}                  color:      A key to a color specified in the theme file that is used as text color
             *  @property {Array<number> | number}  padding:    An array of or a single number indicating the padding of the container
             *  @property {Array<number> | number}  margin:     An array of or a single number indicating the margin of the container
             *  @property {boolean}                 hover:      An boolean value that indicates if the container should change background if it is hovered
             *  @property {boolean}                 animated:   An boolean value that indicates if the container should fade in upon rendering
             *  @property {string}                  text:       An string that specifies the alignment of the inline elements of the container
             */
             
            <Alert color={'decline'} icon={'exclamation-circle'}>
                <Text size={1}>This went terrible wrong!</Text>
            </Alert>

            <Alert color={'warning'} icon={'exclamation-triangle'}>
                <Text size={1}>This went somewhat wrong...</Text>
            </Alert>

            <Alert color={'accept'} icon={'check'}>
                <Text size={1}>This went very good!</Text>
            </Alert>

            <Alert color={'primary'} icon={'question'}>
                <Text size={1}>Some information</Text>
            </Alert>
        `;

        return (
            <Container>
                <Row alignVertical={'center'}>
                    <Column md={6} padding={1}>
                        <Header size={2}>Tags</Header>
                        <Text size={1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                            rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                            porttitor quis.
                        </Text>
                    </Column>
                    <Column padding={1}>
                        <Tag bg={'decline'} leftIcon={'exclamation-circle'}>
                            <Text>This went terrible wrong!</Text>
                        </Tag>

                        <Tag bg={'warning'} leftIcon={'exclamation-triangle'} hover>
                            <Text>This went somewhat wrong...</Text>
                        </Tag>

                        <Tag bg={'accept'} leftIcon={'check'}>
                            <Text>This went very good!</Text>
                        </Tag>

                        <Tag bg={'primary'} leftIcon={'question'}>
                            <Text>Some information</Text>
                        </Tag>

                        <Tag bg={'stableDark'} rightIcon={'times'} hover>
                            <Text>Close this</Text>
                        </Tag>
                    </Column>
                </Row>
                <Row>
                    <Column md={12}>
                        <Panel bg={'light'} padding={[1, 2]} summary={<Header size={3}>Code snippet</Header>}>
                            <Container padding={[1, 2]}>
                                <SyntaxHighlighter showLineNumbers language='javascript' style={zenburn}>
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

export default TagsPage;
