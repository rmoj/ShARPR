import React, { Component } from 'react';
import './DetailsGraph.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class DetailsGraph extends Component {
  render() {


    return (
      <div className="graphContainer">
        <ResponsiveContainer width='100%' height='80%'>
          <AreaChart
            width={320}
            height={200}
            data={this.props.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={"#00cf77"} stopOpacity={0.8} />
                <stop offset="95%" stopColor="#00cf77" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" fill='white' />
            <XAxis dataKey="priceDate" tick={{ fontSize: 12 }} stroke='grey' strokeWidth={1} />
            <YAxis type="number" domain={['auto', 'auto']} tick={{ fontSize: 12 }} stroke='grey' strokeWidth={1} />
            <Tooltip cursor={{ stroke: 'black', strokeWidth: 1 }} />
            <Area
              type="monotone"
              dataKey="price"
              stackId="1"
              // stroke="#8884d8"
              // fill="#8884d8"
              stroke='#00cf77'
              strokeWidth={2.5}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default DetailsGraph;
