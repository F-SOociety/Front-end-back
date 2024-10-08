import videocall from "../../assets/featuresImg.png";

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <div className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${icon === '📹' ? 'bg-red-500' : icon === '🔒' ? 'bg-blue-500' : 'bg-yellow-500'}`}>
            {icon}
        </div>
        <div>
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

export default function FeatureSection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-navy-900 text-white  px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Features for a better experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon="📹"
              title="Video Calling"
              description="This software is very easy for you to manage; you can use it as you wish."
            />
            <FeatureCard
              icon="🔒"
              title="Keep safe & private"
              description="This software is very easy for you to manage; you can use it as you wish."
            />
            <FeatureCard
              icon="⏱️"
              title="Save your time"
              description="This software is very easy for you to manage; you can use it as you wish."
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src={videocall}
                  alt="Woman using video chat"
                  className="w-full h-full object-cover"
                />
             
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Solve your problems with live video chat</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Connect instantly and get real-time solutions with live video chat.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Break the barriers and solve your issues face-to-face online.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Get expert help at your fingertips with live video consultations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
