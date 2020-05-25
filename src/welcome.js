import React from 'react';
import ReactDOM from 'react-dom';

let element = (
  <div>
    <Welcome name="Siddharth"/>
    <Welcome name="Chirag"/>
    <Welcome name="Saideep"/>
    <Welcome name="Rashida"/>
    <Welcome name="Manasvi"/>
  </div>);

function Welcome(props)
{
  return <h1>Hello {props.name} </h1>
}

ReactDOM.render(
    element,
    document.getElementById('root')
  );