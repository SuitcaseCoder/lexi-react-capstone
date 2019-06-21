import React from 'react';
import NavBar from './navbar.js';
import NewWordForm from './new-word-form';
// import { NewWordForm } from './new-word-form.js';

export default function CreateNewWord(){
    return (
        <div>
        <div>
            <h1>also working</h1>
            <NavBar />
        </div>
        <div>
            <NewWordForm />
        </div>
        </div>
    );
}