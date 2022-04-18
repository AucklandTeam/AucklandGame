import React, { FC } from 'react';
import Index from 'src/components/elements/NotGameWrap';
import styles from './Results.scss';

const scoreItems = [
    { userLogin: 'Gamer345', userScore: 2345678 },
    { userLogin: 'Gamer45', userScore: 235678 },
    { userLogin: 'Gamer5', userScore: 10045678 },
    { userLogin: 'Everlast', userScore: 5678 },
    { userLogin: 'Domino', userScore: 200998 },
];

function byField(field: string) {
    return (a: Record<string, string | number>, b: Record<string, string | number>) =>
        (a[field] > b[field] ? -1 : 1);
}
const ScoresLine = scoreItems.sort(byField('userScore')).map((item, i = 1) => {
    return (
        <tr
            key={i++}
            className={styles.scoreLine}
        >
            <td className={styles.userRange}>{i++}</td>
            <td className={styles.userLogin}>{item.userLogin}</td>
            <td className={styles.userScore}>{item.userScore}</td>
        </tr>
    );
});

const ResultContent: FC = () => {
    return (
        <>
            <table>
                <tbody>{ScoresLine}</tbody>
            </table>
        </>
    );
};

const Results = () => {
    return (
        <Index titlePage={'High-Scores'}>
            <ResultContent />
        </Index>
    );
};

export default Results;
