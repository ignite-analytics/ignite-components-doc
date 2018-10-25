import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {prism} from 'react-syntax-highlighter/styles/prism';

import {
    Container,
    Button,
    Row,
    Column,
    Card,
    CardHeader,
    CardContent,
    Form,
    Input,
    Select,
    TextArea,
    Panel,
    Header,
    Text,
    Modal,
    IconButton
} from 'ignite-components';
import {withRouter} from "react-router-dom";


class FormPage extends Component {

    static selectItems = [
        {text: 'Banana', value: 'banana'},
        {text: 'Apple', value: 'apple'},
        {text: 'Orange', value: 'orange'},
    ];

    state = {
        fields: {}
    };

    render = () => {

        const docString = `
            /**
             * Card - The main card component
             *
             * @extends Container
             *
             */
            
            /**
             * CardHeader - The card header component
             *
             * @extends Container
             *
             */
            
            /**
             * CardContent - The card content component
             *
             * @extends Container
             *
             */
            
            /**
             * CardFooter - The card footer component
             *
             * @extends Container
             *
             */
             
            <Row>
                <Column padding={[3, 5]}>
                    <Form onSubmit={(e, fields) => {
                        console.log(fields);
                    }}>
                        <Row alignVertical={'end'}>
                            <Column padding={[0, 1, 0, 0]}>
                                <Input watch label={'First name'} name={'firstname'}/>
                            </Column>
                            <Column>
                                <Input watch label={'Last name'} name={'lastname'} value={'Rolfsen'}/>
                            </Column>
                        </Row>
                        <Row alignVertical={'center'} padding={[1, 0]}>
                            <Column padding={[0, 1, 0, 0]}>
                                <Select watch name={'select1'} items={FormPage.selectItems}/>
                            </Column>
                            <Column>
                                <Input
                                    watch
                                    type={'checkbox'}
                                    label={'Is active'}
                                    name={'active'}/>
                            </Column>
                        </Row>
                        <Row>
                            <TextArea
                                height={10}
                                value={'This is an initial text'}
                                name={'description'}/>
                        </Row>
                        <Row>
                            <Button margin={[1, 0]} type={'submit'}>Submit</Button>
                        </Row>
                    </Form>
                </Column>
            </Row>
        `;

        return (
            <Card bg={'light'}>
                <CardHeader>
                    <Header size={4}>Form</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={'center'}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Ignite Components comes with a form component that watches fields in the form, and
                                includes them in the submit form much like a regular HTML form.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={[3, 1, 0, 1]}>
                            <Form onSubmit={(e, fields) => {
                                console.log(fields);
                                this.setState({fields: fields});
                            }}>
                                <Row alignVertical={'end'}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Input watch label={'First name'} name={'firstname'}/>
                                    </Column>
                                    <Column>
                                        <Input watch label={'Last name'} name={'lastname'} value={'Rolfsen'}/>
                                    </Column>
                                </Row>
                                <Row alignVertical={'center'} padding={[1, 0]}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Select watch name={'fruit'} items={FormPage.selectItems}/>
                                    </Column>
                                    <Column>
                                        <Input
                                            watch
                                            type={'checkbox'}
                                            label={'Is active'}
                                            name={'active'}/>
                                    </Column>
                                </Row>
                                <Row>
                                    <TextArea
                                        watch
                                        height={10}
                                        value={'This is an initial text'}
                                        name={'description'}/>
                                </Row>
                                <Row>
                                    <Button margin={[1, 0]} type={'submit'}>Submit</Button>
                                </Row>
                            </Form>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Header size={4}>Result</Header>
                            <Container bg={'stable'} color={'primary'} padding={1}>
                                <Text size={1}>{JSON.stringify(this.state.fields)}</Text>
                            </Container>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1} md={12}>
                            <Panel bg={'light'} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                                <Container>
                                    <SyntaxHighlighter language='jsx' style={prism}>
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

export default withRouter(FormPage);
