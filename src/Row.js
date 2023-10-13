import React from 'react';
import Cell from './Cell';

const Row = ({ item }) => {
  return (
    <tr>
      <Cell cellData={item.id} />
      
      <Cell cellData={<img src={item.image} alt={`${item.firstName}`}/>} />
      
      <Cell cellData={item.firstName} />
      <Cell cellData={item.lastName} />
      <Cell cellData={item.gender} />
      <Cell cellData={item.email} />
      <Cell cellData={item.username} />
      <Cell cellData={item.domain} />
      <Cell cellData={item.ip} />
      <Cell cellData={item.university} />
      
    </tr>
  );
};

export default Row;
