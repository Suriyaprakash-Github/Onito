import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import DataTable from "datatables.net-dt";

import "./UserList.css";

const UserList = () => {
  const [user, setuser] = useState();
  useEffect(() => {
    const getUserDetails = async () => {
      await axios
        .get("http://localhost:4000/user/getUsers")
        // .then((res) => console.log(res.data))
        .then((res) => setuser(res.data))
        .catch((err) => console.log(err));
    };
    getUserDetails();
  }, [user]);

  document.addEventListener("DOMContentLoaded", function () {
    let table = new DataTable("#table");
  });
  return (
    <>
      <div>
        <Button>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            User Form
          </Link>
        </Button>
        <div id="example_wrapper" class="dataTables_wrapper">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div class="dataTables_length" id="example_length">
              <label>
                Show
                <select name="example_length" aria-controls="example" class="">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div id="example_filter" class="dataTables_filter">
              <label>
                Search:
                <input
                  type="search"
                  class=""
                  placeholder=""
                  aria-controls="example"
                />
              </label>
            </div>
          </div>
          <table
            id="example"
            class="display dataTable"
            style={{ width: "90%" }}
            aria-describedby="example_info"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Age/Sex</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Govt ID</th>
                <th>Guardian Details</th>
                <th>Nationality</th>
              </tr>
            </thead>
            {user && (
              <tbody>
                {user.map((user) => {
                  return (
                    <>
                      <tr className="rows">
                        <td> {user.name}</td>
                        <td>
                          {user.age}/{user.sex}
                        </td>
                        <td> {user.mobile}</td>
                        <td> {user.address}</td>
                        <td>
                          {user.idtype}: {user.idvalue}
                        </td>
                        <td>
                          {user.guardianName}, {user.emergencyNumber}
                        </td>
                        <td> {user.nationality}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
