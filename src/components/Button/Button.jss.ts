import { StyleSheet } from 'react-jss';
import { IButtonProps } from './Button';

const styles: StyleSheet<IButtonProps> = {
  Button: {
    composes: "muller-14 from 'assets/styles/fonts.css'",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    transition: "all 0.5s",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    minWidth: 50,
    padding: "0 30px",
    border: "0"
  },
  "Button:disabled": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "Button .Icon": {
    marginLeft: 10
  },
  Spinner: {
    position: "absolute",
    right: 10,
    top: "initial",
    width: 14
  },
  Primary: {
    composes: "Button",
    minHeight: 42,
    backgroundColor: "var(--primary-red)",
    color: "var(--white)",
    boxShadow: "0 15px 20px -15px var(--primary-shadow-red-rbga)",
    fill: "var(--white)"
  },
  "Primary:hover, .Primary:focus": {
    background: "var(--primary-hover-red)",
    boxShadow: "0 18px 20px -15px var(--primary-shadow-red-rbga)"
  },
  "Secondary": {
    composes: "Button"
  },
  "Secondary:hover": {
    color: "var(--hover-red)"
  },
  "Inline": {
    composes: "Button",
    fill: "var(--white)",
    color: "var(--white)",
    display: "inline-flex",
    justifyContent: "center"
  },
  "Inline:hover": {
    color: "var(--hover-red)"
  },
  "Outline": {
    composes: "Button",
    minHeight: 42,
    border: "2px solid white",
    color: "white"
  },
  "Outline:hover, .Outline:focus": {
    background: "white",
    color: "var(--primary-red)"
  },
  "SmallOutline": {
    composes: "muller-11-thin from 'assets/styles/fonts.css'",
    textTransform: "uppercase",
    height: 26,
    backgroundColor: "transparent",
    maxWidth: "100%",
    padding: "0 9px",
    flexDirection: "row-reverse"
  },
  "SmallOutline .Spinner": {
    marginLeft: 5,
    order: -1,
    right: 0,
    height: "auto",
    width: 10,
    position: "relative"
  },
  "SmallOutline .Icon": {
    marginLeft: "0",
    marginRight: 5,
    width: 10
  },
  "SmallOutline:hover, .SmallOutline:focus": {
    border: "1px solid var(--primary-red)",
    color: "var(--white)",
    fill: "var(--white)",
    backgroundColor: "var(--primary-red)"
  },
  "SmallOutlineRed": {
    composes: "SmallOutline",
    border: "1px solid var(--primary-red)",
    color: "var(--primary-red)",
    fill: "var(--primary-red)"
  },
  "SmallOutlineRed .Spinner": {
    stroke: "var(--primary-red)"
  },
  "SmallOutline:hover .Spinner, .SmallOutline:focus .Spinner": {
    stroke: "white"
  },
  "SmallOutline:hover .Spinner": {
    stroke: "var(--white)"
  },
  "SmallOutline:hover, .SmallOutlineRed:focus": {
    border: "1px solid var(--primary-red)",
    color: "var(--white)",
    fill: "var(--white)",
    backgroundColor: "var(--primary-red)"
  },
  "SmallOutlineWhite": {
    composes: "SmallOutline",
    border: "1px solid white",
    color: "white",
    fill: "white"
  }
};


export default styles;