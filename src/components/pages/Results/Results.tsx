import React, {useEffect} from 'react';
import styles from './Results.scss';
import {useAppDispatch} from '@src/index';
import {getLeaderBoard} from '@src/components/pages/Results/actions';
import {useLeaderBordInfo} from '@src/components/pages/Results/selectors';
import NotGameWrap from '@src/components/elements/NotGameWrap';

const byField = (field: string) => (
    (a: Record<string, string | number>, b: Record<string, string | number>) =>
        (a[field] > b[field] ? -1 : 1)
);

const Results = () => {
    const dispatch = useAppDispatch();

    const {data: list} = useLeaderBordInfo();

    useEffect(()=>{
        dispatch(getLeaderBoard());
    },[]);


    return (
        <NotGameWrap titlePage={'High-Scores'}>
            <table className={styles.highScoresTable}>
                <tbody>{list && list
                    .sort(byField('aucklandScope'))
                    .map((item, i) => (
                        <tr
                            key={i}
                            className={styles.scoreLine}
                        >
                            <td className={styles.userRange}>{i++}</td>
                            <td className={styles.userLogin}>{item.login}</td>
                            <td className={styles.userScore}>{item.aucklandScope}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </NotGameWrap>
    );

};
export default Results;
