import React from 'react';
import './DisplayOptions.scss';

const DisplayOptions = props =>  {

  const {  options, playerHandle } = props;

  const elems = options.map(option =>
    <button
      key={`${option.type}-${playerHandle}`}
      className={`btn ${option.type.toLowerCase()}`}
      onClick={option.action}
    >{option.type}</button>);

  return (
    <div className="display-options-wrapper">
      { elems }
    </div>
  );
}

export default DisplayOptions;
