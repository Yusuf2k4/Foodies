import Image from "next/image";
import classes from "./page.module.css";
import { getMealDetail } from "@/lib/meals";
import { notFound } from "next/navigation";
import ImageURL from "@/components/meals/image";

export default function MealsDetail({ params }) {
  const meal = getMealDetail(params.slug);
  if(!meal){
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />") 
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <ImageURL image={meal.image}></ImageURL>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
