import React from "react";
export type ButtonProps = {
    variant: "primary" | "secondary" | "ghost" | "danger" | "nuclear";
    size?: "small" | "medium" | "large";
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: React.ForwardRefExoticComponent<{
    variant: "primary" | "secondary" | "ghost" | "danger" | "nuclear";
    size?: "small" | "medium" | "large";
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
