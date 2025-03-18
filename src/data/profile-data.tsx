import { LinkedInIcon } from "@/components/icons/linkedin-icon";

export const ProfileData = {
  name: "Moe Lwin Hein",
  about: "Staff Software Engineer",
  summary: (
    <>
      Results-driven software engineer with 8+ years of experience in developing high-quality, cloud-based
      enterprise software solutions and services.
    </>
  ),
  contact: {
    email: "hein.moelwin@gmail.com",
    tel: "+65-81239494",
    social: {
      linkedin: {
        name: "in/moelwinhein",
        url: "https://www.linkedin.com/in/moelwinhein/",
        icon: LinkedInIcon,
      },
    },
  },
  education: [
    {
      school: "National University of Singapore",
      degree: "Bachelor of Engineering (Honours), Computer Engineering",
      start: "2013",
      end: "2016",
    },
  ],
  work: [
    {
      company: "TeamSpirit Singapore Pte Ltd",
      link: "https://www.teamspirit.com/en-sg/about/",
      title: "Staff Software Engineer",
      start: "Oct 2020",
      end: "Nov 2024",
      description: [
        <>
          Managed overall technical architecture of Expense Management software solutions.
        </>,
        <>
          Designed and implemented highly secured and scalable Financial Transaction Integration system
          using Java, Spring Boot, RabbitMQ and Postgres.
        </>,
        <>
          Developed Expense Management system using Salesforce, Apex, Spring Batch and React.
          Maintained high software quality by establishing best practices and coding standards.
        </>,
        <>
          Collaborated with oversea teams and product managers to ensure seamless Customer Onboarding experience.
        </>,
        <>
          Managed outsourced Engineering team by building a collaborative environment and
          ensured to meet project deliverables timeline as well as established quality standards.
        </>,
      ],
    },
    {
      company: "Works Applications Singapore Pte Ltd",
      link: "https://www.worksap.sg/",
      title: "Software Engineer → Lead Software Engineer",
      start: "Nov 2016",
      end: "Sep 2020",
      description: [
        <>
          Led a team of four to take charge of Supply Chain Management system, which is part
          of a large-scale enterprise ERP application.
        </>,
        <>
          Oversaw the team productivity and development processes to guarantee high-quality software deliverables.
        </>,
        <>
          Collaborated with cross-functional teams from both local and oversea
          to ensure seamless integration of services.
        </>,
        <>
          Developed Supply Chain Management and E-Commerce Microservices using Java, Sprint Boot, Apache Kafka
          and Angular JS.
        </>,
        <>
          Designed and developed high-performance batch applications for parallel processing of large data
          using Apache Spark Ecosystem, Redis and Memcached.
        </>,
      ],
    },
  ],
  skills: {
    "Languages": ["Java", "C/C++", "Golang", "Javascript/Typescript", "HTML", "CSS/Less"],
    "Frameworks/Libraries": ["Spring Boot", "Apache Spark", "Apache Kafka", "Elastic Search", "React", "Angular"],
    "DevOps/Cloud": ["Jenkins", "Docker", "AWS", "Salesforce", "K8S"],
    "Tools/Databases": ["Gitlab", "Bitbucket", "Jira", "Postgres", "Cassandra"],
  },
  certificates: [
    {
      name: "AWS Certified Solutions Architect (Associate)",
      badge: null,
      start: "2019",
      end: null,
    },
    {
      name: "Salesforce Certified Platform Developer II",
      badge: null,
      start: "2022",
      end: null,
    },
    {
      name: "Salesforce Certified Platform Developer I",
      badge: null,
      start: "2021",
      end: null,
    },
    {
      name: "Salesforce Certified JavaScript Developer I",
      badge: null,
      start: "2021",
      end: null,
    },
  ],
} as const;