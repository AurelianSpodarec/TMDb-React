import { ReactNode } from 'react';

function Container({ id, style, size, className, children }: ContainerProps) {
    const options: any = {
        fluid: 'max-w-none',
        sm: 'max-w-sm',
        base: 'max-w-base',
        xs: 'max-w-xs',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
    };

    return (
        <div
            id={id}
            style={style}
            className={`mx-auto px-4 ${size ? `${options[size]}` : `${options["fluid"]}`} ${className}`}
        >
            {children}
        </div>
    );
}

export default Container;

interface ContainerProps {
    id?: string;
    style?: object;
    size?: string;
    className?: string;
    children: ReactNode;
}