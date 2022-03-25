import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/064545c0-9be4-4065-9dc7-bdd45288f9b9"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-8xl font-black inline text-[#dddddd] content-center">
            contact.
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email -
            <a href="mailto:matthiascheng50@gmail.com">
              matthiascheng50@gmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
