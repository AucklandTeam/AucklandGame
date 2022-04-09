import React, {useEffect, useImperativeHandle, useState, forwardRef, useCallback, FC, ReactPortal} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.scss';

const modalElement = document.getElementById('modalWrap') as HTMLElement;

export function Modal({ children, fade = false, defaultOpened = false }, ref): ReactPortal {
    const [isOpen, setIsOpen] = useState(defaultOpened);

    const close = useCallback(() => setIsOpen(false), []);

    useImperativeHandle(
        ref,
        () => ({
            open: () => setIsOpen(true),
            close,
        }),
        [close],
    );

    const handleEscape = useCallback(
        event => {
            if (event.keyCode === 27) close();
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false);
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        };
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? (
            <div className={`${styles.modal} ${fade ? styles.modalFade : ''}`}>
                <div className={styles.modalOverlay} onClick={close}/>
                <span role="button" className={styles.modalClose} aria-label="close" onClick={close}>x</span>
                <div className={styles.modalBody}>{ children }</div>
            </div>
        ) : null,
        modalElement,
    );
}

export default forwardRef(Modal);
