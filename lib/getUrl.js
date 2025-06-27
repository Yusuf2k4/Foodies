
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./fire";
import slugify from "slugify";

export async function getURL(path) {
  const reference = ref(storage, `Images/${path}`);
  const url = await getDownloadURL(reference);  
  console.log("URL", url);
  return url;  
}


export async function uploadURL(file, title){
  if(!file){
    return
  }
  const extension = file.name.split(".").pop();
  title  = slugify(title, {lower: true})
  const fileName = `${title}.${extension}`
  const refrence = ref(storage, `Images/${fileName}`)
  const snapshot = await uploadBytes(refrence, file);
  console.log("UPLOADED", snapshot)
}