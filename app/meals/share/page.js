"use client"

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealButton from "@/components/meals/mealButton";

import { useActionState, useState } from "react";


export default function ShareMealPage() {
  const [file, setFile] = useState()
  const [state, formAction] = useActionState(shareMeal, {message: null})
  const [title, setTitle] = useState()

  function onChange(fileName){
    setFile(fileName)
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required onChange={(e)=>setTitle(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image" title={title} handleFile={(fileName) => onChange(fileName)}/> 
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealButton file = {file} title = {title}></MealButton>
          </p>
        </form>
      </main>
    </>
  );
}
