import React from 'react';
import { shallow } from 'enzyme';
import CoinFilter from './coinFilter';

describe('CoinFilter', () => {
  it('should render correctly in "debug" mode', () => {
    let filter = '';
    let totalCount = 100;
    let onSubmitFilter = function() {};

    const component = shallow(
      <CoinFilter
        filter={filter}
        totalCount={totalCount}
        onSubmitFilter={onSubmitFilter}
        debug
      />
    );

    expect(component).toMatchSnapshot();
  });
});
