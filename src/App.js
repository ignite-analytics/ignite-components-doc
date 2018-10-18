import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Container,
    Row,
    Column,
} from 'ignite-components';

import CardsPage from "./Pages/cards";
import ButtonsPage from "./Pages/buttons";
import PanelsPage from "./Pages/panels";
import AlertPage from "./Pages/alerts";
import TagsPage from "./Pages/tags";
import ProgressBarPage from "./Pages/progressBar";
import TablePage from "./Pages/table";
import DropdownPage from "./Pages/dropdown";

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
                <Row align={'center'} bg={'dark'} padding={2}>
                    <Container text={'center'}>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1>Ignite Components</h1>
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
