import "./App.css";
import React from "react";
import PictureCard3 from "./PictureCard3";

let data = [
  {
    id: 101,
    img: "https://picsum.photos/902",
    createdBy: "Jack",
    likeCount: 12,
    commentCount: 34,
  },
  {
    id: "002",
    img: "https://picsum.photos/903",
    createdBy: "Jane",
    likeCount: 0,
    commentCount: 13,
  },
  {
    id: 341,
    img: "https://picsum.photos/801",
    createdBy: "Mike",
    likeCount: 2,
    commentCount: 8,
  },
  {
    id: 252,
    img: "https://picsum.photos/802",
    createdBy: "Anne",
    likeCount: 4,
    commentCount: 10,
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {data.map((x) => {
        return (
          <PictureCard3
            key={x.id}
            id={x.id}
            img={x.img}
            createdBy={x.createdBy}
            likeCount={x.likeCount}
            commentCount={x.commentCount}
          />
        );
      })}
    </div>
  );
}

export default App;
