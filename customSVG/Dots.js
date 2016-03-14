import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
  display: "inline-block",
  height: 30,
  width: 30,
  left: 20,
  margin: 12,
  position: "absolute",
  top: 0
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>

 <path d="M14.8,2.5c-0.7,0-1.2-0.5-1.2-1.2c0-0.7,0.5-1.2,1.2-1.2C15.5,0,16,0.5,16,1.2C16,1.9,15.5,2.5,14.8,2.5z M8,2.5c-0.7,0-1.2-0.5-1.2-1.2C6.8,0.5,7.3,0,8,0c0.7,0,1.2,0.5,1.2,1.2C9.2,1.9,8.7,2.5,8,2.5z M1.2,2.5C0.5,2.5,0,1.9,0,1.2 C0,0.5,0.5,0,1.2,0c0.7,0,1.2,0.5,1.2,1.2C2.5,1.9,1.9,2.5,1.2,2.5z"/>  </SvgIcon>
);

const Cart = () => (
  <div>
    <HomeIcon style={iconStyles} color={themeVars.PrimaryApp1} hoverColor={themeVars.IconColor2} />
  </div>
);

export default Cart;
