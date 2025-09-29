import s from "../../structure/s.module.css";
import { Container } from "../container/container";

export function Main({ children }) {
  return (
    <main className={s.main}>
      <Container>
        <div className={s.content}>{children}</div>
      </Container>
    </main>
  );
}
