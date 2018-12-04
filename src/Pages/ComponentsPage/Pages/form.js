import React, { Component } from "react";

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
} from "ignite-components";

import { withRouter } from "react-router-dom";
import CodeSnippet from "../../../Components/CodeSnippet";
import type { PropertyItem } from "../../../Components/PropsTable/types";
import PropsTable from "../../../Components/PropsTable";

class FormPage extends Component {
    static formProps: Array<PropertyItem> = [
        { name: "style?", type: "Object", defaultValue: "1.5em", description: "The general style property" },
        { name: "className?", type: "string", defaultValue: "", description: "The general className property" },
        { name: "children?", type: "Array<Node>", defaultValue: "fas", description: "The general children property" },
        {
            name: "errors?",
            type: "Array<string>",
            defaultValue: "[]",
            description: "Array containing errors related to the form",
        },
        {
            name: "onSubmit",
            type: "Function(e, values)",
            defaultValue: "",
            description: "The function to be called when the form is submitted.",
        },
    ];

    static inputProps: Array<PropertyItem> = [
        { name: "style?", type: "Object", defaultValue: "1.5em", description: "The general style property" },
        { name: "className?", type: "string", defaultValue: "", description: "The general className property" },
        { name: "children?", type: "Array<Node>", defaultValue: "fas", description: "The general children property" },
    ];

    static selectItems = new Array(100).fill(0).map((x, i) => {
        return { text: `Item ${i}`, value: i };
    });

    onSubmit(fields) {
        this.setState({
            errors: {
                test: ["This is an error"],
            },
            fields: fields,
        });
    }

    state = {
        fields: {},
        errors: {},
    };

