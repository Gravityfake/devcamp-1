import React from "react";
import axios from "axios";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      address: "",
      subdistrict: "",
      district: "",
      province: "",
      postal_code: "",
      ident_num: "",
      company_name: "",
      company_address: "",
      position: "",
      working_year: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    console.log(this.state);
    alert("Your form has been submitted.");
    axios
      .post("http://localhost:3000/store-data", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      first_name,
      last_name,
      phone_number,
      address,
      subdistrict,
      district,
      province,
      postal_code,
      ident_num,
      company_name,
      company_address,
      position,
      working_year,
    } = this.state;
    return (
      <div>
        <h1 style={{ margin: "10px", textAlign: "center" }}>Form</h1>
        <form
          style={{ width: "50%", margin: "auto" }}
          onSubmit={this.handleSubmit}
        >
          {/* <form method="POST" action="http://localhost:3000/store-data"> */}

          <label class="form-label">First Name:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={first_name}
            name="first_name"
            onChange={this.handleChange}
          />

          <label class="form-label">Last Name:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={last_name}
            name="last_name"
            onChange={this.handleChange}
          />

          <label class="form-label">Phone Number:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={phone_number}
            name="phone_number"
            onChange={this.handleChange}
          />

          <label class="form-label">Address:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={address}
            name="address"
            onChange={this.handleChange}
          />

          <label class="form-label">Subdistrict:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={subdistrict}
            name="subdistrict"
            onChange={this.handleChange}
          />

          <label class="form-label">District:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={district}
            name="district"
            onChange={this.handleChange}
          />

          <label class="form-label">Province:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={province}
            name="province"
            onChange={this.handleChange}
          />

          <label class="form-label">Postal Code:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={postal_code}
            name="postal_code"
            onChange={this.handleChange}
          />

          <label class="form-label">Identity Number:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={ident_num}
            name="ident_num"
            onChange={this.handleChange}
          />

          <label class="form-label">Company Name:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={company_name}
            name="company_name"
            onChange={this.handleChange}
          />

          <label class="form-label">Company Address:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={company_address}
            name="company_address"
            onChange={this.handleChange}
          />

          <label class="form-label">Position:</label>
          <input
            class="form-control mb-3"
            type="text"
            value={position}
            name="position"
            onChange={this.handleChange}
          />

          <label class="form-label">Working Year:</label>
          <input
            class="form-control mb-3"
            type="number"
            value={working_year}
            name="working_year"
            onChange={this.handleChange}
          />
          <div class="text-center">
            <button className="btn btn-success mb-5" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
