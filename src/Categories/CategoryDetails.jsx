
const CategoryDetails = ({ categories }) => {
    const { title, img, price } = categories;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2>Price:{price}</h2>
                    <p>If a dog chews shoes whose shoes does he?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-success">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryDetails;