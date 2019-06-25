import React from 'react';
import NavBar from './navbar';

export default function SignUp(){
    return (
        <div>
            <NavBar />
        <div>
            <h2>Sign Up for Lexi</h2>
            <form>
                <label>Email</label>
                <field>Email</field>

                <label>Password</label>
                <field>Password</field>

                <button>Sign Up</button>
            </form>
        </div>
        </div>
    )
}