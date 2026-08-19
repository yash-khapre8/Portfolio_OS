import default_avatar from "../../assets/images/baseImages/default_avatar.svg";

const user = {
	firstName: "Yash",
	lastName: "Khapre",
	userImage: default_avatar,
	resume: null,
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
			link: "https://github.com/yash-khapre8",
		},
		{
			projectName: "DevOps Two-Tier Flask App",
			description:
				"Deployed a containerized Flask-MySQL application on AWS EC2, reducing infrastructure setup time by 60% through Docker containerization and automated provisioning. Built a GitHub Actions CI/CD pipeline that reduced manual deployment steps from 12 to 2, achieving zero-downtime production releases.",
			madeWith: ["Python", "Flask", "MySQL", "Docker", "AWS EC2", "GitHub Actions", "CI/CD"],
			link: "https://github.com/yash-khapre8",
		},
		{
			projectName: "TagMaster",
			description:
				"Real-Time Collaborative Data Annotation Platform — Built a real-time collaborative annotation platform using WebSockets, supporting 10+ simultaneous users with role-based access control (RBAC), reducing annotation errors by 30%. Optimized MongoDB queries and indexing strategies, improving data retrieval speed by 2x on datasets with over 10,000 records.",
			madeWith: ["MongoDB", "Express.js", "React.js", "Node.js", "WebSockets", "JavaScript"],
			link: "https://github.com/yash-khapre8",
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
};

export default user;
