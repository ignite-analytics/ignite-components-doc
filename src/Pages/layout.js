import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';

import {
    Alert,
    Button,
    Container,
    Row,
    Column,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Form,
    Input,
    TextArea,
    Select,
    IconButton,
    Panel,
    Tag,
    Loader,
    Header,
    Text
} from 'ignite-components';


class LayoutPage extends Component {

    render() {
        const docString = `
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
                <Row>
                    <Column padding={1} md={12}>
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

export default LayoutPage;
