import { useEffect, useRef } from 'react';
import dairy from '../assets/categories/dairy.png';
import fruits from '../assets/categories/fruits.png';
import grains from '../assets/categories/grains.png';
import vegetable from '../assets/categories/vagetable.png';
import meat from '../assets/categories/meat.png';
import chicken from '../assets/categories/murgi.png';

const items = [
    { img: dairy, name: 'Dairy' },
    { img: fruits, name: 'Fruits' },
    { img: grains, name: 'Grains' },
    { img: vegetable, name: 'Vegetable' },
    { img: meat, name: 'Beef' },
    { img: chicken, name: 'Murgi' },
    { img: dairy, name: 'Dairy' }, // duplicates for longer scroll
    { img: fruits, name: 'Fruits' },
    { img: grains, name: 'Grains' },
];

const CarouselItem = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current;
            if (container) {
                const scrollAmount = container.offsetWidth < 640 ? 160 : 220; // smaller scroll on small devices
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                const isEndReached =
                    container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

                if (isEndReached) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-4">
            <h4 className="text-3xl sm:text-4xl font-bold font-sans mb-5 text-center mt-2">
                Popular Categories
            </h4>

            <div ref={carouselRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 scrollbar-hide">
                {items.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl flex-shrink-0 w-40 sm:w-52">
                        <figure>
                            <img
                                className={item.name === 'Vegetable' ? 'mt-6 sm:mt-7' : 'mt-3 sm:mt-4'}
                                src={item.img}
                                alt={item.name}
                            />
                        </figure>
                        <p className="text-center text-xl sm:text-2xl font-medium">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselItem;






// import dairy from '../assets/categories/dairy.png';
// import fruits from '../assets/categories/fruits.png';
// import grains from '../assets/categories/grains.png';
// import vegetable from '../assets/categories/vagetable.png';
// import meat from '../assets/categories/meat.png'

// const CarouselItem = () => {
//     return (
//         <div className="mt-4">
//             <h4 className="text-4xl font-bold font-sans mb-5 text-center mt-2">Popular Categories</h4>
//             <div className="carousel flex flex-wrap justify-center items-center">
//                 {/* slider-1 */}
//                 <div id="slide1" className="carousel-item relative ">
//                     <div className="flex flex-wrap space-x-4">
//                         <div className="card bg-base-100 w-52 shadow-xl">
//                             <figure>
//                                 <img src={dairy} alt="" />
//                             </figure>
//                             <p className='text-center text-2xl font-medium'>Dairy</p>
//                         </div>

//                         <div className="card bg-base-100 w-52 shadow-xl">
//                             <figure>
//                                 <img src={fruits} alt="" />
//                             </figure>
//                             <p className='text-center text-2xl font-medium'>Fruits</p>
//                         </div>
//                         <div className="card bg-base-100 w-52 shadow-xl">
//                             <figure>
//                                 <img className='mt-4' src={grains} alt="" />
//                             </figure>
//                             <p className='text-center text-2xl font-medium'>Grains</p>
//                         </div>
//                         <div className="card bg-base-100 w-52 shadow-xl">
//                             <figure>
//                                 <img className='mt-7' src={vegetable} alt="" />
//                             </figure>
//                             <p className='text-center text-2xl font-medium'>Vegetable</p>
//                         </div>
//                         <div className="card bg-base-100 w-52 shadow-xl">
//                             <figure>
//                                 <img className='mt-4' src={meat} alt="" />
//                             </figure>
//                             <p className='text-center text-2xl font-medium'>Beef</p>
//                         </div>
//                     </div>
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide5" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarouselItem;


