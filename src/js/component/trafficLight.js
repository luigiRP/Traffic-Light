import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TrafficLight(props) {
	let styling = "light my-1";
	let defaultColor = props.color;
	let glow = props.colorGlow;

	return <div className={styling.concat(" ", props.color, " ", glow)} />;
}

TrafficLight.propTypes = {
	color: PropTypes.string,
	colorGlow: PropTypes.string
};
