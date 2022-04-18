import React, {FC, FormEvent} from 'react';
import Button from '../Buttons/Button';
import styles from './Form.scss';

type FormProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>)=>void;
    submitTitle: string;
    errorText?: string;
}

const Form:FC<FormProps> = ({handleSubmit, children, errorText, submitTitle})=>(
    <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputs}>
            {children}
        </div>
        {errorText && (
            <div className={styles.errors}>{errorText}</div>
        )}
        <Button
            buttonType={'submit'}
            buttonTitle={submitTitle}
        />
    </form>
);
export default Form;
