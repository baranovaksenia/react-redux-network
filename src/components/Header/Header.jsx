import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        scr="https://static.vecteezy.com/system/resources/thumbnails/000/561/674/small/healthpeople-41.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
