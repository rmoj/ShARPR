import React from 'react';
import { Divider, Segment } from 'semantic-ui-react/dist/commonjs';

import CoinTable from './coinTable';
import CoinFilter from './coinFilter';

const queryParams = ['_limit', '_order', '_sort', 'q', '_page'];

export default class CoinList extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      _sort: 'id',
      _page: 1,
      _limit: 10,
      q: '',
      totalCount: 0,
      direction: null,
      loading: false
    };
    this.loadData = this.loadData.bind(this);
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.onSubmitFilter = this.onSubmitFilter.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(clickedColumn) {
    const { _sort, direction } = this.state;

    if (_sort !== clickedColumn) {
      this.setState({
        _sort: clickedColumn,
        direction: 'ascending'
      });

      this.loadData({
        _sort: clickedColumn,
        _page: 1,
        _order: 'asc'
      });

      return;
    }

    this.setState({
      _sort: clickedColumn,
      _page: 1,
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    });

    this.loadData({
      _sort: clickedColumn,
      _page: 1,
      _order: direction === 'ascending' ? 'desc' : 'asc'
    });
  }

  componentDidMount() {
    this.loadData({});
  }

  onChangeLimit(event, data) {
    if (data.value !== this.state._limit) {
      this.setState({ _limit: data.value, _page: 1 });
      this.loadData({ _limit: data.value, _page: 1 });
    }
  }

  onSubmitFilter(filter) {
    if (filter !== this.state.q) {
      this.setState({ q: filter, _page: 1, loading: true });
      this.loadData({ q: filter, _page: 1 });
    }
  }

  onChangePage(page) {
    if (page !== this.state._page) {
      this.setState({ _page: page });
      this.loadData({ _page: page });
    }
  }

  addFavorite(coin) {
    coin.favorite = !coin.favorite;
    fetch(`/api/v1/coins/${coin.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coin)
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          var coins = this.state.coins.slice();
          for (var i = 0; i < coins.length; ++i) {
            if (coins[i].id === data.id) {
              coins[i] = data;
              break;
            }
          }

          this.setState({ coins: coins });
        });
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }
    });
  }

  loadData(params) {
    const current = this.state;
    queryParams.forEach(function(element) {
      if (!(element in params)) {
        params[element] = current[element];
      }
    });

    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    // Make a request without limit first to get the total number of data.
    let totalCountQuery;
    if (params.q !== '') {
      totalCountQuery = `q=${params.q}`;
    }

    fetch('/api/v1/coins?' + totalCountQuery).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ totalCount: data.length });
        });
      } else {
        // response.json().then(error => {
        console.log('Failed to load data!');
        // });
      }
      this.setState({ loading: false });
    });

    fetch('/api/v1/coins?' + query).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ coins: data });
        });
      } else {
        // response.json().then(error => {
        console.log('Failed to load data!');
        // });
      }
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div>
        <Segment>
          <CoinFilter
            filter={this.state.q}
            totalCount={this.state.totalCount}
            onSubmitFilter={this.onSubmitFilter}
            loading={this.state.loading}
          />
          <Divider />
          <CoinTable
            coins={this.state.coins}
            totalCount={this.state.totalCount}
            totalPages={Math.ceil(this.state.totalCount / this.state._limit)}
            currentPage={this.state._page}
            onChangePage={this.onChangePage}
            addFavorite={this.addFavorite}
            column={this.state._sort}
            direction={this.state.direction}
            handleSort={this.handleSort}
            onChangeLimit={this.onChangeLimit}
            limit={this.state._limit.toString()}
          />
        </Segment>
      </div>
    );
  }
}
