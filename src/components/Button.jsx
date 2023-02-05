import React from 'react'

const Button = ({title,classStyle}) => {
  return <p className={`${classStyle}`}>{title}</p>;
}

export default Button