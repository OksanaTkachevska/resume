import s from "../../structure/s.module.css";
import { Container } from "../container/container";

export function Main({ children, title }) {
  return (
    <main  className={s.main}>
      <h1 className={s.mainTitle}>{title}</h1>
      <Container>
        <div className={s.content}>{children}</div>
      </Container>
    </main>
  );
}
