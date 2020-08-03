import React, { useState, useEffect } from "react";
import TrafficLight from "./trafficLight.js";

export function Home() {
	const colorRed = "red";
	const colorYellow = "yellow";
	const colorGreen = "green";

	const [glowColor, setColor] = useState("");

	switch (glowColor) {
		case "activered":
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div onClick={() => setColor("activered")}>
							<TrafficLight
								color={colorRed}
								colorGlow={glowColor}
							/>
						</div>
						<div onClick={() => setColor("activeyellow")}>
							<TrafficLight color={colorYellow} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activegreen")}>
							<TrafficLight color={colorGreen} colorGlow={""} />
						</div>
					</div>
				</div>
			);
			break;
		case "activeyellow":
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div onClick={() => setColor("activered")}>
							<TrafficLight color={colorRed} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activeyellow")}>
							<TrafficLight
								color={colorYellow}
								colorGlow={glowColor}
							/>
						</div>
						<div onClick={() => setColor("activegreen")}>
							<TrafficLight color={colorGreen} colorGlow={""} />
						</div>
					</div>
				</div>
			);
			break;

		case "activegreen":
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div onClick={() => setColor("activered")}>
							<TrafficLight color={colorRed} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activeyellow")}>
							<TrafficLight color={colorYellow} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activegreen")}>
							<TrafficLight
								color={colorGreen}
								colorGlow={glowColor}
							/>
						</div>
					</div>
				</div>
			);
			break;
		default:
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div onClick={() => setColor("activered")}>
							<TrafficLight color={colorRed} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activeyellow")}>
							<TrafficLight color={colorYellow} colorGlow={""} />
						</div>
						<div onClick={() => setColor("activegreen")}>
							<TrafficLight color={colorGreen} colorGlow={""} />
						</div>
					</div>
				</div>
			);
	}
}
