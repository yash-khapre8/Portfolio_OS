import { IconButton, Modal } from "@fluentui/react";
import React from "react";
import user from "../../utils/data/user.config";

function Credits(props) {
	const cancelIcon = { iconName: "Cancel" };
	const navigate = (link) => {
		window.open(link, "_blank");
	};
	return (
		<Modal
			isOpen={props.isModalOpen}
			onDismiss={props.hideModal}
			isBlocking={false}
		>
			<div className="uk-card uk-card-default uk-card-body uk-border-rounded">
				<h3 className="uk-card-title">System Information</h3>
				<div>
					<table className="uk-table uk-table-divider">
						<tbody>
							<tr>
								<td>Developer:</td>
								<td>
									<strong>{user.firstName} {user.lastName}</strong>
								</td>
							</tr>
							<tr>
								<td>Frameworks:</td>
								<td>
									<span
										className="uk-link"
										onClick={() =>
											navigate("https://reactjs.org/")
										}
									>
										React 18
									</span>
									{", "}
									<span
										className="uk-link"
										onClick={() =>
											navigate(
												"https://developer.microsoft.com/en-us/fluentui#/"
											)
										}
									>
										Fluent UI
									</span>
									{", "}
									<span
										className="uk-link"
										onClick={() =>
											navigate("https://getuikit.com/")
										}
									>
										UIKit
									</span>
								</td>
							</tr>
							<tr>
								<td>UI & Icons:</td>
								<td>
									<span
										className="uk-link"
										onClick={() =>
											navigate("https://icons8.com/")
										}
									>
										Icons8
									</span>
								</td>
							</tr>
							<tr>
								<td>Libraries:</td>
								<td>
									<span>React Redux</span>
									{", "}
									<span>React Draggable</span>
									{", "}
									<span>React Resizable</span>
									{", "}
									<span>Quill.js</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<IconButton
					iconProps={cancelIcon}
					ariaLabel="Close popup modal"
					onClick={props.hideModal}
					className="uk-position-top-right"
				/>
				<div className="uk-card-footer uk-text-center">
					<p className="uk-margin-remove">
						Designed & Engineered with <span className="font-color-red">&hearts;</span> by <strong>{user.firstName} {user.lastName}</strong>
					</p>
				</div>
			</div>
		</Modal>
	);
}

export default Credits;
