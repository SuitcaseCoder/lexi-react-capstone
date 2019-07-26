//------------- CREATE WORD PAGE ---------------- //

import React from 'react';
import { Redirect } from 'react-router-dom';
import NewWordForm from '../components/new-word-form.js';

import '../components/create-new-word.css';
// import { NewWordForm } from './new-word-form.js';

export default function CreateNewWord(){
    return !localStorage.loggedIn ? (
        <Redirect to="login-page" />
        ) : (
        <div className="newworddiv">
            <NewWordForm />
        </div>
    );
}