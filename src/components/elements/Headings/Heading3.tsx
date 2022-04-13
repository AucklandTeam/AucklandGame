import React, {FC} from 'react';
import './Headings.scss';
import {HeadingProps} from './types';

const Heading3:FC<HeadingProps> = ({ headingTitle }) => {
    return <h3>{ headingTitle }</h3>;
};

export default Heading3;
