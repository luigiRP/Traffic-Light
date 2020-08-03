import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	switch (color) {
		case "red":
			// code block
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div
							className="light my-1 red active"
							onClick={() => setColor("red")}
						/>
						<div
							className="light my-1 yellow"
							onClick={() => setColor("yellow")}
						/>
						<div
							className="light my-1 green"
							onClick={() => setColor("green")}
						/>
					</div>
				</div>
			);
			break;
		case "yellow":
			// code block
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div
							className="light my-1 red "
							onClick={() => setColor("red")}
						/>
						<div
							className="light my-1 yellow active"
							onClick={() => setColor("yellow")}
						/>
						<div
							className="light my-1 green"
							onClick={() => setColor("green")}
						/>
					</div>
				</div>
			);
			break;
		case "green":
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div
							className="light my-1 red "
							onClick={() => setColor("red")}
						/>
						<div
							className="light my-1 yellow "
							onClick={() => setColor("yellow")}
						/>
						<div
							className="light my-1 green active"
							onClick={() => setColor("green")}
						/>
					</div>
				</div>
			);
			break;

		default:
			return (
				<div>
					<div className="trafficStick" />
					<div className="trafficWhole d-flex flex-column justify-content-around">
						<div
							className="light my-1 red "
							onClick={() => setColor("red")}
						/>
						<div
							className="light my-1 yellow "
							onClick={() => setColor("yellow")}
						/>
						<div
							className="light my-1 green "
							onClick={() => setColor("green")}
						/>
					</div>
				</div>
			);
		// code block
	}
}
