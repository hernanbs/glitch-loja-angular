import { Injectable } from '@angular/core';

import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UrlImageStorageService {
	private ASSETS_PATH = '../../../assets'
	private STORAGE_FOLDER = 'images'
  constructor() { }

  uploadImage(filepath: string, filename: string) {
  	const storageFolder = this.STORAGE_FOLDER
  	const storageRef =  firebase.storage().ref()
  	const xhr = new XMLHttpRequest()
		xhr.open("GET", [this.ASSETS_PATH,filepath,filename].join('/'))
		xhr.responseType = "blob"
		xhr.onload =  function() {
		  storageRef.child([storageFolder,filename].join('/')).put(xhr.response)
		}	
	 	xhr.send(null)
  }
  getImageUrl(filename: string) {
  	const storageRef = firebase.storage().ref()
  	return storageRef.child([this.STORAGE_FOLDER,filename].join('/')).getDownloadURL()
  }



}
