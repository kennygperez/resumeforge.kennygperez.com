export interface Period {
	start: string;
	end: string;
}

interface Education {
	school: string;
	degree: string;
}

interface Experience {
	companyName: string;
	title: string;
	period: Period;
	responsibilities: string[];
}

interface Project {
	name: string;
	link: string;
	feats: string[];
}

type Skills = Record<string, string[]>;

export const name: string = 'Kenny G Perez';
export const email: string = 'kennygperez@gmail.com';
export const phone: string = '3215580189';
export const website: string = 'kennygperez.com';

export const experiences: Experience[] = [
	{
		companyName: 'K16 Solutions',
		title: 'Application Developer',
		period: {
			start: 'April 2022',
			end: 'Present',
		},
		responsibilities: [
			'I designed and maintained robust CRUD (Create, Read, Update, Delete) functionalities to enable seamless data migration between Learning Management Systems. I utilized JavaScript (Node.js), PostgreSQL, and various AWS resources such as CloudFormation, Lambda, PostgreSQL, S3, CloudWatch, and EC2 to ensure efficient and reliable operations.',
			'I designed and implemented a local AWS SQS emulator using Node.js and TypeScript. This solution was created to streamline the entire migration process, allowing developers to run the development environment locally using the SAM CLI and take advantage of the VS Code debugger. This initiative resulted in a significant reduction in delivery time and improved customer outcomes.',
		],
	},
	{
		companyName: 'Corsair (acquisition)',
		title: 'Software Engineer',
		period: {
			start: 'February 2021',
			end: 'April 2022',
		},
		responsibilities: [
			"Contributed to the development of the backend for Elgato's new digital asset marketplace, focusing on managing digital assets using Django.",
			'Spearheaded the architecture, development, and maintenance of the Super Transition Maker, a user-centric video generator ReactJS web application tailored for content creators. Leveraged a microservices architecture pattern to optimize cloud infrastructure on AWS. Efficiently managed incoming jobs via AWS SQS and dynamically scaled AWS EC2 instances to meet demand. Utilized Node.js, Remotion, and Nexrender within AWS EC2 instances for video content generation and seamless bidirectional communication. Implemented the final microservice—a REST API written in Node.js with TypeScript, powered by PostgreSQL for robust data management.',
		],
	},
	{
		companyName: 'Visuals by Impulse',
		title: 'Software Engineer',
		period: {
			start: 'January 2018',
			end: 'February 2021',
		},
		responsibilities: [
			"I designed and implemented a groundbreaking computer vision-powered overlay using Node.js and React.js, utilizing WebSocket technology. This innovation played a pivotal role in VBI's eventual acquisition by Corsair, operating under Elgato.",
			'Designed, developed, and maintained a proprietary CRM system using Node.js, MongoDB, and AWS from scratch. This initiative significantly improved productivity and resolved workflow challenges, leading to more effective communication with customers.',
			'Mentored junior developers to foster their professional growth and skill development.',
		],
	},
	{
		companyName: 'UCF Center for Distributed Learning',
		title: 'Techranger',
		period: {
			start: 'February 2018',
			end: 'August 2020',
		},
		responsibilities: [
			'Led the development of a QR code-based attendance application, composing a native mobile app and an LTI-enabled Python/Django web application. Led the development of the mobile application project, and refactored the student design project code to ensure production readiness and adherence to best practices. Employed NodeJS, React Native, and Expo SDK for UCFHere.',
		],
	},
];

export const projects: Project[] = [];

export const education: Education = {
	school: 'University of Central Florida (UCF)',
	degree: 'B.S. Computer Science',
};

export const skills: Skills = {
	'Programming Languages': ['Typescript, JavaScript, Python, Java, Go, Dart'],
	Technologies: [
		'Git',
		'AWS',
		'PostgreSQL',
		'SAM CLI',
		'DigitalOcean',
		'Docker',
		'GitLab CI',
		'Nginx',
		'OAuth2',
		'MySQL',
		'DynamoDB',
		'MongoDB',
	],
	'Web Frameworks and Libraries': [
		'SvelteKit',
		'TailwindCSS',
		'SCSS',
		'Expo',
		'Vue.js',
		'React.js',
		'React Native',
		'Flutter',
		'Django',
		'Django REST Framework',
	],
	'Code Quality': ['TDD', 'Jest', 'ESLint', 'Prettier'],
};
