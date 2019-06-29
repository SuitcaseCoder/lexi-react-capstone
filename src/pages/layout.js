import React from "react";
// import { Link } from "react-router-dom";

import NavBar from '../components/navbar';

export default class Layout extends React.Component{

    render() {
        return (
            <div>
                <NavBar />
                {/* <NavBar  location={this.props.children} /> */}
            </div>
        )
    }
}