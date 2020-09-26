import React from 'react';
import { ReactLiquid } from 'react-liquid';


class LiquidTest extends React.Component {
  
  render(){
    const template = 'Hello, {{ name }}'
    const data = {
      name: 'Nikola'
    }
    return <ReactLiquid template={template} data={data}></ReactLiquid>
  }
}

export default LiquidTest;