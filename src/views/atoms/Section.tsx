import { ReactNode } from "react";

function Section({ id, className, style, children }: SectionProps) {
    return (
        <section id={id} className={className} style={style}>
            {children}
        </section>
    )
}

export default Section;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}