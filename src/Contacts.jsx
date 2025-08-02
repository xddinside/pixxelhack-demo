import Navbar from './components/Navbar';

export default function Contacts() {
  return (
    <div className="bg-[#111621] min-h-screen text-[#F1F0DB]">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#20283a] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-4">
                Have a question or a project in mind? We'd love to hear from you. Reach out to us using the form below or contact us directly.
              </p>
              <div className="text-lg">
                <p>Email: info@retrovie.com</p>
                <p>Phone: +91 9876543210</p>
              </div>
            </div>
            <div className="bg-[#20283a] p-6 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-[#111621] border border-[#F1F0DB] rounded-lg py-2 px-3" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-[#111621] border border-[#F1F0DB] rounded-lg py-2 px-3" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full bg-[#111621] border border-[#F1F0DB] rounded-lg py-2 px-3"></textarea>
                </div>
                <button type="submit" className="bg-[#DBA66D] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#EBC27E]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
