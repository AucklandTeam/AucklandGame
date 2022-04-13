import React, {FC} from 'react';
import './Headings.scss';
import {HeadingProps} from './types';

const Heading1:FC<HeadingProps> = ({ headingTitle }) => {
    return <h1>{ headingTitle }</h1>;
};

export default Heading1;