    render = () => {
        return (
            <Card bg={"light"}>
                <CardHeader>
                    <Header size={4}>Form</Header>
                </CardHeader>
                <CardContent>
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>General</Header>
                            <Text size={1}>
                                Ignite Components comes with a form component that watches fields in the form, and
                                includes them in the submit form much like a regular HTML form. This means that the
                                parent component of the form does not need to listen to value changes in the different
                                input fields.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {`@extends <form />`}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={FormPage.formProps} />

                    {/* Input component */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>The Input Component</Header>
                            <Text size={1}>
                                Ignite Components comes with a form component that watches fields in the form, and
                                includes them in the submit form much like a regular HTML form. This means that the
                                parent component of the form does not need to listen to value changes in the different
                                input fields.
                            </Text>
                        </Column>
                    </Row>
                    <Row padding={1}>
                        <Column bg={"stableLight"} padding={1}>
                            <Text color={"code"} code>
                                {`@extends <input />`}
                            </Text>
                        </Column>
                    </Row>
                    <PropsTable componentProps={FormPage.inputProps} />

                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Regular Input</Header>
                            <Text size={1}>
                                Ignite Components comes with a form component that watches fields in the form, and
                                includes them in the submit form much like a regular HTML form. This means that the
                                parent component of the form does not need to listen to value changes in the different
                                input fields.
                            </Text>
                        </Column>
                    </Row>

                    <Row>
                        <Column padding={1}>
                            <Input label={"First name"} name={"firstname"} />
                        </Column>
                        <Column padding={1}>
                            <Input color={"primary"} label={"With focus color"} name={"lastname"} />
                        </Column>
                        <Column padding={1}>
                            <Input
                                label={"With suggestions"}
                                name={"firstname"}
                                suggestions={[{ text: "Volvo" }, { text: "BMW" }, { text: "Tesla" }, { text: "Ford" }]}
                            />
                        </Column>
                        <Column padding={1}>
                            <Input color={"primary"} label={"Disabled"} name={"disabled"} disabled />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Row>
                            <Column padding={1}>
                                <Input label={"First name"} name={"firstname"} />
                            </Column>
                            <Column padding={1}>
                                <Input color={"primary"} label={"With focus color"} name={"lastname"} />
                            </Column>
                            <Column padding={1}>
                                <Input
                                    label={"With suggestions"}
                                    name={"firstname"}
                                    suggestions={[{ text: "Volvo" }, { text: "BMW" }, { text: "Tesla" }, { text: "Ford" }]}
                                />
                            </Column>
                        </Row>
                    `}
                    />

                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Checkbox Input</Header>
                            <Text size={1}>
                                Ignite Components comes with a form component that watches fields in the form, and
                                includes them in the submit form much like a regular HTML form. This means that the
                                parent component of the form does not need to listen to value changes in the different
                                input fields.
                            </Text>
                        </Column>
                    </Row>

                    <Row>
                        <Column md={6} padding={[1, 3]}>
                            <Input
                                color={"decline"}
                                label={"Agree to our evil terms"}
                                name={"firstname"}
                                type={"checkbox"}
                            />
                        </Column>
                        <Column md={6} padding={[1, 3]}>
                            <Input disabled label={"I am disabled"} name={"firstname"} type={"checkbox"} />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Row>
                            <Column md={6} padding={[1, 3]}>
                                <Input
                                    color={"decline"}
                                    label={"Agree to our evil terms"}
                                    name={"firstname"}
                                    type={"checkbox"}
                                />
                            </Column>
                            <Column md={6} padding={[1, 3]}>
                                <Input disabled label={"I am disabled"} name={"firstname"} type={"checkbox"} />
                            </Column>
                        </Row>
                    `}
                    />

                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>Full form example</Header>
                            <Text size={1}>
                                Below is a full example of a form displayed with the different form components.
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={[2, 1, 0, 1]}>
                            <Form
                                errors={["This is a form error!"]}
                                onSubmit={(e, fields) => {
                                    this.onSubmit(fields);
                                }}
                            >
                                <Row>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Input watch color={"primary"} label={"First name"} name={"firstname"} />
                                    </Column>
                                    <Column>
                                        <Input watch label={"Last name"} name={"lastname"} value={"Rolfsen"} />
                                    </Column>
                                </Row>
                                <Row alignVertical={"center"} padding={[1, 0]}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Select watch multiSelect={true} name={"fruit"} items={FormPage.selectItems} />
                                    </Column>
                                    <Column>
                                        <Input
                                            watch
                                            color={"secondary"}
                                            type={"checkbox"}
                                            label={"Is active"}
                                            name={"active"}
                                        />
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <TextArea
                                            watch
                                            height={10}
                                            value={"This is an initial text"}
                                            name={"description"}
                                        />
                                    </Column>
                                </Row>
                                <Row>
                                    <Button margin={[1, 0]} type={"submit"}>
                                        Submit
                                    </Button>
                                </Row>
                            </Form>
                        </Column>
                    </Row>
                    <Row>
                        <Column padding={1}>
                            <Header size={4}>Result</Header>
                            <Container bg={"stable"} color={"primary"} padding={1}>
                                <Text size={1}>{JSON.stringify(this.state.fields, null, 2)}</Text>
                            </Container>
                        </Column>
                    </Row>
                    <CodeSnippet
                        snippet={`
                            <Form
                                errors={["This is a form warning!"]}
                                onSubmit={(e, fields) => {
                                    this.onSubmit(fields);
                                }}
                            >
                                <Row>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Input watch color={"primary"} label={"First name"} name={"firstname"} />
                                    </Column>
                                    <Column>
                                        <Input watch label={"Last name"} name={"lastname"} value={"Rolfsen"} />
                                    </Column>
                                </Row>
                                <Row alignVertical={"center"} padding={[1, 0]}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Select watch multiSelect={true} name={"fruit"} items={FormPage.selectItems} />
                                    </Column>
                                    <Column>
                                        <Input
                                            watch
                                            color={"secondary"}
                                            type={"checkbox"}
                                            label={"Is active"}
                                            name={"active"}
                                        />
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <TextArea
                                            watch
                                            height={10}
                                            value={"This is an initial text"}
                                            name={"description"}
                                        />
                                    </Column>
                                </Row>
                                <Row>
                                    <Button margin={[1, 0]} type={"submit"}>
                                        Submit
                                    </Button>
                                </Row>
                            </Form>
                        `}
                    />
                </CardContent>
            </Card>
        );
    };
}

export default withRouter(FormPage);
