import React from 'react'
import Card from './Card'
import '../assets/styles/cardlist.scss'



const CardList = ({data,kitapSil,search,cardDuzenle}) => {

  return (
    <div className='card-list'>
      {
  data.map(kitap =>
    kitap && !kitap.isDeleted && (
      (kitap.kitapAdi && kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())) ||
      (kitap.kitapYazari && kitap.kitapYazari.toLowerCase().startsWith(search.toLowerCase()))
    ) && <Card key={kitap.id} kitap={kitap} kitapSil={kitapSil} cardDuzenle={cardDuzenle}/>
  )
}
    </div>
  )
}

export default CardList