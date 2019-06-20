import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class NewWordForm extends React.Component {
    // onSubmit(values){
    //     console.log(values);
    // }

    render() {
        return (
            <form class="new-word-form">
                <label htmlFor="new-word">Create New Word</label>
                <Field name="new-word" id="new-word" type="text" component="input" />
                
                <label htmlFor="definition">My Definition</label>
                <Field name="definition" id="definition" type="text" component="input" />

                
                <div class="word-buttons" class="word-details">
                    <input class="word-button" type="submit" value="Save" name="save">
                    <input class="word-button" type="submit" value="Edit" name="edit">
                    <input class="word-button" type="submit" value="Delete" name="delete">
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'new-word'
})(NewWordForm);