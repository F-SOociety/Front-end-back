
import heroImage from "../../assets/hero.png"; // Adjust this path based on your file structure
import ellipse1 from "../../assets/hero.png";
import ellipse2 from "../../assets/hero.png";
import ellipse3 from "../../assets/hero.png";

function HeroSection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4v pt-44">
      <div className="bg-navy-950 text-white min-h[50%]">
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-blue-500">
              Connect with<br />anyone, anytime, anywhere.
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Great software that allows you to chat from any place at any time without any interruption.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Start chatting now
            </button>
            <div className="flex items-center space-x-8 mt-12">
              <div className="flex -space-x-2">
                <img
                  src={ellipse1}
                  alt="User 1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src={ellipse2}
                  alt="User 2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <img
                  src={ellipse3}
                  alt="User 3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="font-bold text-2xl text-blue-500">2,291</div>
                <div className="text-gray-400 text-sm ">Happy customers</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-blue-500">4.8/5</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-yellow-400 rounded-full overflow-hidden mx-auto">
              <img
                src={heroImage}
                alt="Person using chat app"
                width={384}
                height={384}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={ellipse2}
                  alt="Eli joon"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-semibold">mark</span>
              </div>
              <p className="text-sm">
                Great software that allows you to chat from any place at any time without any interruption.
              </p>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white text-black p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={ellipse1}
                  alt="El joon"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-semibold">El joon</span>
              </div>
              <p className="text-sm">
                Great software that allows you to chat from any place at any time without any interruption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
