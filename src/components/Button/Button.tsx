import React, { ReactNode } from "react";
import { ButtonStyled } from "./_button.styled";

export type ButtonAppearance =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "dark";

export interface IButtonProps {
    /**
     * Текст внутри кнопки
     */
    children?: ReactNode,

    /**
     * html-аттрибут у кнопки
     */
    type?: "button" | "submit" | "reset",

    /**
     * Вариация кнопки
     */
    appearance?: ButtonAppearance,

    /**
     * Визуальная вариация кнопки с белым фоном и цветной рамкой
     */
    ghost?: boolean,

    /**
     * Функция, которая будет вызвана при нажатии на кнопку
     */
    onClick?: Function,

    /**
     * Выключение кнопки. Она будет видна, но не доступна для действий пользователя
     */
    disabled?: boolean
}

export const Button: React.FC<IButtonProps> = (props) => {

    const {
        children,
        type = "button",
        appearance = "primary",
        ghost = false,
        onClick = () => void 0,
        ...restProps
    } = props;

    // const className = classNames(
    //     {
    //         [style[`button_${appearance}_ghost`]]: ghost && appearance !== "secondary",
    //     }
    // )

    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
        // <button
        //     type={type}
        //     onClick={action}
        //     {...restProps}
        // >
        //     {children}
        // </button>
    )
}