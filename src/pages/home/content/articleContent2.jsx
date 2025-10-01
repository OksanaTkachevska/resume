import s from "./s.module.css";

export function Article2Content() {
  return (
    <div>
      <ul className={s.list}>
        <li>
          Система умного дома (сервер, веб-интерфейс, умные розетки,
          Telegram/Twitter-боты)
        </li>
        <li>
          Arduino-проекты (ESP8266, уведомления о появлении электричества,
          датчики температуры)
        </li>
        <li>Сервисное обслуживание оргтехники и котлов</li>
      </ul>
    </div>
  );
}
