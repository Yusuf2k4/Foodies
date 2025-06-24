import sql from "better-sqlite3";

const db = sql("meals.db");
export default function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}


export function getMealDetail(slug){
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}