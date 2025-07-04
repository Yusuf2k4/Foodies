import MealItem from "./MealItem";
import classes from "./meals-grid.module.css"
export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
            <MealItem {...meal}></MealItem>
        </li>
      ))}
    </ul>
  );
}
