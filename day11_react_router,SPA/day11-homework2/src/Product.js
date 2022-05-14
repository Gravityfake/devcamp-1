import { Link } from "react-router-dom";

function Product() {
  const productList = [
    { id: "01", name: "KitKat Chocolate" },
    { id: "02", name: "KitKat Matcha" },
    { id: "03", name: "KitKat Pistachio" },
    { id: "04", name: "KitKat Strawberry" },
    { id: "05", name: "KitKat Milk Tea" },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <h2>KitKat</h2>
      <ul>
        {productList.map((x) => (
          <li>
            {/* x.id ก็จะต่อกับ path ปัจจุบัน */}
            <Link to={`${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
