import React, {Component} from 'react';
import logo from './Assets/logo-white-border.png';
import { BrowserRouter, Route } from "react-router-dom";
import {
    Column,
    NavBar,
    NavBarContent,
    NavBarItem,
    Icon,
} from 'ignite-components';

import HomePage from "./Pages/HomePage";
import GettingStartedPage from "./Pages/GettingStartedPage";
import ComponentsPage from "./Pages/ComponentsPage";
import LayoutPage from "./Pages/LayoutPage";


import {FillRow, StyledLogo, StyledNavLink} from "./style";

class App extends Component {

    static pages = [
        {name: 'Home', path: '/home/', component: HomePage},
        {name: 'Getting Started', path: '/getting-started/', component: GettingStartedPage},
        {name: 'Layout', path: '/layout/', component: LayoutPage},
        {name: 'Components', path: '/components/', component: ComponentsPage}
    ];

    render = () => {
        return (
            <BrowserRouter>
                <div>
                    <NavBar fixed padding={1} bg={'dark'} alignVertical={'center'}>
                        <StyledLogo src={logo} alt="Ignite Components Logo"/>
                        <Column padding={[0, 1]}>
                            <NavBarContent>
                                {App.pages.map((page, i) => (
                                    <StyledNavLink key={i} activeClassName={'active'} to={page.path}>
                                        <NavBarItem>
                                            {page.name}
                                        </NavBarItem>
                                    </StyledNavLink>
                                ))}
                            </NavBarContent>
                        </Column>
                        <Column sm={1} text={'right'} padding={[0, 1]}>
                            <Icon size={'1.5em'} prefix={'fab'} icon={'github'} />
                        </Column>
                    </NavBar>

                    <FillRow bg={'stableLight'} padding={[6, 0, 5, 0]} align={'center'}>
                        <Column>
                            {App.pages.map((page, i) => (
                                <Route key={`page-${i}`} path={page.path} component={page.component} />
                            ))}
                        </Column>
                    </FillRow>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
