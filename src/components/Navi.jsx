import React from 'react'
import LibLogo from '../assets/img/navLogo.png'
import '../assets/styles/navi.scss'

const Navi = ({kategoriler,setsecilenKategori}) => {
  return (

      <nav>
        <div className='brand'>
          <img src={LibLogo} alt="logo" />
          <h3>Boost-Online-6 Lib</h3>
        </div>
        <ul>
          {
            kategoriler.map(item=>
              <li onClick={(e)=>setsecilenKategori(e.target.innerText) } key={item.id}>{item.kategoriAdi}</li>
              )
          }
        </ul>
      </nav>
    
   
  )
}

export default Navi