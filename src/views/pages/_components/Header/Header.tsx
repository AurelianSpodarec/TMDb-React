import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="absolute w-full z-30 text-gray-100 bg-[#0c0e11]/70">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                {/* <svg className="w-10 h-10 fill-white text-white p-2 bg-brand-500 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-32c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"></path></svg> */}
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="w-[60px]" />
                <span className="ml-3 text-xl font-bold">React APP</span>
            </Link>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <Link to="/discover" className="mr-5 hover:text-gray-900">Discover</Link>
                <Link to="/movies" className="mr-5 hover:text-gray-900">Movies</Link>
                <Link to="/trending" className="mr-5 hover:text-gray-900">Trending</Link>
                <Link to="/people" className="mr-5 hover:text-gray-900">People</Link>
                <Link to="/tv" className="mr-5 hover:text-gray-900">TV</Link>
            </nav>
            <button className="inline-flex items-center bg-gray-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-white mt-4 md:mt-0">Button</button>
        </div>
        </header>
    )
}

export default Header;