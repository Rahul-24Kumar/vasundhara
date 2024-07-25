import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-green-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Get in Touch</h3>
            <p className="text-green-600 mb-4">
              We’d love to hear from you!<br/> Whether you have a question about our initiatives, <br/> want to get involved, or just want to share your thoughts, feel free to reach out.
            </p>
            <ul className="text-green-600">
              <li className="mb-2">
                <strong>Email:</strong> <a href="mailto:contact@vasundhara.org" className="text-green-800 hover:underline">contact@vasundhara.org</a>
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-green-800 hover:underline">0129 231 0126</a>
              </li>
              <li>
                <strong>Address:</strong> 6, NH-19, Sector 6, Faridabad, Haryana 121006
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Send Us a Message</h3>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="mb-4">
                <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:border-green-500" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
