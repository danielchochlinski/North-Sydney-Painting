import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
function ProgressBar({ value, max, color, width, description }) {
  const Container = Styled.div`
    progress {
        margin-right: 10px;
        margin-left: 10px;
        display: flex;
        margin-top:10px;
        margin-bottom:10px;
    }
  
    progress[value] {
        width: ${(props) => props.width};
        -webkit-appearance: none;
        appearance: none
    }
    progress[value]::-webkit-progress-bar {
        height: 15px;
        border-radius:20px;
        background-color: #eee;

    }
    progress[value]::-webkit-progress-value {
         height: 15px;
        background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);   
        border-radius:20px;
        background-color: ${(props) => props.color}
    }
   .descriptionn{
margin-left: 30px;   }
    .percentage{
      float: right;
    }
`;

  return (
    <Container color={color} width={width}>
      <span className="descriptionn">{description}</span>
      <span className="percentage">{(value / max) * 100} %</span>
      <progress value={value} max={max}></progress>
    </Container>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};
ProgressBar.defaultProps = {
  max: 100,
  color: " linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
  width: "100%",
};
export default ProgressBar;
