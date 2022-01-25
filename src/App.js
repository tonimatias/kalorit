import { useState } from 'react';
import './App.css';

function App() {
  const [paino, setPaino] = useState(0);
  const [intensiteetti, setIntensiteetti] = useState(0);
  const [sukupuoli, setSukupuoli] = useState("mies");
  const [tulos, setTulos] = useState(0);

  const laske = () => {
    let kalorit = 0;
    if (sukupuoli === 'mies') {
      kalorit =(879 + 10.2 * paino) * intensiteetti;
    } else {
      kalorit =(795 + 7.18 * paino) * intensiteetti;
    }
    setTulos(kalorit);
  }
  

  // function laske(e) {
  //   //e.preventdefault();
  //   let kalorit = 0;
  //   if (sukupuoli === 'mies') {
  //     kalorit =(879 + 10.2 * paino) * intensiteetti;
  //   } else {
  //     kalorit =(795 + 7.18 * paino) * intensiteetti;
  //   }
  //   setTulos(kalorit);
  // }



  return (
    /* onSubmit={laske} */
   <form >
     <h3>Laske kaloreiden kulutus</h3>
     <div>
     <label>Paino</label>
     <input type="number" value={paino} onChange={e => setPaino(e.target.value)}/>
     </div>
     <div>
       <label>Intensiteetti</label>
       <select onChange={e => setIntensiteetti(e.target.value)}>
         <option value="1.3">Kevyt</option>
         <option value="1.5">Tavallinen</option>
         <option value="1.7">Kohtuullinen</option>
         <option value="2">Kova</option>
         <option value="2.2">Erittäin kova</option>
       </select>
     </div>
     <div>
       <label>Sukupuoli</label>
       <label><input type="radio" name='sukupuoli' value="mies" defaultChecked onChange={e => setSukupuoli(e.target.value)}/>Mies </label>
       <label><input type="radio" name='sukupuoli' value="nainen" onChange={e => setSukupuoli(e.target.value)}/>Nainen </label>
     </div>
     <div>
       <label>Kalorit: </label>
       <output>{tulos.toFixed(0)}</output>
     </div>
     <button type='button' onClick={laske}>Laske</button>
   </form>
  );
}

export default App;
