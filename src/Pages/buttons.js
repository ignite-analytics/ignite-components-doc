import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/styles/hljs';
import {colors} from '../Lib/variables';

import {
    Button,
    Container,
    Row,
    Column,
    Panel,
    Header,
    Text
} from 'ignite-components';


class ButtonsPage extends Component {

    render() {

        let docString = `
            /**
             * The alert component is used to display a message/status to the user
             *
             * @extends button (html)
             *
             * @property {Object}       style?: The general style property
             * @property {string}       className?: The general className property
             * @property {Array<Node>}  children?: The general children property
             *
             * @property {string}       leftIcon?: The font awesome key for the left icon in the button
             * @property {string}       rightIcon?: The font awesome key for the right icon in the button
             * @property {string}       iconPrefix?: The font awesome font prefix (default 'fas')
             *
             * @property {string}       text?: The text property (WARNING this property is deprecated, use children instead)
             * @property {string}       type?: The HTML button type (default 'button')
             * @property {string}       color?: The color of the button (default 'primary')
             * @property {boolean}      loading?: Indicates if the button should appear in a loading mode or not
             * @property {string}       margin?: The margin of the button
             * @property {boolean}      disabled?: Indicates if the button is disabled
             * @property {boolean}      border?: Indicates if the button should be a border button
             * @property {boolean}      round?: Indicates if the button should be a round button
             *
             * @property {Function}     onClick?: The function that is triggered when the button is clicked
             *
             *
             */
        `;

        docString += `// Regular buttons \n`;

        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button key={${i}} color={'${key}'}>
                    Button
                </Button>
            `
        }).join("\n");

        docString += `\n// Border buttons \n`;
        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button border key={${i}} color={'${key}'}>
                    Button
                </Button>
            `
        }).join("\n");

        docString += `\n// Round buttons \n`;
        docString += Object.keys(colors).map((key, i) => {
            return `
                <Button round key={${i}} color={'${key}'}>
                    Button
                </Button>
            `
        }).join("\n");

        return (
            <Container>
                <Row alignVertical={'center'}>
                    <Column padding={1}>
                        <Header size={2}>Buttons</Header>
                        <Text size={1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                            rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                            porttitor quis.
                        </Text>
                    </Column>
                </Row>
                <Row>
                    <Column padding={1}>
                        <Container>
                            {Object.keys(colors).map((key, i) => {
                                return (
                                    <Button key={i} color={key}>
                                        Button
                                    </Button>
                                )
                            })}
                        </Container>

                        <Container>
                            {Object.keys(colors).map((key, i) => {
                                return (
                                    <Button border key={i} color={key}>
                                        Button
                                    </Button>
                                )
                            })}
                        </Container>

                        <Container>
                            {Object.keys(colors).map((key, i) => {
                                return (
                                    <Button round key={i} color={key}>
                                        Button
                                    </Button>
                                )
                            })}
                        </Container>
                    </Column>
                </Row>
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

export default ButtonsPage;
