import "./Container.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function Container() {
  const buttonStyle = { backgroundColor: "lightgreen" };
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="main">
        <div>
          <button
            onClick={() => dispatch(decrement())}
            className="btn font_size_80"
          >
            -
          </button>
        </div>
        <div className="font_size_80">{count}</div>
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="btn font_size_80"
          >
            +
          </button>
        </div>
      </div>
      {!!count && (
        <div onClick={() => dispatch(reset())} className="reset_container">
          <button className="btn_reset" style={buttonStyle}>
            RESET
          </button>
        </div>
      )}
    </div>
  );
}

export default Container;
