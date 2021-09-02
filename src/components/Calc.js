import React from 'react'
import { Redirect } from 'react-router-dom';

import Basic from './calc/Basic';
import Advanced from './calc/Advanced';
import Programmer from './calc/Programmer';

export default function Calc(props) {
  if (props.match.params.type === 'basic') {
    return <Basic />
  } else if (props.match.params.type === 'advanced') {
    return <Advanced />
  } else if (props.match.params.type === 'programmer') {
    return <Programmer />
  } else {
    return <Redirect to="/" />
  }
}
