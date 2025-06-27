"use client";
import { uploadURL } from "@/lib/getUrl";
import { useFormStatus } from "react-dom";

export default function MealButton({file,title}) {
  if(file){
    console.log(file)
    const sendFile =  uploadURL(file, title)
  }
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>;
}
