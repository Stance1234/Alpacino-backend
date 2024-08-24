import React from "react";
type IconBadgeProps = {
    variant?: "primary" | "danger" | "success" | "warning" | "ghost" | "default" | "disabled";
} & React.HTMLAttributes<HTMLDivElement>;
declare const IconBadge: React.FC<IconBadgeProps>;
export default IconBadge;
