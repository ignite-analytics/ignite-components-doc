import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {atomDark} from 'react-syntax-highlighter/styles/prism';
import {withRouter} from "react-router-dom";

import {
    Alert,
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


class AlertPage extends Component {

    render() {
        const docString = `
            /**
             *  The alert component is used to display a message/status to the user
             *
             *  @extends Container
             *
             *  @property {string}                   iconSize?:     The text size of the icon (default '1.5em')
             *  @property {string}                   icon?:         The font awesome icon key (default 'plus')
             *  @property {string}                   iconPrefix?:   The font awesome font prefix (default 'fas')
             *
             *  @property {string}                   color:         Defines the color of the alert container
             *  @property {Array<number> | number}   padding?:      Defines the padding of the alert container (default [1, 2])
             *  @property {Array<number> | number}   margin?:       Defines the margin of the alert container (default [0.5, 0])
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
            <Card bg={'light'}>
                <CardHeader>
                    <Header size={4}>Alerts</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={'center'}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Alerts are used to notify the user, and can contain any content such as text, images and
                                buttons. They can also be displayed with an icon by passing in the icon property.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
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

export default withRouter(AlertPage);
