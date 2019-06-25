import React from 'react';
import NavBar from './navbar';

export default function Login() {
    return(
        <div>
            <NavBar />
        <div>
        <h2>Login to Lexi</h2>
        <form>
            <label>Email</label>
            <field>Email</field>

            <label>Password</label>
            <field>Password</field>

            <button>Login</button>
        </form>
        </div>
        </div>
    )
}