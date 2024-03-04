import { TextField } from "@mui/material";
import "./Contact.css";
import { Button } from "react-daisyui";

const Contact = () => {
  return (
    <div className="mt-20 cursor-default bg-g   break-all">
      <div className="flex items-center justify-center p-11 text-3xl md:text-6xl text-white font-anta">
        <h1 className="font-anta font-bold">CONTACT US</h1>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center text-white font-anta">
        <h2 className="text-center md:text-4xl text-2xl font-anta font-bold">
          CORPORATE RELATIONS
        </h2>
        <h3 className="text-center md:text-2xl text-xl">
          (For Sponshorship Queries)
        </h3>
        <div className="flex flex-wrap w-full justify-evenly">
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4 py-2 px-4">
            <p>Manisha</p>
            <a href="tel:6302831408">6302831408</a>
          </div>
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4 py-2 px-4">
            <p>Vijay</p>
            <a href="tel:8608556824">8608556824</a>
          </div>
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4 py-2 px-4">
            <p>Email</p>
            <a href="mailto:corporaterelations@saasceg.com">corporaterelations@saasceg.com</a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center text-white font-anta mt-8">
        <h2 className="text-center md:text-4xl text-2xl font-anta font-bold">
          HUMAN RESOURCES
        </h2>
        <h3 className="text-center md:text-2xl text-xl">
          (For General Queries)
        </h3>
        <div className="flex flex-wrap w-full justify-evenly">
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4  py-2 px-4 ">
            <p>Jayaharish</p>
            <a href="tel:9597942324">9597942324</a>
          </div>
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4 py-2 px-4">
            <p>Sivanitha</p>
            <a href="tel:8825702662">8825702662</a>
          </div>
          <div className="bk my-6 text-sm md:text-xl md:px-16 md:py-4 py-2 px-4">
            <p>Email</p>
            <a href="mailto:saas.ceg.official@gmail.com">saas.ceg.official@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-white box-content px-10 pb-24 ">
        <h2 className="text-center md:text-4xl text-2xl font-anta mt-8">
          SEND US YOUR QUERY
        </h2>
        <div className="flex h-full p-12 gap-y-10 flex-col bk w-4/5 max-w-2xl my-8">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            sx={{
              input: {
                color: "white",
              },
              "& label": {
                color: "white",
              },
              "& .MuiInput-underline": {
                "&:before": {
                  borderBottomColor: "white", // white underline color
                },
                "&:after": {
                  borderBottomColor: "white", // white underline color after focus
                },
              },
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white", // white underline color on hover
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            sx={{
              input: {
                color: "white",
              },
              "& label": {
                color: "white",
              },
              "& .MuiInput-underline": {
                "&:before": {
                  borderBottomColor: "white", // white underline color
                },
                "&:after": {
                  borderBottomColor: "white", // white underline color after focus
                },
              },
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white", // white underline color on hover
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            id="standard-basic"
            label="Message"
            variant="standard"
            sx={{
              input: {
                color: "white",
              },
              "& label": {
                color: "white",
              },
              "& .MuiInput-underline": {
                "&:before": {
                  borderBottomColor: "white", // white underline color
                },
                "&:after": {
                  borderBottomColor: "white", // white underline color after focus
                },
              },
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white", // white underline color on hover
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <button
            className="bg-cyan-800 sm:px-8 px-4 py-2 sm:py-4 text-lg sm:text-2xl rounded-2xl"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-center items-center max-w-2xl w-4/5 mt-4">
          <div className="w-full h-80 rounded-xl overflow-hidden relative">
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
  );
};

export default Contact;
