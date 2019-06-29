import React from "react";
// import { Link } from "react-router-dom";

import NavBar from '../components/navbar';

export default class Layout extends React.Component{

    render() {
        const {location} = this.props;
        
        return (
            <div>
                Layout Page
                {/* {this.props.children} */}
                <NavBar  location = {location} />
            </div>
        )
    }
}