/* @flow */
import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import {Redirect} from "react-router";

import AlertPage from "./Pages/alerts";
import ButtonsPage from "./Pages/buttons";
import CardsPage from "./Pages/cards";
import DropdownPage from "./Pages/dropdown";
import PanelsPage from "./Pages/panels";
import ProgressBarPage from "./Pages/progressBar";
import TagsPage from "./Pages/tags";
import TablePage from "./Pages/table";

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
import {MarginIcon} from "./style";

type Props = {
    match: {isExact: boolean}
}

class ComponentsPage extends Component<Props> {

    static pages = [
        {name: 'Alerts', path: '/components/alerts/', component: AlertPage, icon: 'bell', prefix: 'far'},
        {name: 'Buttons', path: '/components/buttons/', component: ButtonsPage, icon: 'hand-point-down', prefix: 'far'},
        {name: 'Cards', path: '/components/cards/', component: CardsPage, icon: 'address-card', prefix: 'far'},
        {name: 'Dropdowns', path: '/components/dropdown/', component: DropdownPage, icon: 'caret-square-down', prefix: 'far'},
        {name: 'Panels', path: '/components/panels/', component: PanelsPage, icon: 'expand', prefix: 'fas'},
        {name: 'Progress bars', path: '/components/progress-bar/', component: ProgressBarPage, icon: 'bars', prefix: 'fas'},
        {name: 'Tags', path: '/components/tags/', component: TagsPage, icon: 'tags', prefix: 'fas'},
        {name: 'Tables', path: '/components/table/', component: TablePage, icon: 'table', prefix: 'fas'},
    ];

    render() {

        // Handle incomplete route
        if (this.props.match.isExact) {
            return <Redirect to={"/components/alerts/"} />;
        }

        return (
            <Row align={'center'}>
                <Container width={'1200px'}>
                    <Row>
                        <Column md={3} padding={1.5}>
                            <Card bg={'light'}>
                                <CardHeader>
                                    <Header size={4}>Components</Header>
                                </CardHeader>
                                <CardContent>
                                    {ComponentsPage.pages.map((page) => (
                                        <NavBarContent>
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
                            {ComponentsPage.pages.map((page) => (
                                <Route path={page.path} component={page.component} />
                            ))}
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(ComponentsPage);
