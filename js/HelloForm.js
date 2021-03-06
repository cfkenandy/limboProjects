import '../scss/base.scss';

import React from 'react';
import HelloSayer from './HelloSayer';
import HelloButton from './HelloButton';
import Main from './Main';

var HelloForm = React.createClass({
  getInitialState: function(){
    return {
      name: 'world'
    }
  },
  render: function(){
    return(<div className="hello-form">
      <Main/>
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
