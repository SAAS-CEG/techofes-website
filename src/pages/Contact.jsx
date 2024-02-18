import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import snowParticleConfig from "../particles/snowParticleConfig";

const Contact = () => {
  async function loadParticles(main) {
    await loadSlim(main);
  }

  return (
    <div className="mt-20 cursor-default">
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={snowParticleConfig}
      />
      <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
        <h1>CONTACT US</h1>
      </div>

      <div className="flex justify-center items-center text-white px-10 pb-24">
        <div className="justify-center items-center w-full md:w-3/5 rounded-2xl p-2 md:p-4 shadow-2xl relative border-4">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-1/2 p-3">
              <div className="flex-auto border-4 w-full p-4 rounded-2xl">
                <h1 className="text-xl m-2 flex justify-center font-unbounded">
                  CONTACT
                </h1>
                <p className="text-sm md:text-base px-4 py-1">
                  Lorem ipsum - +91 1234567890
                </p>
                <p className="text-sm md:text-base px-4 py-1">
                  Lorem ipsum - +91 1234567890
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <div className="flex-auto border-4 w-full p-4 rounded-2xl">
                <h1 className="text-xl m-2 flex justify-center font-unbounded">
                  EMAIL
                </h1>
                <p className="text-sm md:text-base px-4 py-1">
                  Lorem ipsum -{" "}
                  <span className="underline">techofes1@gmail.com</span>
                </p>
                <p className="text-sm md:text-base px-4 py-1">
                  Lorem ipsum -{" "}
                  <span className="underline">techofes2@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 w-full p-3">
            <div className="w-full h-60 border-4 rounded-xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3878496259977!2d80.23277747515768!3d13.010955587308075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fd80e657f%3A0x9727dde0ba49c84e!2sAnna%20University!5e0!3m2!1sen!2sin!4v1707907549033!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
