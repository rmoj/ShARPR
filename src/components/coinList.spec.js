import React from 'react';
import { shallow } from 'enzyme';
import CoinList from './coinList';
import 'isomorphic-fetch';

describe('CoinList', () => {
  it('should render correctly', () => {
    shallow(<CoinList />);
  });
});
