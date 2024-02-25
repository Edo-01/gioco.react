import Oggetto from './Oggetto';
import muro from '../assets/img/muro.svg';
const Tela = ({ oggetti, eliminaOggetto, loose }) => {
  return (
    <section
      style={{ backgroundImage: `url(${muro})` }}
      className="min-h-[500px] relative overflow-hidden bg-cover bg-center bg-gray-700"
    >
      {oggetti.map((obj) => {
        return (
          <Oggetto
            key={obj.id}
            posizione={obj.posizione}
            eliminaOggetto={() => eliminaOggetto(obj.id)}
            img={obj.img}
          />
        );
      })}
      {loose ? (
        <div className="w-full h-[100%] bg-[#00000080] absolute z-10 flex justify-center items-center backdrop-blur-lg">
          <p className="text-slate-300 font-semibold text-xl">Hai perso!</p>
        </div>
      ) : null}
    </section>
  );
};

export default Tela;
