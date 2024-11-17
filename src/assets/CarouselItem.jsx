import dairy from '../assets/categories/dairy.png';
import fruits from '../assets/categories/fruits.png';
import grains from '../assets/categories/grains.png';
import vegetable from '../assets/categories/vagetable.png';
import meat from '../assets/categories/meat.png'

const CarouselItem = () => {
    return (
        <div className="mt-4">
            <h4 className="text-4xl font-bold font-sans mb-5 lg:text-center mt-2">Popular Categories</h4>
            <div className="carousel lg:w-full">
                {/* slider-1 */}
                <div id="slide1" className="carousel-item relative w-full lg:flex lg:items-center lg:justify-center">
                    <div className="lg:flex space-x-4">
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={dairy} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Dairy</p>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={fruits} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Fruits</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={grains} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Grains</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-7' src={vegetable} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Vegetable</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={meat} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Beef</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-2 */}
                <div id="slide2" className="carousel-item relative w-full lg:flex lg:items-center lg:justify-center">
                    <div className="lg:flex space-x-4">
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={fruits} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Fruits</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={dairy} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Dairy</p>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={grains} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Grains</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-7' src={vegetable} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Vegetable</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={meat} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Beef</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-3 */}
                <div id="slide3" className="carousel-item relative w-full lg:flex lg:items-center lg:justify-center">
                    <div className="lg:flex space-x-4">
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={grains} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Grains</p>
                        </div>
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={dairy} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Dairy</p>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={fruits} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Fruits</p>
                        </div>
                       
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-7' src={vegetable} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Vegetable</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={meat} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Beef</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-4 */}
                <div id="slide4" className="carousel-item relative w-full lg:flex lg:items-center lg:justify-center">
                    <div className="lg:flex space-x-4">
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-7' src={vegetable} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Vegetable</p>
                        </div>
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={dairy} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Dairy</p>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={fruits} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Fruits</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={grains} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Grains</p>
                        </div>
                       
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={meat} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Beef</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider-5 */}
                <div id="slide5" className="carousel-item relative w-full lg:flex lg:items-center lg:justify-center">
                    <div className="lg:flex space-x-4">
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={meat} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Beef</p>
                        </div>
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-7' src={vegetable} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Vegetable</p>
                        </div>
                    <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={dairy} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Dairy</p>
                        </div>

                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img src={fruits} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Fruits</p>
                        </div>
                        <div className="card bg-base-100 w-52 shadow-xl">
                            <figure>
                                <img className='mt-4' src={grains} alt="" />
                            </figure>
                            <p className='text-center text-2xl font-medium'>Grains</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;