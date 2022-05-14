import { useParams, useLocation } from "react-router-dom";

function WarehouseDetail2() {
  const location = useLocation();
  let w = location.state;
  console.log(w);

  // let param = useParams();
  // console.log(param);
  return (
    <div style={{ margin: "50px" }}>
      <h2>Warehouse Detail2</h2>

      <p>ID: {w.id}</p>
      <p>Name: {w.warehouse_name}</p>
      <p>Latitude: {w.latitude}</p>
      <p>Longitude: {w.longitude}</p>
      <p>Tel: {w.tel}</p>
      <p>Fax: {w.fax}</p>
    </div>
  );
}

export default WarehouseDetail2;
