import React, {FC, FormEvent} from 'react';
import Button from '../Buttons/Button';
import styles from './Form.scss';

type FormProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>)=>void;
    submitTitle: string;
}

const Form:FC<FormProps> = ({handleSubmit, children, submitTitle})=>(
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputs}>
            {children}
        </div>
        <Button
            buttonType={'submit'}
            buttonTitle={submitTitle}
        />
    </form>
);
export default Form;
