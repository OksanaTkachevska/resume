import s from "../../s.module.css";

export function AsideRight({children, title}) {
    return (
      <aside className={s.asideRight}>
        <h2>{title}</h2>
        {children}
      </aside>
    );
}