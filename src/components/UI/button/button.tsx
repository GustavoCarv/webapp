import { Container } from './button-styles';

type ButtonProps = {
    type:  'submit' | 'reset' | 'button' | undefined;
    text: string, 
    onClickFn: () => void,
    classes: string,
}

const Button = ({type, text, onClickFn, classes}: ButtonProps) => {
  return <Container type={type} onClick={onClickFn} className={classes}> {text} </Container>;
}

export default Button;