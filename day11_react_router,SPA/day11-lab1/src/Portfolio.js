import { Link } from "react-router-dom";

function Portfolio() {
  const portfolioList = [
    { no: "01", name: "Portfolio 1" },
    { no: "02", name: "Portfolio 2" },
  ];
  return (
    <>
      <h2>Portfolio จ้า</h2>
      <ul>
        {portfolioList.map((x) => (
          <li>
            {/* x.no ก็จะต่อกับ path ปัจจุบันของ portfolio */}
            <Link to={`${x.no}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Portfolio;
