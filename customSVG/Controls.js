import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
//  marginRight: 24,
};
// <path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0z"/>
const HomeIcon = (props) => (
  <SvgIcon {...props}>

 <path d="M3.3,15.5c0,0.5-0.4,0.8-0.8,0.8c-0.5,0-0.8-0.4-0.8-0.8v-3.3c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8 V15.5z M2.5,9.8C1.1,9.8,0,10.9,0,12.3v3.3C0,16.9,1.1,18,2.5,18c1.4,0,2.5-1.1,2.5-2.5v-3.3C4.9,10.9,3.8,9.8,2.5,9.8z M16.4,15.5 c0,0.5-0.4,0.8-0.8,0.8c-0.5,0-0.8-0.4-0.8-0.8V7.4c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8V15.5z M15.5,4.9 c-1.4,0-2.5,1.1-2.5,2.5v8.2c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5V7.4C18,6,16.9,4.9,15.5,4.9z M9.8,15.5 c0,0.5-0.4,0.8-0.8,0.8S8.2,16,8.2,15.5V2.5C8.2,2,8.5,1.6,9,1.6S9.8,2,9.8,2.5V15.5z M9,0C7.6,0,6.5,1.1,6.5,2.5v13.1 C6.5,16.9,7.6,18,9,18s2.5-1.1,2.5-2.5V2.5C11.5,1.1,10.4,0,9,0z"/>  </SvgIcon>
);

const Cart = () => (
  <div>
    <HomeIcon style={iconStyles} color={themeVars.IconColor1} hoverColor={themeVars.IconColor2} />
  </div>
);

export default Cart;


/*
<path fill="#F28E85" />
*/
