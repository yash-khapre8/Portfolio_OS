import { Icon, MessageBar, MessageBarType, TextField } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import "./application.scss";
import { analytics } from "../../utils/firebaseConfig";
import { logEvent } from "firebase/analytics";
import { ANALYTICS_EVENTS } from "../../utils/documents/enums";
import projectAnalytics from "../../utils/data/project.config";
import user from "../../utils/data/user.config";

function Mail() {
	useEffect(() => {
		try {
			if (window.emailjs && process.env.REACT_APP_EMAILJS_KEY) {
				window.emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
			}
		} catch (error) {
			console.warn("EmailJS initialization failed:", error.message);
		}
	}, []);

	const [emailResponse, setEmailResponse] = useState({
		template: {
			from: "",
			subject: "",
			message: "",
			response: null,
		},
	});

	const handleChange = (event) => {
		const target = event.target;
		const templateMeta = { ...emailResponse.template };
		templateMeta[target.name] = target.value;
		setEmailResponse({ template: templateMeta });
	};

	const handleDiscard = (e) => {
		e.preventDefault();
		setEmailResponse({
			template: {
				from: "",
				subject: "",
				message: "",
				response: null,
			},
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const { from, subject, message } = emailResponse.template;

		if (!from || !subject || !message) {
			const templateMeta = { ...emailResponse.template };
			templateMeta.response = (
				<MessageBar messageBarType={MessageBarType.warning} isMultiline={true}>
					Please fill in all fields (From, Subject, and Message) before sending.
				</MessageBar>
			);
			setEmailResponse({ template: templateMeta });
			return;
		}

		const templateId = "from_website";
		const templateParams = {
			message: message,
			subject: subject,
			from: from,
		};

		if (projectAnalytics.enableAnalytics && analytics) {
			logEvent(analytics, ANALYTICS_EVENTS.SEND_MAIL, {
				template: templateParams,
			});
		}

		if (window.emailjs && process.env.REACT_APP_EMAILJS_KEY) {
			sendFeedback(templateId, templateParams);
		} else {
			// Trigger direct mailto link as seamless fallback
			const mailtoUrl = `mailto:${user.email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(
				`From: ${from}\n\n${message}`
			)}`;
			window.open(mailtoUrl, "_blank");

			const templateMeta = {
				from: "",
				subject: "",
				message: "",
				response: (
					<MessageBar
						messageBarType={MessageBarType.success}
						isMultiline={true}
						dismissButtonAriaLabel="Close"
					>
						Opening your email client to send the message to {user.email}!
					</MessageBar>
				),
			};
			setEmailResponse({ template: templateMeta });
		}
	};

	const sendFeedback = (templateId, variables) => {
		window.emailjs
			.send("default_service", templateId, variables)
			.then((res) => {
				const templateMeta = {
					from: "",
					subject: "",
					message: "",
					response: (
						<MessageBar
							messageBarType={MessageBarType.success}
							isMultiline={true}
							dismissButtonAriaLabel="Close"
						>
							Message sent successfully! Thank you for reaching out.
						</MessageBar>
					),
				};
				setEmailResponse({ template: templateMeta });
			})
			.catch((err) => {
				console.error("Message sending failed:", err);
				// Fallback to mailto if EmailJS errors out
				const mailtoUrl = `mailto:${user.email}?subject=${encodeURIComponent(
					variables.subject
				)}&body=${encodeURIComponent(
					`From: ${variables.from}\n\n${variables.message}`
				)}`;
				window.open(mailtoUrl, "_blank");

				const templateMeta = { ...emailResponse.template };
				templateMeta.response = (
					<MessageBar
						messageBarType={MessageBarType.warning}
						isMultiline={true}
						dismissButtonAriaLabel="Close"
					>
						Could not send via EmailJS API. Opened your default email app instead to send directly to {user.email}.
					</MessageBar>
				);
				setEmailResponse({ template: templateMeta });
			});
	};

	return (
		<div className="height-100">
			<form onSubmit={handleSubmit}>
				<div className="uk-margin form-input uk-flex uk-flex-right">
					<button
						className="discard-button uk-button uk-margin-small-right uk-background-secondary font-color-white"
						onClick={handleDiscard}
						type="button"
					>
						<Icon iconName="Delete" /> Discard
					</button>
					<button className="uk-button uk-button-primary" type="submit">
						<Icon iconName="Send" /> Send
					</button>
				</div>

				{emailResponse.template.response}

				<div className="uk-margin form-input">
					<TextField
						label="From :"
						name="from"
						underlined
						required
						placeholder="Your Name / Email"
						value={emailResponse.template.from}
						onChange={handleChange}
					/>
				</div>
				<div className="uk-margin form-input">
					<TextField
						label="To :"
						underlined
						disabled
						placeholder={`${user.firstName} ${user.lastName} (${user.email})`}
					/>
				</div>
				<div className="uk-margin form-input">
					<TextField
						label="Subject :"
						underlined
						name="subject"
						required
						placeholder="Subject of your message"
						value={emailResponse.template.subject}
						onChange={handleChange}
					/>
				</div>
				<div className="uk-margin form-input message-box">
					<TextField
						multiline
						autoAdjustHeight
						placeholder="Write your message here..."
						name="message"
						rows={8}
						value={emailResponse.template.message}
						onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default Mail;
