import { Button, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useForm } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";

const Registration = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  async function loadParticles(main) {
    await loadSlim(main);
  }

  const sxx = {
    input: {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline": {
      borderBottomColor: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
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
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="justify-center items-center h-[350px] px-20 rounded-2xl bg-gray-300/10 shadow-2xl text-blue-500">
          <h1 className="text-3xl md:text-4xl text-white my-5 justify-center items-center flex font-anta ">
            LOGIN
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-10 justify-center items-center p-5"
          >
            {/* <label onError={errors?.firstname?.message}>sbxjsxns</label> */}

            <TextField
              error={errors?.email?.message}
              id="email"
              label="email"
              variant="outlined"
              className="w-80"
              sx={sxx}
              type="email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.password?.message}
              id="password"
              label="Password"
              variant="outlined"
              className="w-80"
              sx={sxx}
              type="password"
              {...register("password", {
                required: "This field is required",
              })}
            />
            <Button variant="contained" type="submit">
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
