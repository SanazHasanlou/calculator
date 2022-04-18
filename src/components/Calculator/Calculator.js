import { useState } from "react";
import { Container, Screen, Button, Previuos, Current } from "./styled/styled";

const Calculator = () => {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [opration, setOpration] = useState("");

  const appendData = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const allClearHandler = () => {
    setCurrent("");
    setPrevious("");
    setOpration("");
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const chooseOpration = (e) => {
    if (current === "") return;

    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOpration(e.target.getAttribute("data"));
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    switch (opration) {
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "÷":
        result = previousNumber / currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

const equalHandler = () => {
  let value = compute();
  if (value === undefined || value === null) return

  setCurrent(value)
  setPrevious('')
  setOpration('')

}

  return (
    <Container>
      <Screen>
        <Previuos>{previous} {opration}</Previuos>
        <Current>{current}</Current>
      </Screen>
      <Button gridSpan={2} control onClick={allClearHandler}>
        AC
      </Button>
      <Button control onClick={deleteHandler}>
        Del
      </Button>
      <Button data={"÷"} opration onClick={chooseOpration}>
        ÷
      </Button>
      <Button data={"7"} onClick={appendData}>
        7
      </Button>
      <Button data={"8"} onClick={appendData}>
        8
      </Button>
      <Button data={"9"} onClick={appendData}>
        9
      </Button>
      <Button data={"×"} onClick={chooseOpration} opration>
        ×
      </Button>
      <Button data={"4"} onClick={appendData}>
        4
      </Button>
      <Button data={"5"} onClick={appendData}>
        5
      </Button>
      <Button data={"6"} onClick={appendData}>
        6
      </Button>
      <Button data={"+"} onClick={chooseOpration} opration>
        +
      </Button>
      <Button data={"1"} onClick={appendData}>
        1
      </Button>
      <Button data={"2"} onClick={appendData}>
        2
      </Button>
      <Button data={"3"} onClick={appendData}>
        3
      </Button>
      <Button data={"-"} onClick={chooseOpration} opration>
        -
      </Button>
      <Button data={"."} onClick={appendData} control dot>
        .
      </Button>
      <Button data={"0"} onClick={appendData}>
        0
      </Button>
      <Button opration equal gridSpan={2} data={"="} onClick={equalHandler}>
        =
      </Button>
    </Container>
  );
};

export default Calculator;
