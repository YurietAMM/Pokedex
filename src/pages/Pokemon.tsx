import React from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = (): JSX.Element => {

  const { name } = useParams<{ name: string }>();

  return (<div>
    <h1>{name}</h1>
  </div>);
  };

export default Pokemon;