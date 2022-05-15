import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from '../components/pages/Main/Main';

test('App matches snapshot', () => {
    const component = renderer.create(
        <Router>
            <Main />
        </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
