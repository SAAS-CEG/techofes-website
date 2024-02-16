<<<<<<< HEAD
import { TextField } from '@mui/material';
import Header from '../components/Header';

const Registration = () => {
	return (
		<>
			<Header />
			<div className="flex flex-col justify-center items-center my-10">
				<h1 className="text-2xl my-5">Event 1</h1>

				<p className="mb-10 mx-5 font-light text-gray-600">awldnawl dawld lawdlka wld alw dl awld aw ldawl dla wlkd alw dlaw ld awlflnalfnsenlfknlesk flse lf slek s</p>

				<form method="post" action="#" className="flex flex-col gap-y-5">
					<TextField id="outlined-basic" label="Name" variant="outlined" className="w-80" />
					<TextField id="outlined-basic" label="Phone number" variant="outlined" className="w-80" />
					<TextField id="outlined-basic" label="College name" variant="outlined" className="w-80" />
				</form>
			</div>
		</>
	);
=======
import { Button, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";
import { data } from "autoprefixer";

const Registration = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="justify-center items-center h-[1350px] w-[800px] rounded-2xl p-4 shadow-2xl">
          <h1 className="text-4xl my-5 justify-center items-center flex">
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
              label="firstName"
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
>>>>>>> 58b91fc5b02cf4ca5391208dfe3e21ff3536013c
};

export default Registration;
