import React from "react";
import "../style.css";

interface PreloaderProps {
  load: boolean;
}

const Pre: React.FC<PreloaderProps> = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
