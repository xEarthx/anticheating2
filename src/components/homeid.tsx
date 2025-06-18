import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './nav';

function Homeid() {
  const { id } = useParams(); // ดึง id จาก URL
  const { title } = useParams();

  return (
    <div>
      <Nav />
      <h1>{title}</h1>
      <h1>This is Home Page ID: {id}</h1>
    </div>
  );
}

export default Homeid;
