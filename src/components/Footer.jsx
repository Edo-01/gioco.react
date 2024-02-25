import lava from '../assets/img/lava.svg';

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${lava})` }}
      className="bg-red-600 h-[300px] bg-cover bg-center"
    ></footer>
  );
};

export default Footer;
