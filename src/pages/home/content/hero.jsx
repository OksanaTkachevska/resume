//import Image from "next/image";
import s from "./s.module.css";

export function HeroContent() {
    return (
      <div className={s.heroWrapper}>
        <div className={s.heroImage}>
          <img
            src="/Oksana.jpg" // загруженное фото, положи его в public/
            alt="Oksana Tkachevska"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className={s.heroText}>
          <h1>Оксана Ткачевская</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Я — универсальный IT-специалист, который способен самостоятельно
            создавать весь продукт, от интерфейса до серверной части и баз
            данных. Работаю как с фронтендом (видимой частью приложения для
            пользователя), так и с бэкендом (серверной логикой), что позволяет
            мне полностью реализовывать веб-сервисы и приложения.
          </p>
        </div>
      </div>
    );
}
