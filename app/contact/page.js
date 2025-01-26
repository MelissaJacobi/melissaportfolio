"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    
    // Append your Web3Forms API access key
    formData.append("access_key", "e919987b-5d70-4aa2-875e-549cab1d8d6d");
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      console.log("Message sent successfully:", result);
      // Handle success (e.g., show a success message)
    } else {
      console.error("Error sending message:", result);
      // Handle error (e.g., show an error message)
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <div className="h-[calc(100vh-5rem)] flex justify-center items-center bg-black text-white relative overflow-y-hidden">
        <main className="flex-grow max-w-[40rem] p-4 relative z-10">
          <h1 className="text-[2rem] font-bold text-center mb-6 font-quicksand">Let's Connect!</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border-b border-white bg-transparent text-white focus:outline-none focus:border-gray-300 p-1 font-quicksand focus:bg-transparent focus:translate-y-1 duration-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border-b border-white bg-transparent text-white focus:outline-none focus:border-gray-300 p-1 font-quicksand focus:bg-transparent focus:translate-y-1 duration-300"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border-b border-white bg-transparent text-white focus:outline-none focus:border-gray-300 p-1 font-quicksand focus:bg-transparent focus:translate-y-1 duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="z-10 w-full bg-white text-black py-2 rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </main>
        <img
          src="/contact-me.svg"
          alt="contact me photo"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </>
  );
}
