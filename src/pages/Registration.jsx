import { Button, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useForm } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ParticleConfig from "../particles/ParticleConfig";

const Registration = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  async function loadParticles(main) {
    await loadSlim(main);
  }

  return (
    <>
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={ParticleConfig}
      />
      <div className="flex flex-col justify-center items-center my-10 mt-28">
        <div className="justify-center items-center h-[1350px] w-[800px] rounded-2xl p-4 shadow-2xl bg-slate-100  text-blue-500">
          <h1 className="text-4xl my-5 justify-center items-center flex font-anta text-[#272727]">
            REGISTER
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-10 justify-center items-center p-5"
          >
            {/* <label onError={errors?.firstname?.message}>sbxjsxns</label> */}
            <TextField
              error={errors?.firstname?.message}
              id="firstname"
              label="First Name"
              variant="outlined"
              className="w-80"
              {...register("firstname", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.lastname?.message}
              id="lastname"
              label="lastName"
              variant="outlined"
              className="w-80"
              {...register("lastname", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.email?.message}
              id="email"
              label="email"
              variant="outlined"
              className="w-80"
              type="email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.password?.message}
              id="password"
              label="password"
              variant="outlined"
              className="w-80"
              type="password"
              {...register("password", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.Phone?.message}
              id="Phone"
              label="phone"
              variant="outlined"
              className="w-80"
              type="number"
              {...register("Phone", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.Rollno?.message}
              id="Rollno"
              label="rollno"
              variant="outlined"
              className="w-80"
              type="number"
              {...register("Rollno", {
                required: "This field is required",
              })}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  error={errors?.dob?.message}
                  label="DOB"
                  id="dob"
                  className="w-[325px]"
                  {...register("dob", {
                    required: "This field is required",
                  })}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              error={errors?.college_name?.message}
              id="college_name"
              label="college"
              variant="outlined"
              className="w-80"
              {...register("college_name", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.department?.message}
              id="department"
              label="department"
              variant="outlined"
              className="w-80"
              {...register("department", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.city?.message}
              id="city"
              label="city"
              variant="outlined"
              className="w-80"
              {...register("city", {
                required: "This field is required",
              })}
            />
            <TextField
              error={errors?.year?.message}
              id="year"
              label="year"
              variant="outlined"
              className="w-80"
              type="number"
              {...register("year", {
                required: "This field is required",
                max: {
                  value: 5,
                  message: "only 5 years",
                },
                min: {
                  value: 1,
                  message: "min one year",
                },
              })}
            />
            <TextField
              error={errors?.state?.message}
              id="state"
              label="state"
              variant="outlined"
              className="w-80"
              {...register("state", {
                required: "This field is required",
              })}
            />
            <Button variant="contained" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
