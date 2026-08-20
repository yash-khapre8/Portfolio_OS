import React from "react";
import { useSelector } from "react-redux";
import DesktopContainer from "./desktop.container";
import ShutDown from "./shutDown.container";

function Windows() {
	const systemState = useSelector((state) => state.systemState);

	return (
		<div className="uk-width-expand">
			{systemState.isShutDown ? <ShutDown /> : <DesktopContainer />}
		</div>
	);
}

export default Windows;
