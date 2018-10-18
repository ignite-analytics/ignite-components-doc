import React, {Component} from 'react';
import logo from './Assets/logo-white-border.png';

import {
    Container,
    Row,
    Column,
    Header,
} from 'ignite-components';

import CardsPage from "./Pages/cards";
import ButtonsPage from "./Pages/buttons";
import PanelsPage from "./Pages/panels";
import AlertPage from "./Pages/alerts";
import TagsPage from "./Pages/tags";
import ProgressBarPage from "./Pages/progressBar";
import TablePage from "./Pages/table";
import DropdownPage from "./Pages/dropdown";
import {StyledLogo} from "./style";

class App extends Component {

    static pages = [
        AlertPage,
        ButtonsPage,
        CardsPage,
        DropdownPage,
        PanelsPage,
        TagsPage,
        ProgressBarPage,
        TablePage
    ];

    render = () => {
        return (
            <Container>
                {/* Header */}
                <Row align={'center'} bg={'primary'} padding={[4, 2]}>
                    <Container text={'center'}>
                        <StyledLogo src={logo} alt="Ignite Components Logo"/>
                        <Header size={2}>Ignite Components</Header>
                    </Container>
                </Row>

                {/* Component pages */}
                {App.pages.map(Page => (
                    <Row align={'center'} bg={'stableLight'} padding={[4, 2]}>
                        <Column md={6}>
                            <Page />
                        </Column>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default App;
