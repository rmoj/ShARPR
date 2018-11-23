import { Table } from 'semantic-ui-react/dist/commonjs';
import React from 'react';

export function CoinTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'id' ? props.direction : null}
          onClick={() => props.handleSort('id')}
        >
          #
        </Table.HeaderCell>
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'name' ? props.direction : null}
          onClick={() => props.handleSort('name')}
        >
          NAME
        </Table.HeaderCell>
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'price' ? props.direction : null}
          onClick={() => props.handleSort('price')}
        >
          PRICE
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'change' ? props.direction : null}
          onClick={() => props.handleSort('change')}
        >
          CHANGE (24H)
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'marketcap' ? props.direction : null}
          onClick={() => props.handleSort('marketcap')}
        >
          MARKET CAP
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'dvolume' ? props.direction : null}
          onClick={() => props.handleSort('dvolume')}
        >
          DIRECT VOLUME (24H)
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'tvolume' ? props.direction : null}
          onClick={() => props.handleSort('tvolume')}
        >
          TOTAL VOLUME (24H)
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'favorite' ? props.direction : null}
          onClick={() => props.handleSort('favorite')}
        >
          WATCHLIST
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
