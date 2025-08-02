import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111621] text-[#F1F0DB] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Rétrovie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;