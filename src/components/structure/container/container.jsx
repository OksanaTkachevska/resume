import s from '../../structure/s.module.css';   

export function Container({children}) {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
}
