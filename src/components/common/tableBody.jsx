import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, itemIdProperty, column) => {
    return item[itemIdProperty] + (column.path || column.key);
  };

  render() {
    const { itemIdProperty } = this.props;
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[itemIdProperty]}>
            {columns.map(column => (
              <td key={this.createKey(item, itemIdProperty, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  itemIdProperty: "_id"
};

export default TableBody;
