import React, {FC} from 'react';
import NotGameWrap from "../../elements/NotGameWrap/NotGameWrap";
import Heading3 from "../../elements/Headings/Heading3";

const ResultContent: FC = () => {
    return (
        <>
            <Heading3 headingTitle={'High-Scores'} />

        </>
    );
};

const Results = () => {
    return  <NotGameWrap children = { <ResultContent /> } />;
}


export default Results;
