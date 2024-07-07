import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let mailtoLink = `mailto:sajithprawanthafernando@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-black-100 text-white py-10">
      <section className="container mx-auto px-4" id="contact">
        <h2 className="flex justify-center text-3xl font-bold mb-6 items-center">
          Contact <span className="text-blue-500 ml-3"> Me</span>
        </h2>

        <div className="bg-gray-800 rounded-2xl px-12 py-8 shadow-md dark:border-2 dark:hover:border-blue-500">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <p className="text-xl font-semibold">Get In Touch</p>

            <div>
              <input
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div>
              <input
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                type="email"
              />
            </div>

            <div>
              <input
                required
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                type="text"
              />
            </div>

            <div>
              <textarea
                required
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
