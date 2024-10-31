
const PeopleSay = () => {
    return (
        <div className="mt-4">
            <h3 className="text-4xl font-medium text-center mb-10">What people say</h3>
            <div className="carousel w-full">
                {/* slider-1 */}
                <div id="slide1" className="carousel-item relative w-full flex items-center justify-center">
                    <div className="flex space-x-4">
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <div className="w-24 rounded-full">
                                    <img src="https://pagedone.io/asset/uploads/1696229969.png" />
                                </div>
                            </figure>
                            <div className="space-y-3">
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
                                {/* Rating */}
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <div className="w-24 rounded-full">
                                    <img src="https://pagedone.io/asset/uploads/1696229994.png" />
                                </div>
                            </figure>
                            <div className="space-y-3">
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
                                {/* Rating */}
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>  
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <div className="w-24 rounded-full">
                                    <img src="https://pagedone.io/asset/uploads/1696230027.png" />
                                </div>
                            </figure>
                            <div className="space-y-3">
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
                                {/* Rating */}
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <div className="w-24 rounded-full">
                                    <img src="https://pagedone.io/asset/uploads/1696229969.png" />
                                </div>
                            </figure>
                            <div className="space-y-3">
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
                                {/* Rating */}
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <div className="w-24 rounded-full">
                                    <img src="https://pagedone.io/asset/uploads/1696229994.png" />
                                </div>
                            </figure>
                            <div className="space-y-3">
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
                                {/* Rating */}
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PeopleSay;