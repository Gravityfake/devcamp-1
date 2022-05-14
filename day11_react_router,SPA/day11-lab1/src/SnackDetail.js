import { useLocation } from "react-router-dom";

function SnackDetail() {
  const location = useLocation();
  console.log(location);
  // assign data(location.state.data)
  let order = location.state.data;
  return (
    <>
      <h2>Snack Detail</h2>
      <h3>
        คุณสั่งขนาด <span style={{ fontWeight: "normal" }}>{order.size}</span>
      </h3>
      <h3>
        คุณสั่งรส{" "}
        {order.flavor.map((x) => (
          <span style={{ fontWeight: "normal" }}>{x} - </span>
        ))}
      </h3>
      <h3>
        เพิ่มเติม <span style={{ fontWeight: "normal" }}>{order.note}</span>
      </h3>
    </>
  );
}

export default SnackDetail;
