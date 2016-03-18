import React, {PropTypes} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
//import ListItem from 'material-ui/lib/lists/list-item';
import ListItem from '../customComps/itemlist';
import FontIcon from 'material-ui/lib/font-icon';
import Avatar from 'material-ui/lib/avatar';

import SvgIconExampleSimple from '../customSVG/SvgIconExampleSimple';
import Wrench from '../customSVG/wrench';
import Cart from '../customSVG/Cart';
import Monitor from '../customSVG/monitor';
import Stack from '../customSVG/Stack';
import Controls from '../customSVG/Controls';
import Eye from '../customSVG/Eye';
import Dots from '../customSVG/Dots';

import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

import {cyan500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import ActionAndroid from 'material-ui/lib/svg-icons/action/android';
import ShoppingCart from 'material-ui/lib/svg-icons/action/shopping-cart';


import '../fonts/myrProRegular.scss';
import '../fonts/myrProSemiBold.scss';
import '../fonts/myrProLight.scss';

//import '../fonts/style.scss';

import themeVars from '../variables.json';


// Tab stuff
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

//import tbz from './Tabs'


import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const SelectableList = SelectableContainerEnhance(List);

console.log(themeVars.FeedBack1);
console.log(cyan500);

// TODO: Figure out this: https://github.com/callemall/material-ui/issues/957
// TODO: http://www.kalose.net/tutorials/create-spinning-gif-image-adobe-photoshop/

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
fontFamily: 'myrProRegular, sans-serif',
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


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    backgroundColor: themeVars.PrimaryApp3
    },

  header: {
    backgroundColor: themeVars.PrimaryApp3,
    color: themeVars.PrimaryApp3
  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

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

/*
leftAvatar={
  <Avatar icon={<ShoppingCart />} />
}
*/
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
                style = {{paddingLeft: 20}}
                textColor={'#FAFAFA'}
                textHoverColor={'#0EABF4'}                



            />)
            // leftIcon={<Cart />}
        });
},
    menuItems = sampleJSON.map(function(menuItem, key){
          let name     = menuItem.name.toUpperCase(),
          subItems = menuItem.subItems || [];
          /*
          import SvgIconExampleSimple from '../customSVG/SvgIconExampleSimple';
          import Wrench from '../customSVG/wrench';
          import Cart from '../customSVG/Cart';
          import Monitor from '../customSVG/monitor';
          import Stack from '../customSVG/Stack';
          import Controls from '../customSVG/Controls';
          import Eye from '../customSVG/Eye';
          import Dots from '../customSVG/Dots';
          */

          let getIcon = (n) => {
            console.log(n);
            if(n.name){
              switch(n.name){
                case "RECENT ITEMS":
                  return <Controls/>;
                break;
                case "DASHBOARD":
                  return <Monitor/>;
                break;
                case "ANIMALS":
                  return <Stack/>;
                break;
                case "MORDANT":
                  return <Eye/>;
                break;
                case "ALL PAGES":
                  return <Dots/>;
                break;
                default:
                  console.log("Default");
                  return <Cart/>;
              }
            }
            else{
              console.log("DATA IS : Invalid");
              return null;
            }



          };
          //if(EnableConsoleLog) console.log('name: ', name);
            // <Avatar icon={<Wrench />} />
          return (<ListItem
              key={key}
              primaryText={name}
              primaryTogglesNestedList={true}
              nestedItems={getSubItems(subItems)}
              leftIcon={getIcon({name})}
              textColor={'#FAFAFA'}
              textHoverColor={'#0EABF4'}

          />);

          // leftAvatar={
          //   <Avatar icon={getIcon({name})} />
          // }
    });
    return(
      <div>


      <MuiThemeProvider muiTheme={muiTheme}>
      <RaisedButton
        label="Open LeftNav"
        onTouchTap={me.handleToggle.bind(me)}
      />
      </MuiThemeProvider>
<ActionAndroid />
<SvgIconExampleSimple/>
<Wrench/>
<Cart/>
<Monitor/>
<Stack/>
<Controls/>
<Eye/>
<Dots/>

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

        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2 style={styles.headline}>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="onActive"
            route="/home"
            onActive={handleActive}
          >
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>


      </div>
    );
  }
};

export default Main;
