import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Abhishek",
  lastName: "Sukhadiya",
  name: `Abhishek Sukhadiya`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "abhisheksukhadiyaus38@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ARSukhadiya",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abhishek-sukhadiya-9358a5190/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Abhishek Sukhadiya | Software Engineer | AI Engineer | Full-Stack Developer`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable, high-performance applications and distributed systems for the cloud.</>,
  // headline: <>Building bridges between Backend and AI </>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Abhishek, a software engineer building scalable backends for modern AI products. 
      I spend my free time exploring generative AI and shipping my own full-stack projects.
      {/* I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects. */}
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abhishek is a Bay Area-based software engineer with a passion for transforming complex technical challenges
        into scalable, intelligent software. His work spans the full engineering lifecycle, from optimizing 
        high-performance backend systems to building and deploying full-stack, generative AI applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      // {
      //   company: "NeProEc",
      //   timeframe: "2022 - Present",
      //   role: "Senior Design Engineer",
      //   achievements: [
      //     <>
      //       Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
      //       engagement and 30% faster load times.
      //     </>,
      //     <>
      //       Spearheaded the integration of AI tools into design workflows, enabling designers to
      //       iterate 50% faster.
      //     </>,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        company: "BeProEx",
        timeframe: "Jun 2025 – Aug 2025",
        role: "AI Engineer Intern",
        achievements: [
          <>Specialized in prompt engineering for LLMs like ChatGPT, driving seamless integration into product features and workflows.</>,
          <>Designed, tested, and optimized prompts for generative AI tools, improving response quality and aligning with product goals.</>,
          <>Conducted iterative experiments to refine LLM outputs and enhance user interaction across multiple domains.</>,
        ],
        images: [],
      },
      {
        company: "Vtechys",
        timeframe: "Oct 2024 – Nov 2024",
        role: "Software Developer Intern",
        achievements: [
          <>Built modular automation flows in Python to streamline real-time testing and UI validation.</>,
          <>Investigated and posted analysis for ongoing build fails, reasons of product issues, bugs and environmental problems with CI/CD flow.</>,
          <>Applied innovation and strategic thinking to reduce test maintenance complexity by 30%.</>,
          <>Streamlined CI test cycles and reduced regressions using strategic modularization, improving development velocity and system stability.</>,
        ],
        images: [],
      },
      {
        company: "Musikaar (Vendor for Tenable)",
        timeframe: "Jan 2021 – Dec 2023",
        role: "Software Engineer",
        achievements: [
          <>Built scalable Python-based backend systems for Tenable SecurityCenter, integrating data ingestion logic with Flask and MySQL.</>,
          <>Designed and implemented RESTful backend systems in Python and Flask, optimizing throughput by 70% and improving data reliability.</>,
          <>Resolved 30+ SDK issues and enhanced throughput using NAVI-based multiprocessing with Python by 35%.</>,
          <>Collaborated across teams to deliver backend upgrades that improved customer experience.</>,
          <>Partnered with product managers and QA to deliver customer-centric features and participated in regular code reviews and mentorship.</>,
          <>Engaged in performance optimization and refactoring projects, adhering to clean code and rapid iteration principles.</>,
        ],
        images: [],
      },
      {
        company: "NetAnalytics",
        timeframe: "Jul 2020 – Nov 2020",
        role: "Software Backend Engineer",
        achievements: [
          <>Automated network discovery service using SNMP/SSH/Telnet, integrated monitoring with Prometheus.</>,
          <>Integrated SNMP-exporter and Prometheus with MySQL for real-time monitoring.</>,
          <>Assisted on developing secure RESTful APIs and data models for the networking details and related services.</>,
        ],
        images: [],
      },
      {
        company: "ScriptAllDNA",
        timeframe: "Jul 2019 – Apr 2020",
        role: "Software Engineer Intern",
        achievements: [
          <>Developed a cross-platform data-sharing service using PyQT, Python and MySQL, deployment on Heroku.</>,
          <>Investigated data compression techniques for efficient packaging and storage management.</>,
          <>Analyzed data mining algorithms and contributed into machine learning model development.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "San Francisco Bay University",
        description: (
          <>
            MS in Computer Science (GPA: 3.82) | Expected Dec 2025<br />
            Relevant Coursework: Machine Learning, Artificial Intelligence, Advanced Algorithms, Data-Intensive Computing, Advanced Python
          </>
        ),
      },
      {
        name: "Silver Oak College of Engineering and Technology",
        description: (
          <>
            BS in Information Technology | Graduated Aug 2020<br />
            Relevant Coursework: Data Structure, Operating Systems, Computer Networks, Database Management Systems
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        // description: (
        //   <>Python (Advanced), C++, Java, SQL, JavaScript, HTML, CSS, PHP, NoSQL</>
        // ),
        tags: [
          { name: "Python" },
          { name: "C++" },
          { name: "Java" },
          { name: "SQL" },
          { name: "JavaScript" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "PHP" },
          { name: "NoSQL" },
        ],
        images: [],
      },
      {
        title: "Frameworks",
        // description: (
        //   <>Flask, Django, FastAPI</>
        // ),
        tags: [
          { name: "Flask" },
          { name: "Django" },
          { name: "FastAPI" },
        ],
        images: [],
      },
      {
        title: "Tools",
        // description: (
        //   <>Git, Jenkins, Docker, Postman, PyTest, Linux/Unix, LangGraph, AWS (S3), Jira, Datadog</>
        // ),
        tags: [
          { name: "Git" },
          { name: "Jenkins" },
          { name: "Docker" },
          { name: "Postman" },
          { name: "PyTest" },
          { name: "Linux/Unix" },
          { name: "LangGraph" },
          { name: "AWS S3" },
          { name: "Jira" },
          { name: "Datadog" },
        ],
        images: [],
      },
      {
        title: "Databases",
        // description: (
        //   <>MySQL, PostgreSQL, MongoDB</>
        // ),
        tags: [
          { name: "MySQL" },
          { name: "PostgreSQL" },
          { name: "MongoDB" },
        ],
        images: [],
      },
      {
        title: "Concepts",
        // description: (
        //   <>REST APIs, Microservices, SOA, OOP, Unit & Automation Testing, Selenium, AI/ML, LLMs integration, Chatbot-service</>
        // ),
        tags: [
          { name: "REST APIs" },
          { name: "Microservices" },
          { name: "SOA" },
          { name: "OOP" },
          { name: "Unit Testing" },
          { name: "Automation Testing" },
          { name: "Selenium" },
          { name: "AI/ML" },
          { name: "LLMs" },
          { name: "Chatbot-service" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
