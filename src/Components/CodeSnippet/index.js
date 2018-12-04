/* @flow */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { stripIndent } from "../../Lib/strip-indent";

import { Container, Row, Column, Panel, Header } from "ignite-components";

type Props = {
    snippet: string,
};

class CodeSnippet extends React.Component<Props> {
    render() {
        let codeSnippet = stripIndent(this.props.snippet);
        return (
            <Row>
                <Column padding={1} md={12}>
                    <Panel bg={"light"} padding={[1, 2]} summary={<Header size={4}>Code snippet</Header>}>
                        <Container padding={[1, 2]}>
                            <SyntaxHighlighter language="jsx" style={prism}>
                                {codeSnippet}
                            </SyntaxHighlighter>
                        </Container>
                    </Panel>
                </Column>
            </Row>
        );
    }
}

export default CodeSnippet;
