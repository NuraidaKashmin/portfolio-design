import heroImg from '../assets/heroImage.jpg'
const Banner = () => {
    return (
        <div className="hero items-center  pt-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={heroImg}
                    className="portrait:max-w-xs landscape:max-w-lg rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold uppercase text-gray-700">I'm <span className='portrait:text-5xl landscape:text-8xl text-[rgb(44,70,61)]'>Nuraida Kashmin</span></h1>
                    <p className="py-6 uppercase text-3xl text-gray-700">
                        Frontend developer
                    </p>
                    <p className="pb-6 text-lg text-gray-600">
                    I create simple, clean websites.
                    </p>
                    
                    <button className="btn bg-[rgb(35,56,49)] text-white text-xl">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;