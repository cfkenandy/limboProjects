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

 <path  d="M9,8.3c-0.8,0-1.5-0.7-1.5-1.5S8.2,5.2,9,5.2s1.5,0.7,1.5,1.5S9.8,8.3,9,8.3z M9,3.8c-1.7,0-3,1.3-3,3 s1.3,3,3,3c1.7,0,3-1.3,3-3S10.7,3.8,9,3.8z M9,12c-4,0-6.5-3.7-7.3-5.2C2.5,5.3,5,1.5,9,1.5c4,0,6.5,3.7,7.3,5.2 C15.5,8.3,13,12,9,12z M9,0C3,0,0,6.8,0,6.8s3,6.7,9,6.7s9-6.8,9-6.8S15,0,9,0z"/>  </SvgIcon>
);

const Cart = () => (
  <div>
    <HomeIcon style={iconStyles} color={themeVars.PrimaryApp1} hoverColor={themeVars.IconColor2} />
  </div>
);

export default Cart;
