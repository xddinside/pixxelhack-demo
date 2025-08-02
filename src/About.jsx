import Navbar from './components/Navbar';

function About() {
  return (
    <div className="bg-[#111621] min-h-screen text-[#F1F0DB]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Rétrovie</h1>
          <p className="text-xl mb-4 leading-relaxed">
            Rétrovie is a furniture company that specializes in creating unique and timeless pieces that blend classic design with modern aesthetics. Our passion for craftsmanship and quality materials drives us to create furniture that is not only beautiful but also built to last.
          </p>
          <p className="text-xl leading-relaxed">
            Our team of skilled artisans and designers work closely with our clients to bring their vision to life. Whether you're looking for a statement piece for your living room or a complete furniture solution for your home, we are dedicated to providing you with a personalized and seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;