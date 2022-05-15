import React from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import SamplePage2 from './pages/SamplePage2';
import { ServerDataProvider } from './serverData';
import Main from "client/pages/Main/Main";
import Game from "client/pages/Game/Game";

interface Props {
    /** Data used in the react prerender process. Use only in the server side. */
    serverData?: unknown;
}

/** * The root react component for both client side rendering and server side rendering */
export default function App(props: Props) {

    return (
        <ServerDataProvider value={props ? props.serverData : null}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sample-page2" element={<SamplePage2 />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </ServerDataProvider>
    );

}

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    min-height: 100vh;
    display: grid;
    grid-template-areas: 
        "header  header"
        "sidebar content";
    grid-template-columns: 200px 1fr;
    grid-template-rows: 50px 1fr;

    
    div.header {
        grid-area: header;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding: 8px;
        font-size: 22px;
        background-color: #087db3;
        color: white;
    }
    div.sidebar {
        grid-area: sidebar;
        display: flex;
        flex-flow: column nowrap;
        justify-content: right;
        gap: 36px;
        padding: 16px;
        background-color: #bedceb;

        a:visited {
            text-decoration: none;
        }
    }
    div.content {
        grid-area: content;
        padding: 8px;
    }
`;




