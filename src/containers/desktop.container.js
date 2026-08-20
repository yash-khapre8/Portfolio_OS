import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initApplications } from "../utils/actions/app.action";
import Desktop from "../components/desktop/desktop";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/contextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/documents/enums";
import TechBackground from "../components/base/techBackground";

const MENU_ID = "context-menu";

function DesktopContainer() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initApplications());
	}, [dispatch]);

	const { show } = useContextMenu({
		id: MENU_ID,
	});

	function handleContextMenu(event) {
		event.preventDefault();
		show(event, {
			props: {
				key: "value",
			},
		});
	}

	return (
		<div
			className="screenHeight"
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
				backgroundColor: "#080d1a",
			}}
			onContextMenu={handleContextMenu}
		>
			<TechBackground />
			<div style={{ position: "relative", zIndex: 1, height: "100%" }}>
				<Desktop />
			</div>
			<DesktopContextMenu location={SCREENS.DESKTOP} />
		</div>
	);
}

export default DesktopContainer;
