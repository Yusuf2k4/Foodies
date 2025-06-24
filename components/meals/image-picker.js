"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const ref = useRef();
  function handlePick() {
    ref.current.click();
  }
  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
      setPickedImage(null);
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        {pickedImage && (
          <div className={classes.preview}>
            {pickedImage && (
              <Image src={pickedImage} alt="Image picked by user" fill></Image>
            )}
          </div>
        )}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          ref={ref}
          onChange={handleChange}
          required
        />

        <button className={classes.button} type="button" onClick={handlePick}>
          {" "}
          Pick an image{" "}
        </button>
      </div>
    </div>
  );
}
