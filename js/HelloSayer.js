import React from 'react';
import '../scss/sayerstyle.scss';

class HelloSayer extends React.Component{
  render(){
    return <p>Hello {this.props.name}</p>
  }
}

export default HelloSayer;
