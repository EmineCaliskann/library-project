import React from 'react'
import '../assets/styles/card.scss'
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import Book from '../assets/img/book.jpg'



const Card = ({kitap,kitapSil,cardDuzenle}) => {
  return (
            <div className='card'>
              <button onClick={()=> kitapSil(kitap.id)} className='delete'><AiOutlineDelete /></button>
              <button onClick={()=> cardDuzenle(kitap.id)}className='edit'><MdOutlineModeEdit /></button>
              <img src={kitap.kitapResmi?kitap.kitapResmi:Book} alt="kitap-kapak" />
              <div className="card-body">
                <p>{kitap.kitapAdi}</p>
                <p>Kitap Yazarı: {kitap.kitapYazari}</p>
                <p>Kitap kategorisi: {kitap.kitapKategorisi}</p>
                <p>Sayfa Sayısı: {kitap.kitapSayfaSayisi}</p>
                <p>Kitap Açıklaması: {
                      kitap.kitapAciklamasi.length>170 ?
                      kitap.kitapAciklamasi.substring(0,kitap.kitapAciklamasi.substring(0,170).lastIndexOf(" "))+"..." :
                      kitap.kitapAciklamasi
                                    }
                </p>
              </div>
            </div>
  )
}

export default Card