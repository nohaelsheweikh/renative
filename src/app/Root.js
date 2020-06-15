import React, { Component } from "react";
import Router from "../app/router/router";

import {StackNavigator,withNavigation} from 'react-navigation';


class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false,
            checkedSignIn: false
          };
    }

   

    render() {
        
       
            
            return <Router navigation={this.props.navigation} />;
        
    }
}

export default Root ;