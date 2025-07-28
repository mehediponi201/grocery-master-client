import { useLoaderData } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";

const Categories = () => {

    const category = useLoaderData();

    if (!category || category.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
               <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="mt-10 mb-10">
            <h3 className="text-4xl font-medium mb-4 text-center">All Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    category.map(categories => <CategoryDetails key={categories.service_id} categories={categories}></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Categories;

