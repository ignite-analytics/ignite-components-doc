import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {atomDark} from 'react-syntax-highlighter/styles/prism';

import {
    Container,
    Card,
    CardHeader,
    CardContent,
    Row,
    Column,
    Panel,
    Header,
    Text
} from 'ignite-components';
import {withRouter} from "react-router-dom";


class PanelsPage extends Component {

    render() {

        let panelContent = (
            <Container>
                <Header size={3}>Panel title</Header>
                <Text>This is under</Text>
            </Container>
        );

        const docString = `
            /**
             *  Shows a summary of information that can be expanded by a user click
             *
             *  @extends Card
             *
             *  @property {Node}         summary?: The content that is visible all the time
             *  @property {boolean}      open?: The initial state of the panel, indicating if it should begin open or closed
             *
             */
             
             // PanelContent
             <Container>
                <Header size={3}>Panel title</Header>
                <Text color={'stableDark'}>This is under</Text>
             </Container>
             
             <Row>
                <Column padding={1}>
                    <Panel bg={'light'} padding={[1, 2]} summary={panelContent}>
                        <Container padding={[1, 2]}>
                            <Header size={3}>Light Panel</Header>
                            <Text>Lorem Ipsum dolor siet</Text>
                        </Container>
                    </Panel>

                    <Panel bg={'dark'} padding={[1, 2]} summary={panelContent}>
                        <Container padding={[1, 2]}>
                            <Header size={3}>Dark Panel</Header>
                            <Text>Lorem Ipsum dolor siet</Text>
                        </Container>
                    </Panel>

                    <Panel bg={'warning'} padding={[1, 2]} summary={panelContent}>
                        <Container padding={[1, 2]}>
                            <Header size={3}>Warning Panel</Header>
                            <Text>Lorem Ipsum dolor siet</Text>
                        </Container>
                    </Panel>
                </Column>
            </Row>
        `;

        return (
            <Card bg={'light'}>
                <CardHeader>
                    <Header size={4}>Panels</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={'center'}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Panles are used to structure and hide large content into smaller containers that can
                                summarize their content.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Panel bg={'light'} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Light Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={'dark'} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Dark Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>

                            <Panel bg={'warning'} padding={[1, 2]} summary={panelContent}>
                                <Container padding={[1, 2]}>
                                    <Header size={3}>Warning Panel</Header>
                                    <Text>Lorem Ipsum dolor siet</Text>
                                </Container>
                            </Panel>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1} md={12}>
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

export default withRouter(PanelsPage);
