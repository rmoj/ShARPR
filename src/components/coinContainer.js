import React from 'react';
import CoinList from './coinList';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu
} from 'semantic-ui-react/dist/commonjs';

const coinContainer = () => (
  <Container style={{ padding: '2em 0em' }}>
    <Menu borderless secondary>
      <Menu.Item>
        <Header>Cryptocurrency Prices</Header>
      </Menu.Item>
      <Menu.Item position="right">
        <Button
          color="facebook"
          as="a"
          href="https://github.com/syin1/React-Table"
        >
          <Icon name="github" />
          Project Source
        </Button>
      </Menu.Item>
    </Menu>

    <CoinList />
  </Container>
);

export default coinContainer;
