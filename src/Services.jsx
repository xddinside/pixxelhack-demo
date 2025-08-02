import Navbar from './components/Navbar';

export default function Services() {
  return (
    <div className="bg-[#111621] min-h-screen text-[#F1F0DB]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#20283a] p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Custom Furniture Design</h2>
              <p className="text-lg">
                We work with you to create custom furniture pieces that perfectly fit your space and style. From concept to creation, our team will bring your vision to life.
              </p>
            </div>
            <div className="bg-[#20283a] p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Space Planning</h2>
              <p className="text-lg">
                Our team of experts will help you optimize your space and create a functional and beautiful layout for your home or office.
              </p>
            </div>
            <div className="bg-[#20283a] p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Delivery and Installation</h2>
              <p className="text-lg">
                We offer white-glove delivery and installation services to ensure that your new furniture is set up to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
