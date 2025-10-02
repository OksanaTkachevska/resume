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
            Я — универсальный IT-специалист, работаю как с
            фронтенд (клиентской частью, видимой пользователю), так и с бэкендом
            (серверной частью и базами данных) веб-приложения. Можгу создавать 
            проекты целиком, от пользовательского интерфейса до
            серверной логики и баз данных, что делает меня ценным сотрудником для
            стартапов и проектов, требующих быстрой разработки и поддержки.
          </p>
        </div>
      </div>
    );
}
