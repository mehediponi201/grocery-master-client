
import { useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";
import { useEffect, useState } from "react";

const Categories = () => {

    const category = useLoaderData();
  
    const { title, img, price } = category;
    console.log(category);
    

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

