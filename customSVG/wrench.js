import React from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';
import themeVars from '../variables.json';

const iconStyles = {
//  marginRight: 24,
};
// <path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0z"/>
const HomeIcon = (props) => (
  <SvgIcon {...props}>
 <path d="M16.6,3.6l-3.8,3.8L11,6.9l-0.6-1.7l3.9-3.9c-2.7-1.8-6.1-1.8-8.1,0.2c-1.6,1.8-2,4.4-1,6.6l-4.4,4.4 c-1.2,1.3-1.1,3.3,0.2,4.5c1.2,1.1,3.1,1.1,4.3,0l4.4-4.4c2.2,1,4.8,0.6,6.6-1C18.4,9.7,18.4,6.3,16.6,3.6z M15.3,10.6 c-1.8,1.8-4.1,1-5.9,0.2l-5.2,5.2c-0.7,0.6-1.7,0.5-2.3-0.1c-0.6-0.6-0.6-1.5,0-2.1l5.2-5.1C6.8,7.7,5.3,4.7,7.4,2.7 c1.2-1,2.8-1.4,4.2-0.8l-3,3l1.2,3.3l3.4,1.1l3-3C16.6,7.8,16.3,9.4,15.3,10.6z"/>  </SvgIcon>
);

const arc = () => (
  <div>
    <HomeIcon style={iconStyles} color={themeVars.IconColor1} hoverColor={themeVars.IconColor2} />
  </div>
);

export default arc;


/*
<path fill="#F28E85" />
*/
