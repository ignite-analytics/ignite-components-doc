import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import {colors} from '../../../Lib/variables';

import {
    Button,
    Card,
    CardHeader,
    CardContent,
    Container,
    Row,
    Column,
    Panel,
    Header,
    Text
} from 'ignite-components';
import {withRouter} from "react-router-dom";


class ButtonsPage extends Component {

    render() {

        let docString = `
            /**
             *  Button component can be used to interact with the application through mouse clicks
             *
             *  @extends button (html)
             *
             *  @property {Object}       style?:        The general style property
             *  @property {string}       className?:    The general className property
             *  @property {Array<Node>}  children?:     The general children property
             *
             *  @property {string}       leftIcon?:     The font awesome key for the left icon in the button
             *  @property {string}       rightIcon?:    The font awesome key for the right icon in the button
             *  @property {string}       iconPrefix?:   The font awesome font prefix (default 'fas')
             *
             *  @property {string}       text?:         The text property (WARNING this property is deprecated, use children instead)
             *  @property {string}       type?:         The HTML button type (default 'button')
             *  @property {string}       color?:        The color of the button (default 'primary')
             *  @property {boolean}      loading?:      Indicates if the button should appear in a loading mode or not
             *  @property {string}       margin?:       The margin of the button
             *  @property {boolean}      disabled?:     Indicates if the button is disabled
             *  @property {boolean}      border?:       Indicates if the button should be a border button
             *  @property {boolean}      round?:        Indicates if the button should be a round button
             *
             *  @property {Function}     onClick?:      The function that is triggered when the button is clicked
             *
             *
             */
        `;

        docString += `\n\t\t\t\t// Regular buttons \n`;

        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button key={${i}} color={'${key}'}>
                    {key}
                </Button>
            `
        }).join("\n");

        docString += `\n\t\t\t\t// Border buttons \n`;
        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button border key={${i}} color={'${key}'}>
                    {key}
                </Button>
            `
        }).join("\n");

        docString += `\n\t\t\t\t// Round buttons \n`;
        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button round key={${i}} color={'${key}'}>
                    {key}
                </Button>
            `
        }).join("\n");

        docString += `\n\t\t\t\t// Buttons with icons \n`;
        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button leftIcon={'apple-alt'} key={${i}} color={'${key}'}>
                    {key}
                </Button>
            `
        }).join("\n");

        return (
            <Card bg={'light'}>
                <CardHeader>
                    <Header size={4}>Buttons</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={'center'}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Buttons gives the user the possibility to interact with the application. Ignite Components offer a large variety of different buttons.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column text={'center'} padding={1}>
                            <Header size={3}>Regular buttons</Header>
                            <Container margin={[0,0,3,0]}>
                                {Object.keys(colors).map((key, i) => {
                                    return (
                                        <Button key={i} color={key}>
                                            {key}
                                        </Button>
                                    )
                                })}
                            </Container>

                            <Header size={3}>Border buttons</Header>
                            <Container margin={[0,0,3,0]}>
                                {Object.keys(colors).map((key, i) => {
                                    return (
                                        <Button border key={i} color={key}>
                                            {key}
                                        </Button>
                                    )
                                })}
                            </Container>

                            <Header size={3}>Round buttons</Header>
                            <Container margin={[0,0,3,0]}>
                                {Object.keys(colors).map((key, i) => {
                                    return (
                                        <Button round key={i} color={key}>
                                            {key}
                                        </Button>
                                    )
                                })}
                            </Container>

                            <Header size={3}>Buttons with icons</Header>
                            <Container>
                                {Object.keys(colors).map((key, i) => {
                                    return (
                                        <Button leftIcon={'apple-alt'} key={i} color={key}>
                                            {key}
                                        </Button>
                                    )
                                })}
                            </Container>
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

export default withRouter(ButtonsPage);
