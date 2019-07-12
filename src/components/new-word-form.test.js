import React from 'react';
import {shallow, mount} from 'enzyme';

import NewWordForm from './new-word-form';

describe('<NewWordForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewWordForm />);
    });

    it('Should fire the handleNewWordSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<NewWord onSubmit={callback} />);
        const value = 'Foobar';
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

});