import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="justify-center items-center h-[600px] w-[800px] rounded-2xl p-4 shadow-2xl">
        <div className="flex-auto m-2">
          <h1 className="text-xl m-2">CONTACT</h1>
          <p className="text-sm md:text-base px-4">
            Lorem ipsum - +91 1234567890
          </p>
          <p className="text-sm md:text-base px-4">
            Lorem ipsum - +91 1234567890
          </p>
        </div>
        <div className="flex-auto m-2">
          <h1 className="text-xl m-2">EMAIL</h1>
          <p className="text-sm md:text-base px-4">
            Lorem ipsum - <span className="underline">techofes1@gmail.com</span>
          </p>
          <p className="text-sm md:text-base px-4">
            Lorem ipsum - <span className="underline">techofes2@gmail.com</span>
          </p>
        </div>
        <div className="flex-auto m-2">
          <h1 className="text-xl m-2">CONNECT</h1>
          <div className="flex gap-5 text-4xl px-4">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <CgMail />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <div className="h-[190px] w-[500px]  border-solid border-blue-700 border-2 rounded-xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3878496259977!2d80.23277747515768!3d13.010955587308075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fd80e657f%3A0x9727dde0ba49c84e!2sAnna%20University!5e0!3m2!1sen!2sin!4v1707907549033!5m2!1sen!2sin"
              width="500"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
