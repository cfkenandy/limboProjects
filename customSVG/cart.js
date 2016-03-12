import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
  fill:'transparent',
  stroke : themeVars.IconColor1
//  marginRight: 24,
};
// <path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0z"/>
const HomeIcon = (props) => (
  <SvgIcon {...props}>
 <path strokeWidth="1" d="M13.6,3.4l-2.6,8.5H1.7L0,3.4H13.6z M17,0h-2.6l-0.8,3.4 M2.1,16.1c0.7,0,1.3-0.6,1.3-1.3 c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3C0.9,15.6,1.4,16.1,2.1,16.1z M10.6,16.1c0.7,0,1.3-0.6,1.3-1.3 c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3C9.4,15.6,9.9,16.1,10.6,16.1z"/>  </SvgIcon>
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
