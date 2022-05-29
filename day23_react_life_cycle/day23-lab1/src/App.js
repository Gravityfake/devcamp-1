import "./App.css";
import React from "react";

// ใช้ใน lab1 กับ lab2
// class App extends React.Component {
//   render() {
//     return <Data name="THIS IS TEST" />;
//   }
// }

// // Lab1 Mounting -----------------------------------------------------------------------
// class Data extends React.Component {
//   // step 1
//   constructor() {
//     super();
//     console.log("constructor");
//     this.state = { value: 1 };
//   }

//   // step 2 - เซ็ตค่าเข้าไปใน state แต่ไม่ค่อยได้ใช้
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//     let accessDate = new Date();
//     // return props; จะทำให้ตัว props เข้ามาใน state ด้วย
//     return { ...props, accessDate };
//   }

//   // step 4 ทำงานหลัง render เสร็จ ไว้ใช้ยิง api อะไรงี้
//   // method ที่เราต้องการให้ทำงานครั้งแรก เมื่อ component ทำงาน
//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   // step 3
//   render() {
//     console.log("render");
//     console.log(this.state);
//     return <h1>{this.props.name}</h1>;
//   }
// }

// Lab2 Updating ----------------------------------------------------------------------
// class Data extends React.Component {
//   constructor() {
//     super();
//     console.log("constructor");
//     this.state = { value: 1 };
//   }

//   // step 1 เป็น method เดิมใน mounting ถ้ามีการอัพเดท อันนี้ก็จะทำงาน
//   static getDerivedStateFromProps(props, state) {
//     // console.log("getDerivedStateFromProps");
//     return props;
//   }

//   // componentDidMount() {
//   //   console.log("componentDidMount");
//   // }

//   // step 2 จะคือค่าเป็น boolean
//   // เป็นตัว control การ render ว่าจะเรนเด้อหรือไม่ ส่วน function ยังทำงานปกติ
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate", nextState);
//     // return true;
//     // return nextState.value < 10 ? true : false;
//     return nextState.value % 5 === 0 ? true : false;
//   }

//   // step 4 ทำงานหลังจากที่ state หรือ props มีการอัพเดทแล้ว (ไม่ค่อยได้ใช้บ่อย)
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log(prevState); // ถ้า value ใน state ตอนนี้คือ 5 ก็จะ log ออกมาได้ 4
//     console.log(this.state);
//     console.log(prevProps);
//     console.log("getSnapshotBeforeUpdate");
//     return "UPDATE";
//     // return null;
//   }

//   // step 5 ทำงานท้ายสุด เมื่อ p กับ s มีการอัพเดทและถูก render เข้า dom เรียบร้อยแล้ว
//   // รับค่า snapshot มาจาก step 4
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot); // log มาได้เป็น UPDATE เพราะ step 4 เรา return "UPDATE";
//     console.log("componentDidUpdate");
//     this.calculate(prevState.value, this.state.value);
//   }

//   calculate = (a, b) => {
//     console.log(a * b);
//   };

//   // step 3
//   render() {
//     console.log("render");
//     return (
//       <>
//         <h1>{this.props.name}</h1>
//         <h3>{this.state.value}</h3>
//         <input
//           type="button"
//           value="click"
//           onClick={() => this.setState({ value: this.state.value + 1 })}
//         />
//       </>
//     );
//   }
// }

// Lab3 Unmounting -----------------------------------------------------------------------------
class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = { showComponent: true };
  }

  render() {
    return (
      <>
        <input
          type="button"
          value="SHOW / HIDE"
          onClick={() =>
            this.setState({ showComponent: !this.state.showComponent })
          }
        />
        {this.state.showComponent ? (
          <Data name="THIS IS TEST" />
        ) : (
          <h1>Component is HIDE</h1>
        )}
      </>
    );
  }
}

class Data extends React.Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = { value: 1 };
  }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log("getDerivedStateFromProps");
  //   return props;
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("shouldComponentUpdate");
  //   return nextState.value < 10 ? true : false;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // console.log("getSnapshotBeforeUpdate");
  //   return "UPDATE";
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(snapshot);
  //   console.log("componentDidUpdate");
  // }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>{this.props.name}</h1>
        <h3>{this.state.value}</h3>
        <input
          type="button"
          value="click"
          onClick={() => this.setState({ value: this.state.value + 1 })}
        />
      </>
    );
  }
}

export default App;
