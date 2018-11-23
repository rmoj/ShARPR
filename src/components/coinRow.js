import { Button, Table } from 'semantic-ui-react/dist/commonjs';
import React from 'react';
import PropTypes from 'prop-types';

export function CoinRow(props) {
  return (
    <Table.Row>
      <Table.Cell>{props.coin.id}</Table.Cell>
      <Table.Cell>{props.coin.name}</Table.Cell>
      <Table.Cell>{props.coin.price}</Table.Cell>
      <Table.Cell>{props.coin.change}</Table.Cell>
      <Table.Cell>{props.coin.marketcap}</Table.Cell>
      <Table.Cell>{props.coin.dvolume}</Table.Cell>
      <Table.Cell>{props.coin.tvolume}</Table.Cell>
      <Table.Cell textAlign="center">
        <Button
          onClick={() => props.addFavorite(props.coin)}
          color={props.coin.favorite ? 'google plus' : 'twitter'}
          icon={props.coin.favorite ? 'heart' : 'heart outline'}
        />
      </Table.Cell>
    </Table.Row>
  );
}

CoinRow.propTypes = {
  coin: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired
};
