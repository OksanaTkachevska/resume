import React, { useState } from "react";

// Замените этот адрес на реальный адрес вашей службы поддержки
const SUPPORT_EMAIL = "TkachAndrey@i.ua";

export const ErrorFeedbackForm = ({ pageUrl }) => {
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setIsError(false);

    // 1. Сбор данных
    const feedbackData = {
      description,
      contact,
      pageUrl: pageUrl || window.location.href, // URL, на котором произошла ошибка
    };

    // 2. Имитация отправки данных
    // В реальном приложении здесь должен быть вызов API (fetch/axios)
    // на ваш сервер, который отправит это письмо вам.

    console.log("Данные для отправки:", feedbackData);

    // --- Реальная логика отправки должна быть здесь ---
    // Пример:
    // fetch('/api/send-feedback', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(feedbackData),
    // })
    // .then(response => {
    //    if (response.ok) {
    //       setIsSent(true);
    //    } else {
    //       setIsError(true);
    //    }
    // })
    // .catch(() => setIsError(true));
    // ---------------------------------------------------

    // В демо-режиме просто устанавливаем успех через 1 секунду:
    setTimeout(() => {
      setIsSent(true);
      setDescription("");
      setContact("");
    }, 1000);
  };

  if (isSent) {
    return (
      <div style={styles.successMessage}>
        <p>
          ✅ Спасибо! Мы получили ваше сообщение и уже проверяем, куда пропала
          эта страница.
        </p>
        <p>Мы ценим вашу помощь в улучшении сайта!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Сообщить о пропаже страницы</h2>
      <p>
        Похоже, вы наткнулись на неработающую ссылку. Помогите нам исправить
        это!
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>
            Что вы искали или откуда пришли? (Максимум 500 символов)*
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="500"
            required
            style={styles.textarea}
            rows="4"
            placeholder="Я нажал на ссылку в статье про..."
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="contact" style={styles.label}>
            Ваш email (на случай, если понадобится уточнение)
          </label>
          <input
            id="contact"
            type="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={styles.input}
            placeholder={`(необязательно, но полезно)`}
          />
        </div>

        {isError && (
          <p style={styles.errorMessage}>
            ⚠️ Ой! Что-то пошло не так при отправке. Попробуйте еще раз или
            напишите нам напрямую:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        )}

        <button type="submit" disabled={!description} style={styles.button}>
          Отправить сообщение
        </button>
      </form>
    </div>
  );
};

// Применение компонента (пример):
// <ErrorFeedbackForm pageUrl="/not-existing-page" />

//export default ErrorFeedbackForm;

// Вспомогательные стили (для быстрого старта, лучше использовать CSS-модули)
const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  successMessage: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #4CAF50",
    borderRadius: "8px",
    backgroundColor: "#e8f5e9",
    color: "#4CAF50",
    textAlign: "center",
  },
  errorMessage: {
    color: "#d32f2f",
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#ffebee",
    borderRadius: "4px",
  },
};
