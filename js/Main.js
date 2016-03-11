import React, {PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

import {cyan500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import themeVars from '../variables.json';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const SelectableList = SelectableContainerEnhance(List);

console.log(themeVars.FeedBack1);
console.log(cyan500);
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: themeVars.FeedBack1,
    primary2Color: cyan500,
    primary3Color: cyan500,
    accent1Color: cyan500,
    accent2Color: cyan500,
    accent3Color: cyan500,
    textColor: themeVars.PrimaryApp1,
    alternateTextColor: cyan500,
    canvasColor: cyan500,
    borderColor: cyan500,
    disabledColor: cyan500,
    pickerHeaderColor: cyan500,
    clockCircleColor: cyan500,
    shadowColor: cyan500,
  },
  leftNav: {
    color: themeVars.PrimaryApp3
  },
  menu: {
    backgroundColor: themeVars.PrimaryApp3,
    containerBackgroundColor: themeVars.PrimaryApp3
  },
  paper: {
    color: themeVars.PrimaryApp3,
    backgroundColor: themeVars.PrimaryApp3
  }
});

const sampleJSON = [
  {
    "name": "Recent Items",
    "subItems": [
      {
        "name": "Pythons"
      },
      {
        "name": "Penguins"
      }
    ]
  },
  {
    "name": "Dashboard"
  },
  {
    "name": "Animals",
    "subItems": [
      {
        "name": "Puppies"
      },
      {
        "name": "Parakeets"
      },
      {
        "name": "Pythons"
      },
      {
        "name": "Piranhas"
      },
      {
        "name": "Peacocks"
      },
      {
        "name": "Penguins"
      }
    ]
  },
  {
    "name": "Mordant"
  },
  {
    "name": "All Pages"
  }
];

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(e) {
      e.preventDefault();
      console.log("Clicked!");
      this.setState({open: !this.state.open});
  }

onRequestChangeList(e,routepath) {
  console.log("Inside onRequestChangeList");
  this.setState({open: !this.state.open});
}

  render(){
    let me = this,
    getSubItems = (subItems) => {
        if(!subItems) return null;
        return subItems.map(function(subItem, key) {
            let subName = subItem.name,
                subKey  = 'sub' + key,
                value = subItem.value;
            //if(EnableConsoleLog) console.log('subName: ', subName);
            return (<ListItem
                key={subKey}
                primaryText={subName}
                value = {subItem.value}
            />)
        });
},
    menuItems = sampleJSON.map(function(menuItem, key){
          let name     = menuItem.name,
          subItems = menuItem.subItems || [];
          //if(EnableConsoleLog) console.log('name: ', name);
          return (<ListItem
              key={key}
              primaryText={name}
              primaryTogglesNestedList={true}
              nestedItems={getSubItems(subItems)}
          />);
    });
    return(
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
      <RaisedButton
        label="Open LeftNav"
        onTouchTap={me.handleToggle.bind(me)}
      />
      </MuiThemeProvider>
  <MuiThemeProvider muiTheme={muiTheme}>
      <LeftNav
          ref="leftNav"
          docked={false}
          open={me.state.open}
      >
      <SelectableList
          valueLink={{value: "test", requestChange: me.onRequestChangeList.bind(me)}}
      >
          {menuItems}
      </SelectableList>
      </LeftNav>
        </MuiThemeProvider>
      </div>
    );
  }
};

export default Main;
