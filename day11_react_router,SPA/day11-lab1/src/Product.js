import { Link } from "react-router-dom";

function Product() {
  const productList = [
    { id: "01", name: "iPhone 11" },
    { id: "02", name: "iPhone 12" },
    { id: "03", name: "iPhone 13" },
    { id: "04", name: "iPhone 14" },
  ];
  return (
    <>
      <h2>Product</h2>
      <ul>
        {productList.map((x) => (
          <li>
            {/* x.id ก็จะต่อกับ path ปัจจุบัน */}
            <Link to={`${x.id}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
