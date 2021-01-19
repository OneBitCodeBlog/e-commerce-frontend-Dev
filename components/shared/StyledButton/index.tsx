import { ButtonHTMLAttributes } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.css';

type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: IconProp;
    action?: string;
    type_button: string;
    active?: boolean;
}

const StyledButton: React.FC<ButtonProps> = ({icon, action, type_button, active = false, ...rest}) => {
    return (
        <Button 
            className={`
                ${(type_button == "red") ? styles.red_button : styles.blue_button} 
                ${active ? 'active' : ''}
            `
            }
            {...rest}
        >
            { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> } {action}
        </Button>
    )
}

export default StyledButton;