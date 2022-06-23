import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen, getByText} from '@testing-library/react';
import Main from 'src/client/pages/Main'
import SignIn from 'src/client/pages/Auth/SignIn'
import {Provider} from 'react-redux';
import {configureStore} from '../core/store';
import {getInitialState} from '../core/store/initialState';
import {BrowserRouter} from 'react-router-dom';
import {waitFor} from '@babel/core/lib/gensync-utils/async';


test('to find proper text on main page', async () => {
    const {store} = configureStore(getInitialState())
    render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>)

    await waitFor(() => {
        expect(getByText('Start Game')).toBeInTheDocument()
    })
})

test('to find proper validation error on login field', async () => {
    const {store} = configureStore(getInitialState())
    render(<Provider store={store}><BrowserRouter><SignIn /></BrowserRouter></Provider>)

    fireEvent.change(screen.getByLabelText(/login/i), {
        target: {value: 'ds'},
    })
    fireEvent.blur(screen.getByLabelText(/login/i))

    await waitFor(() => {
        expect(getByText('3-20 characters, latin, no spaces (use "-" or "_" instead)')).toBeInTheDocument()
    })

})

test('to find proper validation error on password field', async () => {
    const {store} = configureStore(getInitialState())
    render(<Provider store={store}><BrowserRouter><SignIn /></BrowserRouter></Provider>)

    fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'ds'},
    })
    fireEvent.blur(screen.getByLabelText(/password/i))

    await waitFor(() => {
        expect(getByText('8-40 characters, at least one capital letter and one number')).toBeInTheDocument()
    })
})
