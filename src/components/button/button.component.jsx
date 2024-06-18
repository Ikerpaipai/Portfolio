import { BaseButton, FormButton, SectionButton } from "./button.styles";


export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    sectionButton: 'section-button',
    formButton: 'form-button'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.sectionButton]: SectionButton,
    [BUTTON_TYPE_CLASSES.formButton]: FormButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
const CustomButton = getButton(buttonType);
return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;