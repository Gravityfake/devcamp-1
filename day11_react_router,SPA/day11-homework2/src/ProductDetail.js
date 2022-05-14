import { useParams } from "react-router-dom";

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (
    <>
      <h2>KitKat Detail</h2>
      <p>This is {param.id}</p>
    </>
  );
}

export default ProductDetail;
