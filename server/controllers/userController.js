const User = require("../model/user");

exports.postNewUser = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const mobile = req.body.mobile;
  const idtype = req.body.idtype;
  const idvalue = req.body.idvalue;
  const guardianName = req.body.guardianName;
  const email = req.body.email;
  const emergencyNumber = req.body.emergencyNumber;
  const address = req.body.address;
  const state = req.body.state;
  const city = req.body.city;
  const country = req.body.country;
  const pincode = req.body.pincode;
  const occupation = req.body.occupation;
  const religion = req.body.religion;
  const maritalStatus = req.body.maritalStatus;
  const blood = req.body.blood;
  const nationality = req.body.nationality;

  User.create({
    name,
    age,
    sex,
    mobile,
    idtype,
    idvalue,
    guardianName,
    email,
    emergencyNumber,
    address,
    state,
    city,
    country,
    pincode,
    occupation,
    religion,
    maritalStatus,
    blood,
    nationality,
  })
    .then((result) => {
      console.log(result);
      return res.json({ user: result.dataValues });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      return res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
};
