import React from 'react';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SimpleCRUD from '../SimpleCRUD.js';

configure({ adapter: new Adapter() });

describe("Simple CRUD UI", () => {
    it("renders without crashing", () =>{
        let SimpleCrud = shallow(<SimpleCRUD />);
    });
});