import { useParams } from "react-router-dom";

function PortfolioDetail() {
  let param = useParams();
  console.log(param);
  return (
    <>
      <h2>Portfolio Detail</h2>
      <p>กำลังดู portfolio {param.no}</p>
    </>
  );
}

export default PortfolioDetail;
