import React, { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import Forms from './components/Forms'
import Navi from './components/Navi'
import Search from './components/Search'
import axios from 'axios'
//import { data,kategori } from './assets/data/data' 



function App() {
  // const [stateAdi,setState] = useState(initialValue);
  const [kitaplik, setKitaplik] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [search, setSearch] = useState('');
  const [secilenKategori, setsecilenKategori] = useState('');
  const [secilenKitap, setsecilenKitap] = useState('');

  //yeni kitap ekleme
  const yeniKitapEkleDuzenle = async (yeni) => {
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //setKitaplik([...kitaplik,yeni]);
      setKitaplik(prev => [...prev, yeni])

      const response = await axios.post(url, yeni)
      console.log(response);
      // kitapGetir(); gereksi get attı kullanmayalım
    }
    else {
      url += `/${secilenKitap.id}`;
      const response2 = await axios.put(url, yeni)
      setsecilenKitap("");
      setKitaplik(prev =>
        prev.map(kitap => {
          if (kitap.id === secilenKitap.id) {
            return {...response2.data}
          }
          else{
            return{...kitap}
          }
        }

        ))
    }

  }
  //kitap silme 
  const kitapSil = async (id) => {

    setKitaplik(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
    const id2 = String(id)

    const url = `http://localhost:3005/kitaplar/${id}`;

    //const response = await axios.delete(url);//dikkatli ol çok tercih etme
    const response = await axios.patch(url, { isDeleted: true })
    console.log(response);


  }
  //kitapları getirme
  const kitapGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url += `?kitapKategorisi=${secilenKategori}`;
    }


    let response = await fetch(url);

    //console.log(response.json());
    const kitaplar = await response.json();
    setKitaplik(kitaplar)
  }
  //bir kere kullanmak istiyorum fetch e bak sürekli get atıyor pnun yerine 
  //kitapGetir();
  //boş dependency array atarak bir kere çalıştırttık

  //kategorilere göre getirme


  //categorileri getirme
  const kategoriGetir = async () => {

    const url = "http://localhost:3005/kategoriler";
    const response = await fetch(url);
    const kategoriler = await response.json();
    setKategoriler(kategoriler);
  }
  //KART DÜZENLEME 
  const cardDuzenle = async (id) => {
    const url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);
    const duzenlenecekKitap = response.data
    // console.log(duzenlenecekKitap)
    setsecilenKitap(duzenlenecekKitap);
  }


  //kategoriGetir();

  useEffect(() => {

    kategoriGetir();
  }, [])
  useEffect(() => {
    kitapGetir();

  }, [secilenKategori, secilenKitap])

  return (
    <>
      <Navi kategoriler={kategoriler} setsecilenKategori={setsecilenKategori} />
      <Forms secilenKitap={secilenKitap} yeniKitapEkleDuzenle={yeniKitapEkleDuzenle} kitaplik={kitaplik} />
      <Search setSearch={setSearch} />
      <CardList cardDuzenle={cardDuzenle} data={kitaplik} kitapSil={kitapSil} search={search} />
    </>
  )
}

export default App
