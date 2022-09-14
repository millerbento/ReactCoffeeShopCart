import { Fragment } from "react";
import MealsSummary from "./CoffeesSummary";
import AvailableCoffees from "./AvailableCoffees";

const Coffees = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableCoffees />
        </Fragment>
    );
};

export default Coffees;