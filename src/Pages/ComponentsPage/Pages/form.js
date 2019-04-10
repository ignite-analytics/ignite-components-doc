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

    static defaultInputProps: Array<PropertyItem> = [
        {
            name: "name?",
            type: "string",
            defaultValue: "",
            description: "The name property that is also used as the key when used within a form. This prop can be omitted if you want the Form to ignore a field and exclude it from the onSubmit call.",
        },
        { name: "value?", type: "string | number | boolean", defaultValue: "text", description: "The input value" },
        {
            name: "label?",
            type: "string",
            defaultValue: "",
            description: "The input label, which is rendered inside a label tag",
        },
        { name: "placeholder?", type: "string", defaultValue: "", description: "The input placeholder" },
        { name: "errors?", type: "Array<string>", defaultValue: "", description: "Errors related to the input field" },
        { name: "color?", type: "string", defaultValue: "", description: "The focus color of the input field" },

        { name: "style?", type: "Object", defaultValue: "1.5em", description: "The general style property" },
        { name: "className?", type: "string", defaultValue: "", description: "The general className property" },
        {
            name: "onChange?",
            type: "Function",
            defaultValue: "",
            description: "The callback for when the value in the input field changes",
        },
    ];

    static inputProps: Array<PropertyItem> = FormPage.defaultInputProps.concat([
        { name: "type?", type: "string", defaultValue: "text", description: "The input type" },
        {
            name: "suggestions?",
            type: "Array<ListItem>",
            defaultValue: "",
            description: "A list of custom suggestions that is displayed to the user",
        },
        {
            name: "noAutoSuggestions?",
            type: "boolean",
            defaultValue: "",
            description: "A boolean value indicating if the input field should show suggestions from the browser",
        },
    ]);

    static selectProps: Array<PropertyItem> = FormPage.defaultInputProps.concat([
        {
            name: "items",
            type: "Array<ListItem>",
            defaultValue: "[]",
            description: "A list of items that can be selected",
        },
        {
            name: "height?",
            type: "string",
            defaultValue: "300px",
            description: "The height of the dropdown displayed under the select field",
        },
        {
            name: "multiSelect?",
            type: "boolean",
            defaultValue: "false",
            description: "A boolean value indicating if the user should be able to select multiple values",
        },
        {
            name: "onSearch?",
            type: "Function",
            defaultValue: "Filters the items list",
            description: "A callback for what",
        },
        {
            name: "unit?",
            type: "string",
            defaultValue: "em",
            description: "The unit for size properties",
        },
    ]);

    static textAreaProps: Array<PropertyItem> = FormPage.defaultInputProps.concat([
        {
            name: "height?",
            type: "string",
            defaultValue: "auto",
            description: "The height of the textarea",
        },
        {
            name: "unit?",
            type: "string",
            defaultValue: "em",
            description: "The unit for size properties",
        },
    ]);

    static selectItems = new Array(100).fill(0).map((x, i) => {
        return { text: `Item ${i}`, value: i };
    });

    static selectLevelItems = new Array(100).fill(0).map((x, i) => {
        return {
            text: `Item ${i}`,
            value: i,
            children: new Array(5).fill(0).map((y, j) => ({ text: `Child ${j}`, value: j })),
        };
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
                                        <Input
                                            onChange={(e, value) => {
                                                console.log(value);
                                            }}
                                            color={"primary"}
                                            label={"First name"}
                                            name={"firstname"}
                                        />
                                    </Column>
                                    <Column>
                                        <Input label={"Last name"} name={"lastname"} value={"Rolfsen"} />
                                    </Column>
                                </Row>
                                <Row alignVertical={"center"} padding={[1, 0]}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Select multiSelect={true} name={"fruit"} items={FormPage.selectItems} />
                                    </Column>
                                    <Column>
                                        <Input
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
                            <Container bg={"stableLight"} color={"code"} padding={1}>
                                <Text code size={1}>
                                    {JSON.stringify(this.state.fields, null, 2)}
                                </Text>
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
                                        <Input color={"primary"} label={"First name"} name={"firstname"} />
                                    </Column>
                                    <Column>
                                        <Input label={"Last name"} name={"lastname"} value={"Rolfsen"} />
                                    </Column>
                                </Row>
                                <Row alignVertical={"center"} padding={[1, 0]}>
                                    <Column padding={[0, 1, 0, 0]}>
                                        <Select multiSelect={true} name={"fruit"} items={FormPage.selectItems} />
                                    </Column>
                                    <Column>
                                        <Input
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

                    {/* Input component */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>The Input Component</Header>
                            <Text size={1}>
                                The Input Component extends the html input tag. It has been extended with features like
                                new styling, possibility for border focus, custom suggestions and errors. Furthermore
                                the label can be defined by simpely adding a label property.
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

                    {/* Regular Input */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={5}>Regular Input</Header>
                            <Text size={1}>
                                The regular input is displayed as a styled input field, and have properties as disabled,
                                errors and color.
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
                                label={"With Custom suggestions"}
                                name={"firstname"}
                                suggestions={[{ text: "Volvo" }, { text: "BMW" }, { text: "Tesla" }, { text: "Ford" }]}
                            />
                        </Column>
                        <Column padding={1}>
                            <Input color={"primary"} label={"Disabled"} name={"disabled"} disabled />
                        </Column>
                        <Column padding={1}>
                            <Input
                                color={"primary"}
                                label={"With errors"}
                                name={"disabled"}
                                errors={["This area has an error!"]}
                            />
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
                                    label={"With Custom suggestions"}
                                    name={"firstname"}
                                    suggestions={[{ text: "Volvo" }, { text: "BMW" }, { text: "Tesla" }, { text: "Ford" }]}
                                />
                            </Column>
                            <Column padding={1}>
                                <Input color={"primary"} label={"Disabled"} name={"disabled"} disabled />
                            </Column>
                            <Column padding={1}>
                                <Input
                                    color={"primary"}
                                    label={"With errors"}
                                    name={"disabled"}
                                    errors={["This area has an error!"]}
                                />
                            </Column>
                        </Row>
                    `}
                    />

                    {/* Checkbox Input */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={5}>Checkbox Input</Header>
                            <Text size={1}>
                                The checkbox version is a styled checkbox property where the label is displayed inline
                                with the checkbox.
                            </Text>
                        </Column>
                    </Row>

                    <Row>
                        <Column padding={[1, 3]}>
                            <Input
                                color={"decline"}
                                label={"Agree to our evil terms"}
                                name={"firstname"}
                                type={"checkbox"}
                            />
                        </Column>
                        <Column padding={[1, 3]}>
                            <Input disabled label={"I am disabled"} name={"firstname"} type={"checkbox"} />
                        </Column>
                        <Column padding={[1, 3]}>
                            <Input
                                errors={["Checkbox with error!"]}
                                label={"I have errors"}
                                name={"firstname"}
                                type={"checkbox"}
                            />
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

                    {/* Select */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>The Select Component</Header>
                            <Text size={1}>
                                The select component does not extend the select tag, but is meant to serve the same
                                purpose as it. The component includes a search field to simplify the selection process,
                                and the list can be configured to enable multi select and multiple levels.
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={FormPage.selectProps} />

                    <Row>
                        <Column padding={1}>
                            <Select label={"Regular select"} name={"fruit"} items={FormPage.selectItems} />
                        </Column>
                        <Column padding={1}>
                            <Select multiSelect label={"Multi select"} name={"fruit"} items={FormPage.selectItems} />
                        </Column>
                        <Column padding={1}>
                            <Select label={"Multi level select"} name={"fruit"} items={FormPage.selectLevelItems} />
                        </Column>
                        <Column padding={1}>
                            <Select
                                label={"Select with errors"}
                                name={"fruit"}
                                items={FormPage.selectItems}
                                errors={["Select has error!"]}
                            />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Row>
                            <Column padding={1}>
                                <Select label={"Regular select"} name={"fruit"} items={FormPage.selectItems} />
                            </Column>
                            <Column padding={1}>
                                <Select multiSelect label={"Multi select"} name={"fruit"} items={FormPage.selectItems} />
                            </Column>
                            <Column padding={1}>
                                <Select label={"Multi level select"} name={"fruit"} items={FormPage.selectLevelItems} />
                            </Column>
                        </Row>
                    `}
                    />

                    {/* Textarea */}
                    <Row alignVertical={"center"}>
                        <Column padding={1}>
                            <Header size={4}>The TextArea Component</Header>
                            <Text size={1}>
                                The Input Component extends the html textarea tag. It has been extended with features
                                like new styling, possibility for border focus, custom suggestions and errors.
                                Furthermore the label can be defined by simpely adding a label property.
                            </Text>
                        </Column>
                    </Row>

                    <PropsTable componentProps={FormPage.textAreaProps} />

                    <Row>
                        <Column padding={1}>
                            <TextArea height={10} name={"description"} label={"Regular textarea"} />
                        </Column>
                        <Column padding={1}>
                            <TextArea
                                height={10}
                                name={"description"}
                                label={"With focus color"}
                                color={"primary"}
                            />
                        </Column>
                        <Column padding={1}>
                            <TextArea height={10} name={"description"} label={"Disabled textarea"} disabled />
                        </Column>
                        <Column padding={1}>
                            <TextArea
                                height={10}
                                name={"description"}
                                label={"Textarea with error"}
                                errors={["Text area error"]}
                            />
                        </Column>
                    </Row>

                    <CodeSnippet
                        snippet={`
                        <Row>
                            <Column padding={1}>
                                <Select label={"Regular select"} name={"fruit"} items={FormPage.selectItems} />
                            </Column>
                            <Column padding={1}>
                                <Select multiSelect label={"Multi select"} name={"fruit"} items={FormPage.selectItems} />
                            </Column>
                            <Column padding={1}>
                                <Select label={"Multi level select"} name={"fruit"} items={FormPage.selectLevelItems} />
                            </Column>
                        </Row>
                    `}
                    />
                </CardContent>
            </Card>
        );
    };
}

export default withRouter(FormPage);
