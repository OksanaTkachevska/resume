import s  from "./s.module.css";

export function AsideLeftContent() {
  return (
    <>
      <div class="Contacts_block">
        <h2 class="left_block_h2">Contacts</h2>
        <div>
          <ul className={s.orangePunkt}>
            <li className={s.skill_item}>
              <span className={s.skill_category}>tel.:</span>
              <a href="tel:+38011111125">
                <span class={s.skill_list}> + 38 011212121333</span>
              </a>
            </li>
            <li className={s.skill_item}>
              <span className={s.skill_category}>email:</span>
              <a href="mailto:Oksana@gmail.com">
                <span class={s.skill_list}>Oksana@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={s.Tech_Skills_block}>
        <h2 className={s.left_block_h2}>Tech Skills</h2>
        <ul className={s.orangePunkt}>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Frontend:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>HTML5</span>
              <span className={s.skill_list}>CSS3</span>
              <span className={s.skill_list}>SASS</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Languages:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>JavaScript</span>
              <span className={s.skill_list}>TypeScript</span>
              <span className={s.skill_list}>C++</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Frameworks:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>React</span>
              <span className={s.skill_list}>ReactNative</span>
              <span className={s.skill_list}>Next.js</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Runtime:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>Node.js</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Databases:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>PostgreSQL</span>
              <span className={s.skill_list}>MongoDB</span>
              <span className={s.skill_list}>MariaDB</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>VCS:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>GIT (GitHub, GitLab)</span>
            </span>
          </li>
          <li className={s.skill_item}>
            <span className={s.skill_category}>Build:</span>
            <span className={s.skill_group}>
              <span className={s.skill_list}>WebPack</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="Soft_Skills_block">
        <h2 class="left_block_h2">Soft Skills</h2>
        <ul className={s.orangePunkt}>
          <li>
            <span class="skills-text">Scrum</span>
          </li>
          <li>
            <span class="skills-text">Agile</span>
          </li>
          <li>
            <span class="skills-text">GTD</span>
          </li>
          <li>
            <span class="skills-text">Teamwork</span>
          </li>
        </ul>
      </div>
    </>
  );
}
