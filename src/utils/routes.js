import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlueScreen404 from "../containers/blueScreen404.container";
import Windows from "../containers/windows.container";
import MacOS from "../containers/macOS.container";
import OSSelection from "../containers/osSelection.container";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Windows />} />
			<Route path="/windows10" element={<Windows />} />
			<Route path="/macOS" element={<MacOS />} />
			<Route path="/windows" element={<Windows />} />
			<Route path="/select" element={<OSSelection />} />
			<Route path="/404" element={<BlueScreen404 />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

export default AppRoutes;
