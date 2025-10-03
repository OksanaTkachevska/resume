import { Header } from "../components/structure/header/header.jsx";
import { Main } from "../components/structure/main/main.jsx";
import { ErrorFeedbackForm } from "../components/func/ErrorFeedbackForm.jsx";
import { Footer } from "../components/structure/footer/footer.jsx";
import { Container } from "../components/structure/container/container.jsx";

export function NotFound() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <Container>
       

      <ErrorFeedbackForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}

// Вспомогательные стили (для быстрого старта, лучше использовать CSS-модули)
const styles = {
  main: {
    flexGrow: 1,
    backgroundImage: "url('/1280k.jpg')",
  },
  left: {
    textAlign: "right",
    width: "30%",
  },
  right: {
    textAlign: "left",
    width: "30%",
    
  },

};
