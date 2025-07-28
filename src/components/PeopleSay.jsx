const PeopleSay = () => {
    return (
        <div className="mt-4 px-4 md:px-8 lg:px-16">
            <h3 className="text-3xl md:text-4xl font-medium text-center mb-10">What people say</h3>

            <div className="flex flex-wrap justify-center gap-6">
                {[
                    "https://pagedone.io/asset/uploads/1696229969.png",
                    "https://pagedone.io/asset/uploads/1696229994.png",
                    "https://pagedone.io/asset/uploads/1696230027.png",
                    "https://pagedone.io/asset/uploads/1696229969.png",
                    "https://pagedone.io/asset/uploads/1696229994.png"
                ].map((img, index) => (
                    <div key={index} className="card bg-base-100 w-full sm:w-64 md:w-60 lg:w-56 xl:w-52 shadow-xl">
                        <figure className="pt-4">
                            <div className="w-24 rounded-full overflow-hidden">
                                <img src={img} alt={`person-${index + 1}`} />
                            </div>
                        </figure>
                        <div className="card-body items-center text-center space-y-3">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi eaque iste.</p>
                            <div className="rating">
                                <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleSay;




// const PeopleSay = () => {
//     return (
//         <div className="mt-4">
//             <h3 className="text-4xl font-medium text-center mb-10">What people say</h3>

//             <div className="flex flex-wrap items-center justify-center space-x-4">
//                 <div className="card bg-base-100 w-52 shadow-xl">
//                     <figure>
//                         <div className="w-24 rounded-full">
//                             <img src="https://pagedone.io/asset/uploads/1696229969.png" />
//                         </div>
//                     </figure>
//                     <div className="space-y-3">
//                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
//                         {/* Rating */}
//                         <div className="rating">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-orange-400"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 w-52 shadow-xl">
//                     <figure>
//                         <div className="w-24 rounded-full">
//                             <img src="https://pagedone.io/asset/uploads/1696229994.png" />
//                         </div>
//                     </figure>
//                     <div className="space-y-3">
//                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
//                         {/* Rating */}
//                         <div className="rating">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-orange-400"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card bg-base-100 w-52 shadow-xl">
//                     <figure>
//                         <div className="w-24 rounded-full">
//                             <img src="https://pagedone.io/asset/uploads/1696230027.png" />
//                         </div>
//                     </figure>
//                     <div className="space-y-3">
//                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
//                         {/* Rating */}
//                         <div className="rating">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-orange-400"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card bg-base-100 w-52 shadow-xl">
//                     <figure>
//                         <div className="w-24 rounded-full">
//                             <img src="https://pagedone.io/asset/uploads/1696229969.png" />
//                         </div>
//                     </figure>
//                     <div className="space-y-3">
//                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
//                         {/* Rating */}
//                         <div className="rating">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-orange-400"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card bg-base-100 w-52 shadow-xl">
//                     <figure>
//                         <div className="w-24 rounded-full">
//                             <img src="https://pagedone.io/asset/uploads/1696229994.png" />
//                         </div>
//                     </figure>
//                     <div className="space-y-3">
//                         <p className='text-center'>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi eaque iste.</p>
//                         {/* Rating */}
//                         <div className="rating">
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input
//                                 type="radio"
//                                 name="rating-2"
//                                 className="mask mask-star-2 bg-orange-400"
//                                 defaultChecked />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PeopleSay;

