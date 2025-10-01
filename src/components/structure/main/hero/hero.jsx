import { Container } from "../../container/container";

import s from "../../s.module.css";

export function Hero({ children }) {
  return (
    <section className={s.hero}>
      {/* <Container>{children}</Container> */}
      {children}
    </section>
  );
}
