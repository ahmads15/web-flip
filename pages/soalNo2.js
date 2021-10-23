import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  btnMasuk : '.border-round',
  btnBiaya : "(//*[text()='Biaya'])[1]",
  btnKarir : "(//*[text()='Karir'])[1]",
  btnBantuan : "(//*[text()='Bantuan'])[1]",
  // cara untuk mencari selector/element yang saya lakukan adalah klik kanan dan inspect element cari berdasarkan class,id atau xpath
  // untuk element btnMasuk saya menggunakan class karena selector tersebut uniq dan 1 of 1 on web
  // untuk element btnBiaya saya menggunakan xpath[lebih aman kalau diliat dari inspect element] dengan mencari textnya lalu menggunakan indexing untuk lebih spesifik 1 of 1 ke element yang saya inginkan
  // untuk element btnKarir sama cara mendapatkannya sama sepert btnBiaya
  // untuk element btnBantuan saya  cara mendapatkannya sama sepert btnBiaya

  // selector login page
  wordingHelloHai: "//*[text() ='Hai!' or text()= 'Hello there!']",
  //selector biaya
  wordingPilihLayanan : '.biaya-title > b',
  wordingFlipReguler: ".card-container > div:nth-of-type(1) > .header-biaya",
  wordingFlipBig : ".card-container > div:nth-of-type(2) > .header-biaya",

  // selector flip career
  wordingFlipCareers: '.brand-text',
  wordingOpenPositions : '.advanced-page-title',

  // selector bantuan
  wordingPusatBantuan: "//span[.='Pusat Bantuan']",
  wordingInfromasiUmum: "//span[.='Informasi Umum']",
};

export const openWebsite = async () =>{
        client.url('https://flip.id/');
};

export const clickBtn = async (value)=> {
    if(value === 'Masuk'){
        await base.expectElementEqualText(elements.btnMasuk,'Masuk');
        await base.clickElement(elements.btnMasuk);
    }else if (value === 'Biaya'){
        await base.expectElementEqualTextXpath(elements.btnBiaya,'Biaya');
        await base.clickElementViaXpath(elements.btnBiaya);
    }else if (value === 'Karir'){
        await base.expectElementEqualTextXpath(elements.btnKarir,'Karir');
        await base.clickElementViaXpath(elements.btnKarir);
    }else{
        await base.waitElementVisibleWithXpath(elements.btnBantuan);
        await base.expectElementEqualTextXpath(elements.btnBantuan,'Bantuan');
        await base.clickElementViaXpath(elements.btnBantuan);
    }
};



export const verifyPage = async (valPage) => {
    if(valPage === 'masukPage'){
         var getwordingHello = await base.getStringTextXpath(elements.wordingHelloHai);
         await base.expectElementEqualTextXpath(elements.wordingHelloHai,getwordingHello);
    }else if (valPage === 'biayaPage'){
        await base.expectElementEqualText(elements.wordingPilihLayanan,'Pilih Layanan Flip yang Sesuai Kebutuhanmu');
        await base.expectElementEqualText(elements.wordingFlipReguler,'Flip Reguler');
        await base.expectElementEqualText(elements.wordingFlipBig,'Big Flip');
    }else if (valPage === 'karirPage'){
        await base.expectElementEqualText(elements.wordingOpenPositions,'Open Positions');
        await base.expectElementEqualText(elements.wordingFlipCareers,'Flip Careers');
    }else{
        await base.expectElementEqualTextXpath(elements.wordingPusatBantuan,'Pusat Bantuan');
        await base.expectElementEqualTextXpath(elements.wordingInfromasiUmum,'Informasi Umum');
    } 
};


