// import dairy from '../assets/categories/dairy.png';
// import fruits from '../assets/categories/fruits.png';
// import grains from '../assets/categories/grains.png';
// import meat from '../assets/categories/meat.png';
// import vegetable from '../assets/categories/vagetable.png';
// import murgi from '../assets/categories/murgi.png'

import { useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const Categories = () => {
    const category = useLoaderData();
   // const { title, img, price } = category;
    return (
        <div className="mt-10 mb-10">
            <h3 className="text-4xl font-medium mb-4">All Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {
              category.map(categories => <CategoryDetails key={categories.service_id} categories={categories}></CategoryDetails>)
             }
            </div>
        </div>
    );
};

export default Categories;