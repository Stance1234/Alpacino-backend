import React from "react";
type BadgeProps = {
    variant: "primary" | "danger" | "success" | "warning" | "ghost" | "default" | "disabled" | "new-feature";
} & React.HTMLAttributes<HTMLDivElement>;
declare const Badge: React.FC<BadgeProps>;
export default Badge;
