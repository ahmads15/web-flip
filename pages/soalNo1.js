import * as base from '../base-functions/base-functions';
import  {client} from 'nightwatch-api';

const elements = {
  testElement : '',
};
var DataAmount1jt = 'Rp 1,000,000';
var DataAmount4jtan = 'Rp 4,333,011';
var DataAmount3jt = 'Rp 3,000,000';
var DataAmount1tan = 'Rp 1,500,000';

export const verifyResults = async () =>{
    if(ID === '001' && userName === 'Smith' && sourceBank === 'BCA' && destinitionBank ==='BRI'){
       await base.expectElementEqualText(elements.testElement,DataAmount1jt);
    }else if(ID === '100' &&  userName === 'John' && sourceBank === 'BRI' && destinitionBank ==='BCA'){
      await base.expectElementEqualText(elements.testElement,DataAmount1jt);
    }else if(ID === '101' &&  userName === 'Fulan' && sourceBank === 'Mandiri' && destinitionBank ==='BCA'){
      await base.expectElementEqualText(elements.testElement,DataAmount4jtan);
    }else if(ID === '110' &&  userName === 'Sri' && sourceBank === 'BNI' && destinitionBank ==='BSI'){
      await base.expectElementEqualText(elements.testElement,DataAmount3jt);
    }else if(ID === '111' &&  userName === 'Bambang' && sourceBank === 'BCA' && destinitionBank ==='BSI'){
      await base.expectElementEqualText(elements.testElement,DataAmount1tan);
    }else{
      console.log('Data tidak ditemukan atau tidak sesuai');
    }
};