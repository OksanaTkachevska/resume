import s from "../../s.module.css";

export function Article({children, title}) {
    return (
        <article className={s.article}>
            <h3>{title}</h3>
            {children}
        </article>
    );
}
