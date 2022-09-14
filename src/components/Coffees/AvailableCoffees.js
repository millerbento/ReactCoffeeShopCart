import Card from '../UI/Card';
import MealItem from './CoffeeItem/CoffeeItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Flat white',
    description: 'Normal, Almond and Coconut milk',
    price: 3.50,
  },
  {
    id: 'm2',
    name: 'Cappuccino',
    description: 'A german specialty!',
    price: 4.50,
  },
  {
    id: 'm3',
    name: 'Mochaccino',
    description: 'American, raw, meaty',
    price: 3.50,
  },
  {
    id: 'm4',
    name: 'Latte',
    description: 'Healthy...and green...',
    price: 3.50,
  },
  {
    id: 'm5',
    name: 'Americano',
    description: 'Healthy...and green...',
    price: 3.50,
  },
  {
    id: 'm6',
    name: 'Long Black',
    description: 'Healthy...and green...',
    price: 3.50,
  },
  {
    id: 'm7',
    name: 'Short Black',
    description: 'Healthy...and green...',
    price: 3.00,
  },      
];

const AvailableCoffees = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      // description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffees;
