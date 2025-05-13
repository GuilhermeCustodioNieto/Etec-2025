import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { getApi, postApi } from "../service/CalculatorApi.service";

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    if (num == 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  async function clear() {
    const result = await getApi("clear");
    setNum(result);
  }

  function porcentage() {
    setNum(postApi("porcentage", { num: num }));
  }

  function changeSign() {
    setNum(postApi("changeSign", { num: num }));
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    setNum(
      postApi("calculate", { num1: oldNum, num2: num, operator: operator })
    );
  }

  return (
    <div>
      <Box m={5}></Box>
      <Container maxWidth="xs">
        <div className={styles.wrapper}>
          <Box m={12}></Box>
          <h1 className={styles.result}>{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button
            className={styles.orange}
            onClick={operatorHandler}
            value={"/"}
          >
            /
          </button>
          <button className={styles.gray} onClick={inputNum} value={7}>
            7
          </button>
          <button className={styles.gray} onClick={inputNum} value={8}>
            8
          </button>
          <button className={styles.gray} onClick={inputNum} value={9}>
            9
          </button>
          <button
            className={styles.orange}
            onClick={operatorHandler}
            value={"X"}
          >
            X
          </button>
          <button className={styles.gray} onClick={inputNum} value={4}>
            4
          </button>
          <button className={styles.gray} onClick={inputNum} value={5}>
            5
          </button>
          <button className={styles.gray} onClick={inputNum} value={6}>
            6
          </button>
          <button
            className={styles.orange}
            onClick={operatorHandler}
            value={"-"}
          >
            -
          </button>
          <button className={styles.gray} onClick={inputNum} value={1}>
            1
          </button>
          <button className={styles.gray} onClick={inputNum} value={2}>
            2
          </button>
          <button className={styles.gray} onClick={inputNum} value={3}>
            3
          </button>
          <button
            className={styles.orange}
            onClick={operatorHandler}
            value={"+"}
          >
            +
          </button>
          <button className={styles.gray} onClick={inputNum} value={0}>
            0
          </button>
          <button className={styles.gray} onClick={inputNum} value={"."}>
            ,
          </button>
          <button className={(styles.gray, styles.hidden)}>=</button>
          <button className={styles.orange} onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Calculator;
