import React from "react";
// import { Link } from "react-router-dom";
import NavBar from '../components/navbar';

import '../components/layout.css';

export default class Layout extends React.Component{

        render() {
            return (
                <div className="backgroundimg">
                    <NavBar />
                    {/* <Component  location={this.props.children} /> */}
                </div>
            )
        }
        
    
}