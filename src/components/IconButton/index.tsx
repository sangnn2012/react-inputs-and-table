import { Button } from 'react-bootstrap';
import './IconButton.scss'

interface IconButtonProps {
    label: string,
    iconSrc: string,
    theme: string,
    onButtonClick: Function
}

function IconButton(props: IconButtonProps) {
    const { label, iconSrc, theme, onButtonClick } = props;
    function handleButtonClick() {
        if (onButtonClick) {
            onButtonClick();
        }
    }
    return (
        <div className="icon-button-wrapper">
            <Button className="icon-button" variant={theme} onClick={() => {handleButtonClick()}}>
                <img className="icon" src={iconSrc} alt="icon-button" />
                <span>{ label }</span>
            </Button>
        </div>
    );
}

export default IconButton;