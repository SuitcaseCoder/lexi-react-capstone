import React from 'react';
import './navbar.css';

export default function NavBar() {
    // render() {
    //     const links = props.links.map((link, index)=> (
    //         <li>
    //             <a href={link.href}>
    //                 {link.text}
    //             </a>
    //         </li>
    //     ));

        return (
            <nav role="navigation" class="nav">
                <h4>hey nav bar here</h4>
                <ul class="nav-link" id="nav-ul">
                {/* {links} */}
                </ul>
            </nav>
        )
    // }
}