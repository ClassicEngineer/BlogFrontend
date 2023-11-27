import React from 'react';
import classes from './ModalView.module.css';

const ModalView = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalView;
