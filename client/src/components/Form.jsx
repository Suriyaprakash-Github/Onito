import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  sex: yup.string().required(),
  mobile: yup
    .string()
    .matches("^[98765]{1}[0-9]{9}$", { excludeEmptyString: true }),
  idtype: yup.string().notRequired(),
  idvalue: yup.string().when("idtype", {
    is: (val) => val === "aadhaar",
    then: (schema) =>
      schema.matches("[0-9]{12}", {
        message: "enter correct aadhaar details",
        excludeEmptyString: true,
      }),
    otherwise: (schema) =>
      schema.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", {
        message: "Enter details correctly",
        excludeEmptyString: true,
      }),
  }),
  guardianName: yup.string(),
  email: yup.string().email(),
  emergencyNumber: yup
    .string()
    .matches("^[98765]{1}[0-9]{9}$", { excludeEmptyString: true }),
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup.string().matches("[0-9]{6}", { excludeEmptyString: true }),
  occupation: yup.string(),
  religion: yup.string(),
  maritalStatus: yup.string(),
  blood: yup.string(),
  naionality: yup.string(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    delayError: 2000,
  });

  const formSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* Personal Details */}
          <h2>Personal Details</h2>

          <label htmlFor="name">Name:</label>
          <input {...register("name")} id="name" placeholder="Enter Name" />
          <p>{errors.name?.message}</p>

          <label htmlFor="age">Age</label>
          <input {...register("age")} id="age" placeholder="Age in Years" />
          <p>{errors.age?.message}</p>

          <label htmlFor="sex">Sex</label>
          <select {...register("sex")} id="sex">
            <option value="">Enter Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="mobile">Mobile</label>
          <input
            {...register("mobile")}
            id="mobile"
            placeholder="Enter Mobile"
          />

          <label htmlFor="idtype">Govt Issued ID</label>
          <select {...register("idtype")} id="idtype">
            <option value="">ID Type</option>
            <option value="pan">PAN</option>
            <option value="aadhaar">Aadhaar</option>
          </select>
          <input
            {...register("idvalue")}
            placeholder="Enter Govt ID"
            id="idvalue"
          />
          <p>{errors.idvalue?.message}</p>

          {/* contact details */}
          <h2>Contact Details</h2>

          <label htmlFor="label">Guardian Details</label>
          <select {...register("label")} id="label">
            <option value="">Enter Label</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="ms">Ms.</option>
          </select>
          <input
            {...register("guardianName")}
            id="guardianName"
            placeholder="Enter Guardian Name"
          />

          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" />

          <label htmlFor="emergencyNumber">Emergency Contact Number</label>
          <input {...register("emergencyNumber")} id="emergencyNumber" />

          {/* address details */}
          <h2>Address Details</h2>

          <label htmlFor="address">Address</label>
          <input {...register("address")} id="address" />

          <label htmlFor="state">State</label>
          <select {...register("state")} id="state">
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>

          <label htmlFor="city">City</label>
          <input {...register("city")} id="city" />

          <label htmlFor="country">Country</label>
          <input {...register("country")} id="country" defaultValue={"India"} />

          <label htmlFor="pincode">Pincode</label>
          <input {...register("pincode")} id="pincode" />

          {/* other details */}
          <h2>Other Details</h2>

          <label htmlFor="occupation">Occupation</label>
          <input type="text" {...register("occupation")} id="occupation" />

          <label htmlFor="religion">Religion</label>
          <input type="text" {...register("religion")} id="religion" />

          <label htmlFor="maritalStatus">Marital Status</label>
          <input
            type="text"
            {...register("maritalStatus")}
            id="maritalStatus"
          />

          <label htmlFor="blood">Blood Group</label>
          <input type="text" {...register("blood")} id="blood" />

          <label htmlFor="naionality">Nationality</label>
          <input type="text" {...register("naionality")} id="naionality" />

          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
