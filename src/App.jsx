import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-[#111621]  min-h-screen text-[#F1F0DB]">
      <Navbar />

      <div className="flex flex-col items-center min-h-screen pt-10">
        <h1 className="text-6xl">Rétrovie</h1>
      </div>
    </main>
  );
}

export default App;
