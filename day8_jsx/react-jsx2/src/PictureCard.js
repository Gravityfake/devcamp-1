let today = new Date();

const people = [
  {
    img: "https://picsum.photos/901",
    name: "pic 01",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 2,
    comment: 10,
  },
  {
    img: "https://picsum.photos/902",
    name: "pic 02",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 5,
    comment: 8,
  },
  {
    img: "https://picsum.photos/903",
    name: "pic 03",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 5,
    comment: 3,
  },
  {
    img: "https://picsum.photos/904",
    name: "pic 04",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 11,
    comment: 15,
  },
  {
    img: "https://picsum.photos/905",
    name: "pic 05",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 5,
    comment: 9,
  },
  {
    img: "https://picsum.photos/906",
    name: "pic 06",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 7,
    comment: 7,
  },
  {
    img: "https://picsum.photos/907",
    name: "pic 07",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 10,
    comment: 20,
  },
  {
    img: "https://picsum.photos/908",
    name: "pic 08",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 1,
    comment: 2,
  },
];

const css = {
  display: "inline-block",
  width: "22%",
  margin: "1%",
  backgroundColor: "wheat",
};

const message = people.map((x, i) => {
  return (
    <div style={css} key={`pictures${i}`}>
      <div style={{ padding: "10px" }}>
        <img style={{ maxWidth: "100%" }} src={x.img} alt={x.name} />
      </div>
      <div>
        <h3>{x.name}</h3>
        <h3>Date: {x.date}</h3>
        <h3>{x.like} likes</h3>
        <h3>{x.comment} comments</h3>
      </div>
    </div>
  );
});

const PictureCard = () => {
  return <div>{message}</div>;
};

export default PictureCard;
