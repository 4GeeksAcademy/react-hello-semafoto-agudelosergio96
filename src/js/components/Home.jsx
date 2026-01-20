import React, { useState } from "react";

const TrafficLight = () => {
	// Aquí guardas cuál color está "prendido"
	const [color, setColor] = useState("");

	return (
		<div className="wrapper">
			<div className="pole"></div>

			<div className="traffic">
				<div
					className={"light red " + (color === "red" ? "selected" : "")}
					onClick={() => setColor("red")}
				></div>

				<div
					className={"light yellow " + (color === "yellow" ? "selected" : "")}
					onClick={() => setColor("yellow")}
				></div>

				<div
					className={"light green " + (color === "green" ? "selected" : "")}
					onClick={() => setColor("green")}
				></div>
			</div>
		</div>
	);
};

export default TrafficLight;
