import { SwitcherLanguage } from "components/SwitcherLanguage";
import { SwitcherTheme } from "components/SwitcherTheme";

export const Header = () => {
  return (
    <header className="flex items-center bg-bg justify-between gap-2 h-10 px-3 fixed z-50 top-0 left-0 right-0">
      <div className="">Elijah Pavlov</div>
      <ul className="flex gap-4">
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#experience">Опыт</a>
        </li>
        <li>
          <a href="#works">Работы</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <SwitcherTheme />
        <SwitcherLanguage />
      </div>
    </header>
  );
};
