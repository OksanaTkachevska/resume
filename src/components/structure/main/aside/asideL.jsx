import s from "../../s.module.css";

export function AsideLeft({children, title}) {
    return (
        <aside className={s.asideLeft}>
            <h2>{title}</h2>
            {children}
        </aside>
    );
}