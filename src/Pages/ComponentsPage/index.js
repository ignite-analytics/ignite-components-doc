/* @flow */
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router";

import AlertPage from "./Pages/alerts";
import ButtonsPage from "./Pages/buttons";
import CardsPage from "./Pages/cards";
import DropdownPage from "./Pages/dropdown";
import FormPage from "./Pages/form";
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
    NavBarItem,
} from "ignite-components";
import { StyledNavLink } from "../../style";
import { MarginIcon } from "./style";

type Props = {
    match: { isExact: boolean },
};

class ComponentsPage extends Component<Props> {
    static pages = [
        { name: "Alert", path: "components/alerts/", component: AlertPage, icon: "bell", prefix: "far" },
        {
            name: "Button",
            path: "components/buttons/",
            component: ButtonsPage,
            icon: "hand-point-down",
            prefix: "far",
        },
        { name: "Card", path: "components/cards/", component: CardsPage, icon: "address-card", prefix: "far" },
        {
            name: "Dropdown",
            path: "components/dropdown/",
            component: DropdownPage,
            icon: "caret-square-down",
            prefix: "far",
        },
        { name: "Form", path: "components/form/", component: FormPage, icon: "file-alt", prefix: "far" },
        { name: "Panel", path: "components/panels/", component: PanelsPage, icon: "expand", prefix: "fas" },
        {
            name: "Progress bar",
            path: "components/progress-bar/",
            component: ProgressBarPage,
            icon: "bars",
            prefix: "fas",
        },
        { name: "Tag", path: "components/tags/", component: TagsPage, icon: "tags", prefix: "fas" },
        { name: "Table", path: "components/table/", component: TablePage, icon: "table", prefix: "fas" },
    ];

    render() {
        let baseUrl: string = process.env.BASE_URL ? process.env.BASE_URL : "/";

        // Handle incomplete route
        if (this.props.match.isExact) {
            return <Redirect to={baseUrl + "components/alerts/"} />;
        }

        return (
            <Row align={"center"}>
                <Container width={"1400px"}>
                    <Row>
                        <Column md={3} padding={1.5}>
                            <Card bg={"light"}>
                                <CardHeader>
                                    <Header size={4}>Components</Header>
                                </CardHeader>
                                <CardContent>
                                    {ComponentsPage.pages.map((page, i) => (
                                        <NavBarContent key={i}>
                                            <Column>
                                                <StyledNavLink to={baseUrl + page.path}>
                                                    <NavBarItem>
                                                        <MarginIcon prefix={page.prefix} icon={page.icon} />
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
                            {ComponentsPage.pages.map((page, i) => (
                                <Route key={`page-${i}`} path={baseUrl + page.path} component={page.component} />
                            ))}
                        </Column>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default withRouter(ComponentsPage);
