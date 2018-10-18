import React, {Component} from 'react';

import {
    Container,
    Row,
    Column,
    Panel,
    Header,
    Text
} from 'ignite-components';


class PanelsPage extends Component {

    render() {

        let panelContent = (
            <Container>
                <Header size={3}>Panel title</Header>
                <Text color={'stableDark'}>This is under</Text>
            </Container>
        );

        return (
            <Container>
                <Row alignVertical={'center'}>
                    <Column padding={1}>
                        <Header size={2}>Panels</Header>
                        <Text size={1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit sagittis quam vel
                            rhoncus. Praesent consequat ultrices justo. Nunc viverra malesuada sem, non condimentum orci
                            porttitor quis.
                        </Text>
                    </Column>
                    <Column padding={1}>
                        <Panel bg={'light'} padding={[1, 2]} summary={panelContent}>
                            <Container padding={[1, 2]}>
                                <Header size={3}>Light Panel</Header>
                                <Text>Lorem Ipsum dolor siet</Text>
                            </Container>
                        </Panel>

                        <Panel bg={'dark'} padding={[1, 2]} summary={panelContent}>
                            <Container padding={[1, 2]}>
                                <Header size={3}>Dark Panel</Header>
                                <Text>Lorem Ipsum dolor siet</Text>
                            </Container>
                        </Panel>

                        <Panel bg={'warning'} padding={[1, 2]} summary={panelContent}>
                            <Container padding={[1, 2]}>
                                <Header size={3}>Warning Panel</Header>
                                <Text>Lorem Ipsum dolor siet</Text>
                            </Container>
                        </Panel>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default PanelsPage;
