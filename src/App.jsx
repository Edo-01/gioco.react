import Tela from './components/Tela';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from 'react';
import frutto1 from './assets/img/frutta/frutto1.png';
import frutto2 from './assets/img/frutta/frutto2.png';
import frutto3 from './assets/img/frutta/frutto3.png';
import frutto4 from './assets/img/frutta/frutto4.png';
import frutto5 from './assets/img/frutta/frutto5.png';
import frutto6 from './assets/img/frutta/frutto6.png';
import frutto7 from './assets/img/frutta/frutto7.png';
import frutto8 from './assets/img/frutta/frutto8.png';
import frutto9 from './assets/img/frutta/frutto9.png';
import frutto10 from './assets/img/frutta/frutto10.png';
import frutto11 from './assets/img/frutta/frutto11.png';

const fruttaImg = [
  frutto1,
  frutto2,
  frutto3,
  frutto4,
  frutto5,
  frutto6,
  frutto7,
  frutto8,
  frutto9,
  frutto10,
  frutto11,
];

function App() {
  const [oggetti, setOggetti] = useState([]);
  const [inCorso, setInCorso] = useState(false);
  const [score, setScore] = useState(0);
  const [loose, setLoose] = useState(false);

  let timerRef = useRef(null);

  const eliminaOggetto = (parID) => {
    setOggetti((prec) => {
      return prec.filter((obj) => {
        return obj.id !== parID;
      });
    });
    setScore((prec) => prec + 10);
  };
  const avviaGame = () => {
    setInCorso(true);
    timerRef.current = setInterval(() => {
      console.log(fruttaImg[+(Math.random() * 9).toFixed(0)]);
      setOggetti((prec) => [
        ...prec,
        {
          id: `ID_${Date.now()}_${(Math.random() * 1000).toFixed(0)}`,
          posizione: {
            x: +(Math.random() * 300).toFixed(0),
            y: 500,
          },
          img: `url(${fruttaImg[+(Math.random() * 9).toFixed(0)]})`,
        },
      ]);
      setOggetti((precObj) =>
        precObj.map((obj) => {
          if (obj.posizione.y < 1) {
            setLoose(true);
            return obj;
          } else {
            return {
              ...obj,
              posizione: {
                ...obj.posizione,
                y: obj.posizione.y - 40,
              },
            };
          }
        })
      );
    }, 450);
  };
  const restart = () => {
    setOggetti([]);
    setScore(0);
    setLoose(false);
  };
  const abbandona = () => {
    clearInterval(timerRef.current);
    setOggetti([]);
    setScore(0);
    setInCorso(false);
    setLoose(false);
  };

  return (
    <main className="h-screen overflow-hidden">
      <Header
        avviaGame={avviaGame}
        inCorso={inCorso}
        restart={restart}
        score={score}
        abbandona={abbandona}
      />
      <Tela oggetti={oggetti} eliminaOggetto={eliminaOggetto} loose={loose} />
      <Footer />
    </main>
  );
}

export default App;
