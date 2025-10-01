import s from "./s.module.css";

export function Article1() {
  return (
    <div>
      <ul className={s.list}>
        <li>FullStack разработка (JavaScript, Node.js, React, TypeScript)</li>
        <li>Создание веб-сервисов и веб-интерфейсов</li>
        <li>Arduino, ESP8266, IoT и умный дом</li>
        <li>3D-печать и 3D-моделирование</li>
        <li>Ремонт техники и систем отопления</li>
      </ul>
    </div>
  );
}
