import React, {PropTypes} from 'react';

import {cyan500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import RaisedButton from 'material-ui/lib/raised-button';

import themeVars from '../variables.json';

import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: themeVars.primaryColor,
    textColor: cyan500
  },
  appBar: {
    height: 50,
  },
});

class HelloButton extends React.Component{
  render(){
return (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <RaisedButton label="My Button" primary={true}  icon={<ActionAndroid />}/>
    </MuiThemeProvider>
  </div>
)
  }
}

export default HelloButton;
