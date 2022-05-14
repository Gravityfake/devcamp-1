import { Link } from "react-router-dom";

function WarehouseLocation() {
  const warehouseList = [
    {
      id: "01",
      warehouse_name: "WH1",
      latitude: "13.736717",
      longitude: "100.523186",
      tel: "0801112222",
      fax: "555-123-4567",
    },
    {
      id: "02",
      warehouse_name: "WH2",
      latitude: "15.365478",
      longitude: "155.523186",
      tel: "0801118888",
      fax: "555-123-8888",
    },
    {
      id: "03",
      warehouse_name: "WH3",
      latitude: "56.856422",
      longitude: "119.523647",
      tel: "0921112222",
      fax: "555-444-4555",
    },
    {
      id: "04",
      warehouse_name: "WH4",
      latitude: "283.568767",
      longitude: "10.115536",
      tel: "0808885555",
      fax: "456-123-4567",
    },
    {
      id: "05",
      warehouse_name: "WH5",
      latitude: "167.524897",
      longitude: "100.5556666",
      tel: "0601112222",
      fax: "555-999-9999",
    },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <h2>Warehouse Location</h2>
      <ul>
        {warehouseList.map((x) => (
          <li>
            <Link
              to={`${x.id}/${x.warehouse_name}/${x.latitude}/${x.longitude}/${x.tel}/${x.fax}`}
            >
              {x.warehouse_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WarehouseLocation;
