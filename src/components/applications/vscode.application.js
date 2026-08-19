import React, { useState } from "react";
import user from "../../utils/data/user.config";
import { Icon } from "@fluentui/react";

function VSCode() {
	const defaultUrl =
		user.vscodeUrl ||
		`https://github1s.com/${user.gitHub}/Portfolio_OS_Theme/blob/master/src/App.js`;
	const githubUrl = `https://github.com/${user.gitHub}/Portfolio_OS_Theme`;

	const [iframeUrl, setIframeUrl] = useState(defaultUrl);

	const handleRefresh = () => {
		setIframeUrl("");
		setTimeout(() => setIframeUrl(defaultUrl), 50);
	};

	return (
		<div className="height-100 uk-flex uk-flex-column" style={{ height: "100%" }}>
			{/* Header bar */}
			<div
				className="uk-flex uk-flex-between uk-flex-middle uk-padding-small"
				style={{
					backgroundColor: "#1e1e1e",
					color: "#cccccc",
					borderBottom: "1px solid #333",
					fontSize: "13px",
					padding: "6px 12px",
				}}
			>
				<div className="uk-flex uk-flex-middle">
					<Icon iconName="Code" style={{ marginRight: "8px", color: "#0078d4" }} />
					<span>VSCode Repository Viewer — <strong>{user.gitHub}/Portfolio_OS_Theme</strong></span>
				</div>
				<div className="uk-flex uk-flex-middle">
					<button
						onClick={handleRefresh}
						className="uk-button uk-button-link"
						style={{ color: "#cccccc", marginRight: "12px", fontSize: "12px" }}
						title="Reload Iframe"
					>
						<Icon iconName="Refresh" style={{ marginRight: "4px" }} /> Reload
					</button>
					<a
						href={githubUrl}
						target="_blank"
						rel="noreferrer"
						style={{ color: "#0078d4", textDecoration: "none", fontSize: "12px" }}
					>
						<Icon iconName="OpenInNewWindow" style={{ marginRight: "4px" }} /> Open on GitHub
					</a>
				</div>
			</div>

			{/* VSCode iframe container */}
			<div style={{ flex: 1, position: "relative" }}>
				{iframeUrl ? (
					<iframe
						src={iframeUrl}
						frameBorder="0"
						height="100%"
						width="100%"
						title="VSCode"
						style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
					></iframe>
				) : (
					<div className="uk-flex uk-flex-center uk-flex-middle height-100 font-color-white">
						Loading...
					</div>
				)}
			</div>
		</div>
	);
}

export default VSCode;
