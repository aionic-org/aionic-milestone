/* eslint-disable react/no-array-index-key */
import React from 'react';

import './Table.scss';

const Table = (props) => {
  const { columns, rowData } = props;

  return (
    <div className="Table">
      <table className="table table-striped">
        <thead>
          <tr>
            {columns.map((col) => (
              <th scope="col">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((data, i) => (
            <tr key={i}>
              {columns.map((col, k) => (
                <td key={k}>{String(data[col])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  columns: []
};

export default Table;
