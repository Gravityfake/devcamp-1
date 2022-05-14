import { useParams, useLocation } from "react-router-dom";

function EmployeeDetail() {
  const location = useLocation();
  let employeeDetail = location.state;
  // let param = useParams();
  // console.log(param);
  const moreDetail = () => {};
  return (
    <div style={{ margin: "50px" }}>
      <h2>Employee Detail</h2>

      <p>ID: {employeeDetail.id}</p>
      <p>First Name: {employeeDetail.firstname}</p>
      <p>Last Name: {employeeDetail.lastname}</p>
      <p>Age: {employeeDetail.age}</p>
      <p>Gender: {employeeDetail.gender}</p>
      <p>Phone Number: {employeeDetail.phoneNumber}</p>
      <p>Position: {employeeDetail.position}</p>
      <p>Department: {employeeDetail.department}</p>
      <p>salary: {employeeDetail.salary}</p>
    </div>
  );
}

export default EmployeeDetail;
