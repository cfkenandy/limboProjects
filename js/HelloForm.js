import '../scss/base.scss';



import React from 'react';
import HelloSayer from './HelloSayer';
import HelloButton from './HelloButton';

import rest from '../helloworld.json';

console.log(rest);

var test = {"a" : "b"};

console.log(test["a"]);

var HelloForm = React.createClass({
  getInitialState: function(){
    return {
      name: 'world'
    }
  },
  render: function(){
    return(<div className="hello-form">
      <input type="text" onChange={this.onChange}/>
      <HelloSayer name={this.state.name}/>
      <HelloButton/>
      </div>);
  },
  onChange: function(e){
    this.setState({
      name: e.target.value
    });
  }
})

module.exports = HelloForm;
