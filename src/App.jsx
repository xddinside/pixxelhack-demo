import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <main className="bg-[#111621] min-h-screen text-[#F1F0DB]">
        <Navbar />
        <div className="flex flex-col items-center min-h-screen pt-10">
          <h1 className="text-6xl">Rétrovie</h1>
        </div>
      </main>
    </>
  );
}

export default App;
