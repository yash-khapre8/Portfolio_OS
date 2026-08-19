import React from "react";
import user from "../../../utils/data/user.config";
import { Icon } from "@fluentui/react";

function Certifications() {
	return (
		<div className="uk-padding font-color-white">
			<h3 className="font-color-white uk-margin-small-bottom">
				<Icon iconName="Certificate" style={{ marginRight: "8px" }} />
				Certifications & Achievements
			</h3>
			<div className="uk-margin-medium-bottom">
				{user.certifications && user.certifications.map((cert, index) => (
					<div
						key={index}
						className="uk-card uk-card-default uk-card-body uk-margin-small-bottom uk-border-rounded"
						style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff" }}
					>
						<h4 className="uk-margin-remove font-color-white" style={{ color: "#fff" }}>
							{cert.title}
						</h4>
						<p className="uk-margin-remove-top uk-text-meta font-color-white" style={{ color: "#aaa" }}>
							{cert.issuer} • {cert.year}
						</p>
					</div>
				))}
			</div>

			<h3 className="font-color-white uk-margin-small-bottom">
				<Icon iconName="Group" style={{ marginRight: "8px" }} />
				Volunteer & Community Engagement
			</h3>
			<div>
				{user.volunteer && user.volunteer.map((vol, index) => (
					<div
						key={index}
						className="uk-card uk-card-default uk-card-body uk-border-rounded"
						style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff" }}
					>
						<h4 className="uk-margin-remove font-color-white" style={{ color: "#fff" }}>
							{vol.role}
						</h4>
						<p className="uk-margin-remove-top uk-text-meta font-color-white" style={{ color: "#aaa" }}>
							{vol.organization}
						</p>
						<p className="uk-margin-small-top">{vol.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Certifications;
