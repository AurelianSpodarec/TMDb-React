function Button(props:ButtonProps) {
    const {
        children,
        label = "",
        onClick,
        as = "button",
        href,
        variant = "primary",
        kind = "solid",
        type = "button",
        size = "md",
        radius = "xs",
        ref,
        disabled,
        block,
        icon,
        iconPosition,
        className,
        style,
        loading
    } = props;

    const prefix = "button";

    const Tag = `${as}` as React.ElementType;
    const content = label || children;

    return (
        <Tag 
            href={href}
            type={type}
            ref={ref}
            style={style}
            onClick={onClick}
            disabled={disabled}
            className={`
                rounded-[3px]
                ${block ? 'w-full' : ""}
                ${prefix} ${kind ? `${prefix}-${kind}` : ''} 
                ${variant ? `${prefix}-${variant}` : ''} 
                ${size ? `${prefix}-${size}` : ''}
                ${className}`.trim()
            }
        >
            <div className="inline-block">
            {content}

            {loading && 
                <svg className="inline-block animate-spin ml-2 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            }
            </div>
        </Tag>
    );
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
    ref?: any;
    label?: string;
    as?: string | "a" | "button";
    variant?: string | "primary" | "secondary" | "link" | "success" | "warning" | "danger" | "info";
    kind?: string | "solid" | "outline" | "ghost" | "subtle";
    type?: string | "submit" | "button" | "reset";
    size?: string | "md";
    radius?: string | "md";
    href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    style?: any;
    icon?: any;
    iconPosition?: any;
    loading?: any;
}
