/* @flow */
import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import {Redirect} from "react-router";

import ContainerPage from "./Pages/container";
import GridPage from "./Pages/grid";
import TypographyPage from "./Pages/typography";

import {
    Row,
    Container,
    Column,
    Card,
    CardHeader,
    Header,
    CardContent,
    NavBarContent,
    NavBarItem
} from 'ignite-components';
import {StyledNavLink} from "../../style";
import {MarginIcon} from "../ComponentsPage/style";

type Props = {
    match: {isExact: boolean}
}

class LayoutPage extends Component<Props> {

    static pages = [
        {name: 'Container', path: '/layout/container/', component: ContainerPage, icon: 'boxes', prefix: 'fas'},
        {name: 'Grid', path: '/layout/grid/', component: GridPage, icon: 'th', prefix: 'fas'},
        {name: 'Typography', path: '/layout/typography/', component: TypographyPage, icon: 'font', prefix: 'fas'},
    ];

    render() {

        // Handle incomplete route
        if (this.props.match.isExact) {
            return <Redirect to={"/layout/container/"} />;
        }

        return (
            <Row align={'center'}>
                <Container width={'1200px'}>
                    <Row>
                        <Column md={3} padding={1.5}>
                            <Card bg={'light'}>
                                <CardHeader>
                                    <Header size={4}>Layout</Header>
                                </CardHeader>
                                <CardContent>
                                    {LayoutPage.pages.map((page, i) => (
                                        <NavBarContent key={i}>
                                            <Column>
                                                <StyledNavLink to={page.path}>
                                                    <NavBarItem>
                                                        <MarginIcon prefix={page.prefix} icon={page.icon}/>
                                                        {page.name}
                                                    </NavBarItem>
                                                </StyledNavLink>
                                            </Column>
                                        </NavBarContent>
                                    ))}
                                </CardContent>
                            </Card>
                        </Column>
                        <Column md={9} padding={1.5}>
                            {LayoutPage.pages.map((page, i) => (
                                <Route key={`page-${i}`} path={page.path} component={page.component} />
                            ))}
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(LayoutPage);
