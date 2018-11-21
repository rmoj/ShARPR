// import React from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
// import PropTypes from '../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types';
import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Table } from 'semantic-ui-react/dist/commonjs';

import CoinDropdownOptions from './coinDropdownOptions';
import CoinTablePagination from './coinTablePagination';
import { CoinRow } from './coinRow';
import { CoinTableHeader } from './coinTableHeader';

export default function CoinTable(props) {
  if (props.coins === undefined) {
    return <div />;
  }
  const CoinRows = props.coins.map((coin, index) => (
    <CoinRow key={index} coin={coin} addFavorite={props.addFavorite} />
  ));
  return (
    <div>
      Records per page:{' '}
      <Dropdown
        inline
        options={CoinDropdownOptions.limitOptions}
        defaultValue={props.limit}
        onChange={props.onChangeLimit}
      />
      Total count: {props.totalCount}.
      <Table celled selectable sortable>
        <CoinTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>{CoinRows}</Table.Body>

        <Table.Footer>
          <CoinTablePagination
            totalPages={props.totalPages}
            currentPage={props.currentPage}
            onChangePage={props.onChangePage}
          />
        </Table.Footer>
      </Table>
    </div>
  );
}

CoinTable.propTypes = {
  coins: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired
};
