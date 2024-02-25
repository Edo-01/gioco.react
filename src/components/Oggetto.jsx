import { useRef, useState } from 'react';
const Oggetto = ({ posizione, eliminaOggetto, img }) => {
  const [showPoint, setShowPoint] = useState(false);
  const divRef = useRef(null);

  const cancella = () => {
    setShowPoint(true);
    divRef.current.style.backgroundImage = 'none';
    setTimeout(() => {
      eliminaOggetto();
    }, [380]);
  };
  return (
    <div
      ref={divRef}
      onClick={cancella}
      style={{
        bottom: posizione.y,
        left: posizione.x,
        backgroundImage: img,
      }}
      className="border border-red-600 bg-transparent h-[80px] w-[80px] absolute bottom-0 left-0  bg-center bg-contain bg-no-repeat"
    >
      {showPoint ? (
        <p className="absolute top-[-10px] font-semibold text-slate-100 text-[22px] z-50">
          +10
        </p>
      ) : null}
    </div>
  );
};

export default Oggetto;
