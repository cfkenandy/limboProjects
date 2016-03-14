import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
  height: 40,
  width: 40,
  marginLeft: 5,
  marginTop: 5

//  marginRight: 24,
};
// <path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0z"/>
const HomeIcon = (props) => (
  <SvgIcon {...props}>
 <path d="M15.5,10c0,0.4-0.3,0.8-0.8,0.8H2.3c-0.4,0-0.8-0.3-0.8-0.8V2.3c0-0.4,0.3-0.8,0.8-0.8h12.4 c0.4,0,0.8,0.3,0.8,0.8V10z M14.7,0H2.3C1,0,0,1,0,2.3V10c0,1.3,1,2.3,2.3,2.3h5.4v1.5H5.4c-0.4,0-0.8,0.3-0.8,0.8 c0,0.4,0.3,0.8,0.8,0.8h6.2c0.4,0,0.8-0.3,0.8-0.8c0-0.4-0.3-0.8-0.8-0.8H9.3v-1.5h5.4c1.3,0,2.3-1,2.3-2.3V2.3C17,1,16,0,14.7,0z"/>  </SvgIcon>
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
