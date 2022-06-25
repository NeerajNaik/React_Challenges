//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [theme, settheme] = useState(true)
  const handleClick = ()=>{
    settheme(!theme)
  }
  return (
    <div className={theme ? 'light':'dark'}>
      <div style={{margin:"0 12%"}} className={theme ? 'innerLight':'innerDark'}>
        <div>
        <h1 style={{textAlign:"center"}}>DARK MODE</h1>
        <button className='btnClass' onClick={handleClick}>Change</button>
        <p>Chislic pork belly turducken meatball.  
          Ball tip ham porchetta chislic, 
          alcatra swine burgdoggen picanha boudin 
          cupim tenderloin sausage turducken ground 
          round pork.  Pork chop rump salami, 
          porchetta boudin pastrami tongue cow 
          brisket burgdoggen turducken t-bone sirloin 
          prosciutto.  Shankle frankfurter drumstick
           kielbasa filet mignon bresaola prosciutto 
           capicola cupim jowl.","Strip steak sausage short 
           ribs, tenderloin chislic meatloaf flank ribeye
            meatball turkey pork chop landjaeger beef andouille.
              Leberkas cow chuck spare ribs, prosciutto picanha 
              landjaeger kielbasa pork.  Brisket short ribs
               alcatra doner filet mignon, burgdoggen andouille
                shankle hamburger.  Kevin ham hock pork loin 
                meatball, pork picanha tongue shankle.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
