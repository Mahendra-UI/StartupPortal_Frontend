import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from '../../assets/js/crypto-js';

@Injectable({
  providedIn: 'root'
})
export class utilsService {
     //commonmethhods

     encryptionKeys(): any {
      return {
        key: '7061737329913211',
        iv: '7061737329913211',
      };
    }
  
    encrypt(input: string): string {
      const keyVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().key);
      const ivVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().iv);
      const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(input),
        keyVal,
        {
          keySize: 128 / 8,
          iv: ivVal,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }
      ).toString();
      return encrypted;
    }


   decrypt(input: string): string {
      const keyVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().key);
    const ivVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().iv);
    const decrypted = CryptoJS.AES.decrypt(input, keyVal, {
      keySize: 128 / 8,
      iv: ivVal,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
