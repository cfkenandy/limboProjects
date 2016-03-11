import React from 'react';

import '../scss/sayerStyle.scss';
import '../fonts/myrProRegular.scss';
import '../fonts/myrProSemiBold.scss';



class HelloSayer extends React.Component{
  render(){
    return <div className="header">
         <div className="header-brand">
             <h1>Hello {this.props.name}</h1>
             <p class="b1">This old fox jumped over everyone</p>
             <p class="b2">This old fox jumped over everyone</p>

         </div>
         <div className="header-menu">
         </div>
     </div>

  }
}

export default HelloSayer;
