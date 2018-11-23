import React from 'react';
import { shallow } from 'enzyme';
import CoinTablePagination from './coinTablePagination';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

describe('CoinTablePagination', () => {
  it('should render correctly', () => {
    shallow(
      <CoinTablePagination
        onChangePage={() => {}}
        totalPages={100}
        currentPage={1}
        showPages={5}
      />
    );
  });
});
