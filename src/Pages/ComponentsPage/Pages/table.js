import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

import {
    Card,
    CardHeader,
    CardContent,
    Container,
    Row,
    Column,
    Panel,
    Header,
    Text,
    Table,
    THead,
    TBody,
    Tr,
    Th,
    Td
} from 'ignite-components';
import {withRouter} from "react-router-dom";


class TablePage extends Component {

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
            <Card bg={'light'}>
                <CardHeader>
                    <Header size={4}>Table</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={'center'}>
                        <Column padding={[0, 1, 1, 1]}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                                rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                                porttitor quis.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Table
                                headerBg={'dark'}
                                even={'stable'}
                                bg={'light'}>

                                <THead>
                                <Tr>
                                    <Th>Column 1</Th>
                                    <Th>Column 2</Th>
                                    <Th>Column 3</Th>
                                    <Th>Column 4</Th>
                                </Tr>
                                </THead>

                                <TBody>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                </TBody>

                            </Table>
                        </Column>
                        <Column padding={1}>
                            <Table
                                border={['table', 'thead']}
                                even={'stable'}
                                bg={'light'}>

                                <THead>
                                <Tr>
                                    <Th>Column 1</Th>
                                    <Th>Column 2</Th>
                                    <Th>Column 3</Th>
                                    <Th>Column 4</Th>
                                </Tr>
                                </THead>

                                <TBody>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                <Tr>
                                    <Td>Value 1</Td>
                                    <Td>Value 2</Td>
                                    <Td>Value 3</Td>
                                    <Td>Value 4</Td>
                                </Tr>
                                </TBody>

                            </Table>
                        </Column>
                    </Row>
                    <Row>
                        <Column md={12}>
                            <Panel bg={'dark'} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                                <Container padding={[1, 2]}>
                                    <SyntaxHighlighter showLineNumbers language='jsx' style={atomDark}>
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

export default withRouter(TablePage);
