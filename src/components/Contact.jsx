import Reveal from "./Reveal";
import { useRef, useEffect } from "react";




const Contact = () => {
  // Create a ref for the first input field
  const nameInputRef = useRef(null);

  // Set focus to the first input field when the component mounts
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-8">
          <div>
            <div className="my-3 text-gray-300">
              <h3 className="mb-5 text-4xl font-semibold">
                About <span>Me</span>
              </h3>
              <p className="w-11/12 mx-auto leading-7 text-justify">
              As a software development student at Navgurukul, 
              I have a solid background in front-end technologies like JavaScript, 
              React.js, HTML, and CSS. 
              I am passionate about turning ideas into functional code and eager to apply my skills to practical challenges. 
              With strong problem-solving skills and a collaborative approach, 
              I am ready to contribute effectively to any development team.
              </p>
            </div>

            <div className="flex items-center mt-10 gap-7">
              {[
                { count: "05", label: "Projects", suffix: "+" },
                { count: "1", label: "Years of experience", suffix: "+" },
                { count: "40", label: "Happy clients", suffix: "+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-gray-800/40 text-center text-white"
                >
                  <h3 className="text-2xl font-semibold text-white md:text-4xl">
                    {stat.count}
                    <span>{stat.suffix}</span>
                  </h3>
                  <p className="text-xs md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            action="https://getform.io/f/amdpzpdb"
            method="POST"
            className="max-w-6xl p-5 md:p-12 space-y-4"
            id="form"
          >
            <p className="mb-2 text-xl font-bold text-gray-100">
              Let’s connect!
            </p>

            <input
              ref={nameInputRef}
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              className="w-full py-2 pl-2 pr-4 border border-purple-600 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 placeholder:text-gray-950"
            />

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              className="w-full py-2 pl-2 pr-4 border border-purple-600 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 placeholder:text-gray-950"
            />

            <input
              type="number"
              id="number"
              placeholder="Your Phone Number"
              name="number"
              className="w-full py-2 pl-2 pr-4 border border-purple-600 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 placeholder:text-gray-950"
            />

            <input
              type="text"
              id="purpose"
              placeholder="Purpose of Message"
              name="purpose"
              className="w-full py-2 pl-2 pr-4 border border-purple-600 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 placeholder:text-gray-950"
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message"
              className="w-full py-2 pl-2 pr-4 border border-purple-600 rounded-md text-gray-900 focus:ring-2 focus:ring-purple-500 placeholder:text-gray-950"
            />

            <button
              type="submit"
              className="w-full py-3 text-xl font-semibold text-gray-100 rounded-md bg-purple-600 hover:bg-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
