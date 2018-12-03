import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomDark } from "react-syntax-highlighter/styles/prism";

import {
    Container,
    Card,
    CardHeader,
    CardContent,
    Row,
    Column,
    Panel,
    Header,
    Text,
    ProgressBar,
} from "ignite-components";
import { withRouter } from "react-router-dom";

class ProgressBarPage extends Component {
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
             
            {/* Decline */}
            <Row alignVertical={'center'}>
                <Column padding={1}>
                    <ProgressBar progress={10} color={'decline'}>
                        <Text weight={'bold'}>10%</Text>
                    </ProgressBar>
                </Column>
                <Column padding={1}>
                    <ProgressBar height={1} round progress={10} color={'decline'} />
                </Column>
            </Row>

            {/* Warning */}
            <Row alignVertical={'center'}>
                <Column padding={1}>
                    <ProgressBar progress={30} color={'warning'}>
                        <Text weight={'bold'}>30%</Text>
                    </ProgressBar>
                </Column>
                <Column padding={1}>
                    <ProgressBar height={1} round progress={30} color={'warning'} />
                </Column>
            </Row>

            {/* Accept */}
            <Row alignVertical={'center'}>
                <Column padding={1}>
                    <ProgressBar progress={20} color={'accept'}>
                        <Text weight={'bold'}>20%</Text>
                    </ProgressBar>
                </Column>
                <Column padding={1}>
                    <ProgressBar height={1} round progress={20} color={'accept'} />
                </Column>
            </Row>

            {/* Primary */}
            <Row alignVertical={'center'}>
                <Column padding={1}>
                    <ProgressBar progress={70} color={'primary'}>
                        <Text weight={'bold'}>70%</Text>
                    </ProgressBar>
                </Column>
                <Column padding={1}>
                    <ProgressBar height={1} round progress={70} color={'primary'} />
                </Column>
            </Row>

            {/* Stable Dark */}
            <Row alignVertical={'center'}>
                <Column padding={1}>
                    <ProgressBar progress={50} color={'stableDark'}>
                        <Text weight={'bold'}>50%</Text>
                    </ProgressBar>
                </Column>
                <Column padding={1}>
                    <ProgressBar height={1} round progress={50} color={'stableDark'} />
                </Column>
            </Row>
        `;

        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Progress bar</Header>
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

                    {/* Decline */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={10} color={"decline"}>
                                <Text weight={"bold"}>10%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={10} color={"decline"} />
                        </Column>
                    </Row>

                    {/* Warning */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={30} color={"warning"}>
                                <Text weight={"bold"}>30%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={30} color={"warning"} />
                        </Column>
                    </Row>

                    {/* Accept */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={20} color={"accept"}>
                                <Text weight={"bold"}>20%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={20} color={"accept"} />
                        </Column>
                    </Row>

                    {/* Primary */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={70} color={"primary"}>
                                <Text weight={"bold"}>70%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={70} color={"primary"} />
                        </Column>
                    </Row>

                    {/* Stable Dark */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <ProgressBar progress={50} color={"stableDark"}>
                                <Text weight={"bold"}>50%</Text>
                            </ProgressBar>
                        </Column>
                        <Column padding={1}>
                            <ProgressBar height={1} round progress={50} color={"stableDark"} />
                        </Column>
                    </Row>
                    <Row>
                        <Column md={12}>
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

export default withRouter(ProgressBarPage);
