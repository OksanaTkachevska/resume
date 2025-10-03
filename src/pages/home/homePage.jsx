import { Hero } from "../../components/structure/main/hero/hero.jsx";
import { HeroContent } from "./content/hero.jsx";
import { MainHome } from "../../components/structure/main/mainHome.jsx";
import { Main } from "../../components/structure/main/main.jsx";
import { Section } from "../../components/structure/main/sections/section.jsx";
import { Article } from "../../components/structure/main/article/artice.jsx";
import { Article1 } from "./content/articleContent1.jsx";
import { Article2Content } from "./content/articleContent2.jsx";
import { Article3Content } from "./content/articleContent3.jsx";
import { Article4Content } from "./content/articleContent4.jsx";
import { Article5Content } from "./content/articleContent5.jsx";
import { AsideLeft } from "../../components/structure/main/aside/asideL.jsx";
import { AsideRight } from "../../components/structure/main/aside/asideR.jsx";
import { Footer } from "../../components/structure/footer/footer.jsx";
import { Header } from "../../components/structure/header/header.jsx";

export function HomePage() {
  return (
    <>
    <Header />
      <MainHome title="Home Page">
        <Hero>
          <HeroContent />
        </Hero>
        <Main>
          <AsideLeft title={"Меню"}>
            <ul>
              <li>
                <a href="#about">Навыки и компетенции</a>
              </li>
              <li>
                <a href="#projects">Опыт и проекты</a>
              </li>
              <li>
                <a href="#skills">Творческие проекты</a>
              </li>
              <li>
                <a href="#contact">Личные качества</a>
              </li>
              <li>
                <a href="#contact">Цели и планы на будущее</a>
              </li>
            </ul>
          </AsideLeft>
          <Section title={"Обо мне"}>
            <Article title="Навыки и компетенции">
              <Article1 />
            </Article>
            <Article title="Опыт и проекты">
              <Article2Content />
            </Article>
            <Article title="Творческие проекты">
              <Article3Content />
            </Article>
            <Article title="Личные качества">
              <Article4Content />
            </Article>
            <Article title="Цели и планы на будущее">
              <Article5Content />
            </Article>
          </Section>

          <AsideRight title={"Интересы"}>
            <ul>
              <li>3D-печать и моделирование</li>
              <li>Умный дом</li>
              <li>Научная фантастика</li>
              <li>Arduino проекты</li>
            </ul>
          </AsideRight>
        </Main>
      </MainHome>
      <Footer />
    </>
  );
}
