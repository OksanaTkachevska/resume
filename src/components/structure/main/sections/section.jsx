import s from "../../s.module.css";

export function Section({children, title}) {
    return (
        <section className={s.section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
