import React from "react";
import PropTypes from "prop-types";

const Grid = ({ columns, children }) => {
  const grid = {
    display: "grid",
    gridTemplateColumns: columns
  };

  return <div style={grid}>{children}</div>;
};

Grid.propTypes = {
  columns: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Grid;
