import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./UserForm.css";

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

const UserForm = () => {
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
      <Container className="formContainer">
        <Form onSubmit={handleSubmit(formSubmitHandler)}>
          <Container>
            <h2>Personal Details</h2>

            <Row className="row">
              <Col sm={5}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="name">
                    Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      {...register("name")}
                      id="name"
                      placeholder="Enter Name"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="age">
                    Age
                  </Form.Label>
                  <Col>
                    <Form.Control
                      {...register("age")}
                      id="age"
                      placeholder="Age in Years"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label sm={2} column htmlFor="sex">
                    Sex
                  </Form.Label>
                  <Col>
                    <Form.Select {...register("sex")} id="sex">
                      <option value="">Enter Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={5}>
                <Form.Group as={Row}>
                  <Form.Label sm={2} column htmlFor="mobile">
                    Mobile
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control
                      {...register("mobile")}
                      id="mobile"
                      placeholder="Enter Mobile"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm={5} htmlFor="idtype">
                    Govt Issued ID
                  </Form.Label>
                  <Col>
                    <Form.Select {...register("idtype")} id="idtype">
                      <option value="">ID Type</option>
                      <option value="pan">PAN</option>
                      <option value="aadhaar">Aadhaar</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Col>
                    <Form.Control
                      {...register("idvalue")}
                      placeholder="Enter Govt ID"
                      id="idvalue"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>

          {/* contact details */}
          <Container>
            <h2>Contact Details</h2>

            <Row>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={7} htmlFor="Form.Label">
                    Guardian Details
                  </Form.Label>
                  <Col>
                    <Form.Select
                      {...register("Form.Label")}
                      id="Form.Label"
                      sm={2}
                    >
                      <option value="">Enter Label</option>
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
                      <option value="mrs">Mrs.</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group as={Row}>
                  <Col>
                    <Form.Control
                      {...register("guardianName")}
                      id="guardianName"
                      placeholder="Enter Name"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="email">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control {...register("email")} id="email" />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group as={Row}>
                  <Form.Label column htmlFor="emergencyNumber">
                    Emergency Contact Number
                  </Form.Label>
                  <Col>
                    <Form.Control
                      {...register("emergencyNumber")}
                      id="emergencyNumber"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>

          {/* address details */}
          <Container>
            <h2>Address Details</h2>

            <Row>
              <Col sm={5}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="address">
                    Address
                  </Form.Label>
                  <Col>
                    <Form.Control {...register("address")} id="address" />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="state">
                    State
                  </Form.Label>
                  <Col>
                    <Form.Select {...register("state")} id="state">
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
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="city">
                    City
                  </Form.Label>
                  <Col>
                    <Form.Control {...register("city")} id="city" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm={5}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="country">
                    Country
                  </Form.Label>
                  <Col>
                    <Form.Control
                      {...register("country")}
                      id="country"
                      defaultValue={"India"}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group as={Row}>
                  <Form.Label column sm={2} htmlFor="pincode">
                    Pincode
                  </Form.Label>
                  <Col>
                    <Form.Control {...register("pincode")} id="pincode" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>

          {/* other details */}
          <Container>
            <h2>Other Details</h2>

            <Row>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={4} htmlFor="occupation">
                    Occupation
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      {...register("occupation")}
                      id="occupation"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label sm={4} column htmlFor="religion">
                    Religion
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      {...register("religion")}
                      id="religion"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label sm={6} column htmlFor="maritalStatus">
                    Marital Status
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      {...register("maritalStatus")}
                      id="maritalStatus"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label sm={6} column htmlFor="blood">
                    Blood Group
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      {...register("blood")}
                      id="blood"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Group as={Row}>
                  <Form.Label column htmlFor="naionality">
                    Nationality
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      {...register("naionality")}
                      id="naionality"
                      defaultValue={"Indian"}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <section className="d-flex justify-content-end">
            <Button type="submit">Submit</Button>
          </section>
        </Form>
      </Container>
    </>
  );
};

export default UserForm;
