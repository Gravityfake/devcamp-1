import { useParams } from "react-router-dom";

function WarehouseDetail() {
  let param = useParams();
  console.log(param);
  return (
    <div style={{ margin: "50px" }}>
      <h2>Warehouse Detail</h2>

      <p>ID: {param.id}</p>
      <p>Name: {param.warehouse_name}</p>
      <p>Latitude: {param.latitude}</p>
      <p>Longitude: {param.longitude}</p>
      <p>Tel: {param.tel}</p>
      <p>Fax: {param.fax}</p>
    </div>
  );
}

export default WarehouseDetail;
