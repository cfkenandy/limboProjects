import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import MyRawTheme from './theme/MyRawTheme.js';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class HelloButton extends React.Component{
  render(){
return (
  <div>
    <RaisedButton className="muidocs-checkbox-example" label="My Button" primary={true}/>
  </div>
)
  }
}

export default HelloButton;
