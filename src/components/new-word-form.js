import React from 'react';
import {reduxForm, Field} from 'redux-form';

// export class NewWordForm extends React.Component {
    // onSubmit(values){
    //     console.log(values);
    // }

    // render() {

export default function NewWordForm() {
        return (
            <div>
            <h1>wow! it works!</h1>
            <form class="new-word-form">
                <label htmlFor="new-word">Create New Word</label>
                <Field name="new-word" id="new-word" type="text" component="input" />
                
                <label htmlFor="definition">My Definition</label>
                <Field name="definition" id="definition" type="text" component="input" />

                
                <div class="word-buttons" class="word-details">
                    <input class="word-button" type="submit" value="Save" name="save"/>
                    <input class="word-button" type="submit" value="Edit" name="edit"/>
                    <input class="word-button" type="submit" value="Delete" name="delete"/>
                </div>
            </form>
            </div>
        )
    // }
}

//do I export the above or export the below? #confused
// </input>
// export default reduxForm({
//     form: 'new-word'
// })(NewWordForm);