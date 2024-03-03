import { Button, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm } from 'react-hook-form';
import { DateField } from '@mui/x-date-pickers';

const Registration = () => {
	const { register, handleSubmit, formState } = useForm();
	const { errors } = formState;

	function onSubmit(data) {
		console.log(data);
	}

	const sxx = {
		input: {
			color: 'white',
		},
		'& label': {
			color: 'white',
		},
		'& .MuiInput-underline': {
			borderBottomColor: 'white',
		},
		'& label.Mui-focused': {
			color: 'white',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'white',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'white',
			},
			'&:hover fieldset': {
				borderColor: 'white',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'white',
			},
		},
	};

	return (
		<>
			<div className='flex flex-col justify-center items-center my-10 mt-28'>
				<div className='justify-center items-center h-[1350px] px-20 rounded-2xl bg-gray-300/10 shadow-2xl text-blue-500'>
					<h1 className='text-3xl md:text-4xl text-white my-5 justify-center items-center flex font-anta '>
						REGISTER
					</h1>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-y-10 justify-center items-center p-5'
					>
						{/* <label onError={errors?.firstname?.message}>sbxjsxns</label> */}

						<TextField
							error={errors?.firstname?.message}
							id='firstname'
							label='First Name'
							variant='outlined'
							className='w-80 text-white'
							sx={sxx}
							{...register('firstname', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.lastname?.message}
							id='lastname'
							label='lastName'
							variant='outlined'
							className='w-80'
							sx={sxx}
							{...register('lastname', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.email?.message}
							id='email'
							label='email'
							variant='outlined'
							className='w-80'
							sx={sxx}
							type='email'
							{...register('email', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.password?.message}
							id='password'
							label='Password'
							variant='outlined'
							className='w-80'
							sx={sxx}
							type='password'
							{...register('password', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.Phone?.message}
							id='Phone'
							label='Phone'
							variant='outlined'
							className='w-80'
							sx={sxx}
							type='number'
							{...register('Phone', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.Rollno?.message}
							id='Rollno'
							label='Register No'
							variant='outlined'
							className='w-80'
							sx={sxx}
							type='number'
							{...register('Rollno', {
								required: 'This field is required',
							})}
						/>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={['DateField']}>
								<DateField
									error={errors?.dob?.message}
									label='DOB'
									id='dob'
									sx={sxx}
									className='w-[325px]'
									{...register('dob', {
										required: 'This field is required',
									})}
								/>
							</DemoContainer>
						</LocalizationProvider>
						<TextField
							error={errors?.college_name?.message}
							id='college_name'
							label='College'
							variant='outlined'
							className='w-80'
							sx={sxx}
							{...register('college_name', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.department?.message}
							id='department'
							label='Department'
							variant='outlined'
							className='w-80'
							sx={sxx}
							{...register('department', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.city?.message}
							id='city'
							label='City'
							variant='outlined'
							className='w-80'
							sx={sxx}
							{...register('city', {
								required: 'This field is required',
							})}
						/>
						<TextField
							error={errors?.year?.message}
							id='year'
							label='Year of study'
							variant='outlined'
							className='w-80'
							sx={sxx}
							type='number'
							{...register('year', {
								required: 'This field is required',
								max: {
									value: 5,
									message: 'only 5 years',
								},
								min: {
									value: 1,
									message: 'min one year',
								},
							})}
						/>
						<TextField
							error={errors?.state?.message}
							id='state'
							label='State'
							variant='outlined'
							className='w-80'
							sx={sxx}
							{...register('state', {
								required: 'This field is required',
							})}
						/>
						<Button
							variant='contained'
							type='submit'
						>
							Register
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Registration;
