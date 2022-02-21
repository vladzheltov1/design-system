import styled from "styled-components";
import { ButtonAppearance } from ".";
import design from "../../utils/_design";

interface ButtonColors {
    [key: ButtonAppearance]: any
}

const buttonColors: ButtonColors = {
    primary: design.color_primary,
    secondary: design.color_secondary,
    success: design.color_success,
    warning: design.color_warning,
    danger: design.color_danger,
    dark: design.color_gray_18,
}

export const ButtonStyled = styled.button`

    // Default properties

    border: none;
    padding: 10px 22px;
    color: ${design.color_gray_0};
    font-size: 14px;
    border-radius: 5px;
    transition-duration: 0.2s;
    font-weight: bold;
    box-sizing: border-box;

    // Ghost 

    ${props => props.ghost === true && `
        background: ${design.color_gray_0} !important;
        color: ${design.color_text};
        box-shadow: inset 0px 0px 0px 2px ${buttonColors[props.appearance]};

        &:hover{
            background: ${buttonColors[props.appearance]} !important;
            color: ${design.color_gray_0};
        }
    `}

    // Appearance

    ${props => `
        background: ${buttonColors[props.appearance]};
    `}

    // Disabled component style

    ${props => props.disabled === true && `
        cursor: not-allowed;
        opacity: 0.8;
    `}

    // Style onHover (if enabled)

    ${props => props.disabled !== true && `
        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }
    `}
`;