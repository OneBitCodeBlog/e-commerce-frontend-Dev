import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../../../styles/StyledButton.module.css';

interface ButtonProps {
    icon?: IconProp,
    action?: String,
    type_button: string
}

const StyledButton: React.FC<ButtonProps> = ({icon, action, type_button}) => {
    return (
        <Button className={(type_button == "red") ? styles.red_button : styles.blue_button}>
            { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> } {action}
        </Button>
    )
}

export default StyledButton;