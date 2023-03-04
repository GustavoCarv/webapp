// import { Container } from './styles';

type ButtonProps = {
    type:  'submit' | 'reset' | 'button' | undefined;
    text: string, 
    onClickFn: () => void,
    classes: string,
}

const Button = ({type, text, onClickFn, classes}: ButtonProps) => {
  return <button type={type} onClick={onClickFn} className={classes}> {text} </button>;
}

export default Button;