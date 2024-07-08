import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10" style={{marginTop: "20%"}}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">About Plug®</h3>
          <p>We are a consumer electronics provider that connects people to reliable, Certified Pre-Owned Devices. We make it affordable and easy for you to get the most out of your personal technology purchases.</p>
          <p className="mt-4">Plug® is certified to R2v3, the most widely adopted global standard and certification program in the industry for the Responsible Recycling of electronics.</p>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-bold mb-4">Subscribe to keep up with our great deals.</h3>
          <form>
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 w-full border border-gray-300 rounded-md mb-4"
            />
            <button className="bg-green-800 text-white px-4 py-2 rounded-md w-full">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center mt-10 border-t pt-4">
        <p className="text-gray-600">&copy; 2024, plug.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
