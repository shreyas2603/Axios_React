import React from 'react';
import Row from './Row';

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
