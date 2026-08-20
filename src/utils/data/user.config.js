import ResumePDF from "./Yash_Resume.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import yash_photo from "../../assets/images/baseImages/yash_photo.png";

const user = {
	firstName: "Yash",
	lastName: "Khapre",
	userImage: yash_photo,
	resume: ResumePDF,
	email: "yashkhapre08@gmail.com",
	linkedIn: "in/-yash",
	gitHub: "yash-khapre8",
	vscodeUrl: "https://github1s.com/yash-khapre8/Portfolio_OS/blob/main/src/App.js",
	twitter: "",
	aboutMe: {
		intro: " I'm a Computer Engineering student and Full Stack Developer from Mumbai, India.",
		description:
			"I specialize in full-stack development, cloud infrastructure, and DevOps automation. Proficient in building scalable MERN applications and deploying containerized workloads on AWS. My key areas of interest include AI, Machine Learning, and Retrieval-Augmented Generation (RAG) systems.",
		outro: "Currently pursuing B.Tech at ITM School of Future Tech (graduating 2028). Always exploring new technologies and building innovative solutions.",
	},
	experiences: [
		{
			organization: "Blessing Softtech",
			organizationPicture: default_avatar,
			isCurrent: true,
			startDate: "Aug 2026",
			endDate: null,
			positions: [
				{
					positionName: "DevOp Intern",
					startDate: "Aug 2026",
					endDate: " Present",
					isPresent: true,
					description:
						"Working on DevOps automation and cloud infrastructure. Contributing to CI/CD pipeline development and infrastructure management. Location: Pune City.",
				},
			],
		},
		{
			organization: "Indian Computer Technologies LLP",
			organizationPicture: default_avatar,
			isCurrent: false,
			startDate: "Jan 2026",
			endDate: "Mar 2026",
			positions: [
				{
					positionName: "Software Development Intern",
					startDate: "Jan 2026",
					endDate: "Mar 2026",
					isPresent: false,
					description:
						"Participated in the full software development lifecycle (SDLC) — including coding, testing, debugging, and deploying application features — reducing bug resolution time by 20% through systematic testing practices. Collaborated with a cross-functional development team of 5+ engineers, delivering 3 assigned feature modules within sprint deadlines using Agile methodology. Learned and applied 2 new technologies within the first month, demonstrating strong adaptability and a fast learning curve in a production environment. Location: New Delhi, India.",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"ITM (School of Future Tech), Mumbai, India",
			degree: "Bachelor of Technology in Computer Engineering | SGPA: 9.0 / 10.0",
			year: "2024 - 2028",
			id: 1,
		},
	],
	projects: [
		{
			projectName: "Trace.ai",
			description:
				"AI-Powered Code Review Platform — Engineered a full-stack MERN AI code review platform that reduced code review turnaround time by 40% by enabling real-time inline feedback on pull requests. Designed a scalable backend processing pipeline that improved concurrent request throughput by 3x and achieved sub-2-second API response times.",
			madeWith: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git"],
			link: "https://github.com/yash-khapre8/Trace.ai",
		},
		{
			projectName: "DevOps Two-Tier Flask App",
			description:
				"Deployed a containerized Flask-MySQL application on AWS EC2, reducing infrastructure setup time by 60% through Docker containerization and automated provisioning. Built a GitHub Actions CI/CD pipeline that reduced manual deployment steps from 12 to 2, achieving zero-downtime production releases.",
			madeWith: ["Python", "Flask", "MySQL", "Docker", "AWS EC2", "GitHub Actions", "CI/CD"],
			link: "https://github.com/yash-khapre8/DevOps-Two-Tier-Flask-App",
		},
		{
			projectName: "AI-Labs",
			description:
				"This project was built as a practical implementation of AWS cloud architecture concepts including High Availability, Monitoring, Load Balancing, Database Management, Audit Logging, and Cost Optimization.",
			madeWith: ["AWS", "EC2", "S3", "RDS", "Lambda", "Elasticsearch", "CloudWatch", "Terraform", "Docker"],
			link: "https://github.com/yash-khapre8/Ai_lab-AWS",
		},
	],
	skills: [
		{
			name: "Programming Languages",
			values: [
				"Python",
				"JavaScript",
				"Java",
				"C++",
			],
		},
		{
			name: "Web Technologies",
			values: ["React.js", "Node.js", "Express.js", "Flask", "HTML", "CSS", "REST APIs"],
		},
		{
			name: "Cloud & DevOps",
			values: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD"],
		},
		{
			name: "Databases",
			values: ["MongoDB", "MySQL", "DynamoDB"],
		},
		{
			name: "Tools",
			values: ["Git", "Postman", "Figma", "Elasticsearch", "Kafka", "WebSockets"],
		},
	],
	certifications: [
		{
			title: "Professional Certificate in DevOps",
			issuer: "Industry Recognized",
			year: "2022",
		},
		{
			title: "Full Stack Web Application Development",
			issuer: "Industry Recognized",
			year: "2022",
		},
	],
	volunteer: [
		{
			role: "GDG Cloud Mumbai Member / Attendee",
			organization: "Google Developer Groups Cloud Mumbai",
			description:
				"Attended cloud and DevOps workshops; collaborated with engineers on real-world cloud architecture problem-solving sessions.",
		},
	],
};

export default user;
