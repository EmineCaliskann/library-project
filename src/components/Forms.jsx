import React, { useEffect, useState } from 'react'
import '../assets/styles/forms.scss'

const Forms = ({ yeniKitapEkleDuzenle, kitaplik,secilenKitap }) => {
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapYazari, setKitapYazari] = useState("");
  const [kitapKategorisi, setKitapKategorisi] = useState("--Kategori Seçiniz--");
  const [kitapResmi, setKitapResmi] = useState("");
  const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState(0);
  const [kitapAciklamasi, setKitapAciklamasi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kitap Başarıyla Eklendi!");
    // {
    //   id:
    //   kitapAdi:
    //   kitapYazari:
    //   kitapKategorisi:
    //   kitapResmi:
    //   kitapSayfaSayisi:
    //   kitapAciklamasi: 
    // }
    yeniKitapEkleDuzenle({
      // id:kitaplik.length+1,
      id: kitaplik.length > 0 ? (+kitaplik[kitaplik.length - 1].id + 1 ).toString(): 1,
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategorisi: kitapKategorisi,
      kitapResmi: kitapResmi,
      kitapSayfaSayisi: kitapSayfaSayisi,
      kitapAciklamasi: kitapAciklamasi
    });
    setKitapAdi("");
    setKitapYazari("");
    setKitapKategorisi("--Kategori Seçiniz--");
    setKitapAciklamasi("");
    setKitapResmi("");
    setKitapSayfaSayisi(0);
  }
  useEffect(() => {
    if(secilenKitap){

   
    setKitapAdi(secilenKitap.kitapAdi);
    setKitapYazari(secilenKitap.kitapYazari);
    setKitapKategorisi(secilenKitap.kitapKategorisi);
    setKitapResmi(secilenKitap.kitapResmi);
    setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
    setKitapAciklamasi(secilenKitap.kitapAciklamasi);
  }
  }, [secilenKitap]);
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Kitap Ekle</h3>
      <hr></hr>
      <br></br>
      <input value={kitapAdi} onChange={(e) => { setKitapAdi(e.target.value) }} type="text" placeholder='Kitap Adı' />
      <input value={kitapYazari} onChange={(e) => { setKitapYazari(e.target.value) }} type="text" placeholder='Kitap Yazarı' />
      <select value={kitapKategorisi} onChange={(e) => { setKitapKategorisi(e.target.value) }}>
        <option>--Kategori Seçiniz--</option>
        <option>Yazılım</option>
        <option>Edebiyat</option>
        <option>Tarih</option>
        <option>Diğer</option>
      </select>
      <input value={kitapResmi} onChange={(e) => { setKitapResmi(e.target.value) }} type="text" placeholder='Kitap Resmi(url)' />
      <input value={kitapSayfaSayisi} onChange={(e) => { setKitapSayfaSayisi(e.target.value) }} type="number" placeholder='Sayfa sayısı' />
      <textarea value={kitapAciklamasi} onChange={(e) => { setKitapAciklamasi(e.target.value) }} placeholder='Kitap Açıklaması'></textarea>
      <input disabled={kitapAdi === "" || kitapYazari === "" || kitapKategorisi === "--Kategori Seçiniz--" || kitapAciklamasi === "" || kitapSayfaSayisi === 0} type="submit" value={secilenKitap? "Düzenle":"Ekle"} />
    </form>
  )
}

export default Forms