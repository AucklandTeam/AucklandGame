import React from 'react';
import Temp from '../Temp/Temp';
import Title from "../Title/Title";

const title = 'Title here';

const App = () => {
    return (
        <>
            <Title title={title} />
            Hello World 3
            <Temp />
        </>
    );
};
export default App;
