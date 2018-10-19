import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

import {
    Alert,
    Container,
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
             * The alert component is used to display a message/status to the user
             *
             * @extends Container
             *
             * @property {Object}                   style?: The general style property
             * @property {string}                   className?: The general className property
             * @property {Array<Node>}              children?: The general children property
             *
             * @property {string}                   iconSize?: The text size of the icon (default '1.5em')
             * @property {string}                   icon?: The font awesome icon key (default 'plus')
             * @property {string}                   iconPrefix?: The font awesome font prefix (default 'fas')
             *
             * @property {string}                   color:            Defines the color of the alert container
             * @property {Array<number> | number}   padding?: Defines the padding of the alert container (default [1, 2])
             * @property {Array<number> | number}   margin?: Defines the margin of the alert container (default [0.5, 0])
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
                <Row alignVertical={'center'}>
                    <Column md={6} padding={1}>
                        <Header size={2}>Alerts</Header>
                        <Text size={1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                            rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                            porttitor quis.
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

export default AlertPage;
