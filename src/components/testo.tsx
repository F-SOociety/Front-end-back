import ellipse1 from '../assets/ellipse 1.png';
import ellipse3 from '../assets/ellipse 3.png';

function TestimonialSection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">What our users are saying</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <p className="text-lg mb-4">"The best chat app for all users to enjoy easy real-time chatting."</p>
              <div className="flex items-center">
                  <img src={ellipse1} alt="Eli Joon" width={40} height={40} className="rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Eli Joon</p>
                  <p className="text-sm text-gray-300">Medical Assistant</p>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <p className="text-lg mb-4">"Rareblocks helps you optimize for engagement."</p>
              <div className="flex items-center">
              <img src={ellipse3} alt="Eli Joon" width={40} height={40} className="rounded-full mr-3" />
                <div>
                  <p className="font-semibold">Sarah Doe</p>
                  <p className="text-sm text-gray-300">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start with our application and experience<br />
            faster communication every second.
          </h2>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start chatting now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
