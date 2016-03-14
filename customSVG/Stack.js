import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
  height: 40,
  width: 40,
  marginLeft: 5,
  marginTop: 5

};
// <path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0z"/>
const HomeIcon = (props) => (
  <SvgIcon {...props}>

 <path d="M9,1.7l5.6,2.8L9,7.3L3.4,4.5L9,1.7z M17.9,4.6L9,0L0,4.5l8.9,4.6L17.9,4.6z M9,10.5L1.7,6.8L0,7.7l9,4.5l9-4.5 l-1.7-0.8L9,10.5z M9,13.7L1.7,10L0,10.9l9,4.5l9-4.5L16.3,10L9,13.7z"/>  </SvgIcon>
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
