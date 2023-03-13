function Section({ id, className, style, children }:any) {
    return (
        <section id={id} className={className} style={style}>
            {children}
        </section>
    )
}

export default Section;