import { Link } from "react-router-dom";
import Cover from "../assets/Cover.jpg";
export default function LandingPage({ goToStory }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 to-orange-300 p-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={Cover}
            alt="My Body My Rules - Book Cover"
            className="w-96 rounded-xl shadow-2xl transform hover:scale-105 transition-transform"
          />
        </div>

        <div className="space-y-6 text-center md:text-left order-1 md:order-2">
          <h1 className="text-7xl font-bold text-gray-800 hover:tracking-wider transition-all ease-in-out duration-300 italic">
            My Body My Rules
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            Sebuah cerita pendek karya Veronica Selmi Aurenscy yang mengungkap
            perjalanan personal dan pemberdayaan diri.
          </p>
          <button
            onClick={goToStory}
            className="inline-block bg-gradient-to-r from-teal-500 to-orange-500 
            text-white px-8 py-3 rounded-full 
            transform transition-transform hover:scale-105 
            shadow-lg hover:shadow-xl"
          >
            Baca Cerita
          </button>
        </div>
      </div>
    </div>
  );
}
