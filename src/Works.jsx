import Navbar from './components/Navbar';

export default function Works() {
  return (
    <div className="bg-[#111621] min-h-screen text-[#F1F0DB]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-5xl font-bold text-center mb-12">Our Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#20283a] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4">Living Room</h2>
              <p className="text-lg">
                A cozy and inviting living room featuring our custom-designed sofa and coffee table.
              </p>
            </div>
            <div className="bg-[#20283a] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4">Dining Room</h2>
              <p className="text-lg">
                An elegant dining room with our handcrafted dining table and chairs.
              </p>
            </div>
            <div className="bg-[#20283a] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4">Bedroom</h2>
              <p className="text-lg">
                A serene bedroom with our custom-made bed frame and nightstands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}