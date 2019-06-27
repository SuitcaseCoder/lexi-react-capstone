//------------- CREATE WORD PAGE ---------------- //

import React from 'react';
import NavBar from './navbar.js';
import NewWordForm from './new-word-form';

import './create-new-word.css';
// import { NewWordForm } from './new-word-form.js';

export default function CreateNewWord(){
    return (
        <div>
        <div>
            <NavBar />
        </div>
        <section>
            <NewWordForm />
        </section>
        </div>
    );
}