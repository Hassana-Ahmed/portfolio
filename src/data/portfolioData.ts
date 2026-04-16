// Hassan Ahmed Portfolio Data

export const personalInfo = {
  name: "Hassan Ahmed",
  initials: "HA",
  email: "hassanahmed17824@gmail.com",
  phone: "+923442288242",
  location: "Karachi, Pakistan",
  titles: ["Cloud Engineer", "DevOps Specialist", "Multi-Cloud Architect"],
  summary:
    "Cloud Support Engineer with expertise in AWS, Azure, GCP, and Alibaba Cloud. Specialized in Infrastructure as Code (Terraform, Ansible), containerization (Docker, AWS ECS), and CI/CD automation. Proven track record managing 20+ VMware VMs with 99.8% uptime, delivering enterprise cloud solutions, and training 50+ professionals.",
  github: "https://github.com/hassanahmed17824",
  linkedin: "https://www.linkedin.com/in/hassan-ahmed-722968325/",
};

export const stats = [
  { value: 50, suffix: "+", label: "Students Trained" },
  { value: 99.8, suffix: "%", label: "Infrastructure Uptime", decimals: 1 },
  { value: 30, suffix: "%", label: "Cost Optimization" },
  { value: 87, suffix: "%", label: "Faster Deployments" },
  { value: 20, suffix: "+", label: "VMs Managed" },
];

export const skills = [
  {
    category: "Cloud Platforms",
    icon: "cloud",
    items: [
      { name: "AWS", icon: "SiAmazonaws" },
      { name: "Azure", icon: "SiMicrosoftazure" },
      { name: "GCP", icon: "SiGooglecloud" },
      { name: "Alibaba Cloud", icon: "SiAlibabcloud" },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: "code",
    items: [
      { name: "Terraform", icon: "SiTerraform" },
      { name: "CloudFormation", icon: "SiAmazonaws" },
      { name: "Ansible", icon: "SiAnsible" },
    ],
  },
  {
    category: "CI/CD",
    icon: "git",
    items: [
      { name: "GitHub Actions", icon: "SiGithubactions" },
      { name: "Jenkins", icon: "SiJenkins" },
    ],
  },
  {
    category: "Containers",
    icon: "docker",
    items: [
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS ECS", icon: "SiAmazonecs" },
      { name: "Amazon ECR", icon: "SiAmazonecs" },
    ],
  },
  {
    category: "Monitoring",
    icon: "monitor",
    items: [{ name: "CloudWatch", icon: "SiAmazoncloudwatch" }],
  },
  {
    category: "Virtualization & Storage",
    icon: "server",
    items: [
      { name: "VMware vSphere", icon: "SiVmware" },
      { name: "Amazon S3", icon: "SiAmazons3" },
      { name: "Amazon RDS", icon: "SiAmazonrds" },
    ],
  },
];

export const certifications = [
  {
    name: "Microsoft Azure Administrator Associate",
    short: "AZ-104",
    issuer: "Microsoft",
    year: "2026",
    color: "#00d4ff",
    logo: "azure",
    description:
      "Validates expertise in implementing, managing, and monitoring Azure environments.",
  },
  {
    name: "Huawei Certified Cloud Data Center Associate",
    short: "HCCDA",
    issuer: "Huawei",
    year: "2025",
    color: "#ff4400",
    logo: "huawei",
    description:
      "Validates skills in Huawei cloud data center architecture and operations.",
  },
];

export const experience = [
  {
    title: "Cloud Support Engineer",
    company: "Sherdil IT Academy",
    location: "Karachi, Pakistan",
    period: "Aug 2024 – Present",
    type: "present",
    description:
      "Educational institution specializing in IT and cloud technologies",
    achievements: [
      "Trained 50+ students and professionals on AWS, Azure, GCP, and Alibaba Cloud with hands-on labs",
      "Executed cloud projects achieving 30% cost optimization through resource right-sizing and reserved instances",
      "Created training materials for Docker, Terraform, Ansible, and GitHub Actions CI/CD pipelines",
      "Mentored students on cloud architecture, security configurations with 90% satisfaction rate",
      "Supported cloud migrations and infrastructure deployments across multi-cloud environments",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "KSMC",
    location: "Karachi, Pakistan",
    period: "Sep 2024 – Nov 2024",
    type: "past",
    description:
      "Healthcare organization focused on infrastructure performance and reliability",
    achievements: [
      "Managed 20+ VMware VMs and cloud servers, maintaining 99.8% uptime through proactive monitoring",
      "Reduced incident response time by 40% via daily monitoring, troubleshooting, and backup verification",
      "Upgraded VMware vSphere from evaluation to standard license with zero downtime",
      "Administered SharePoint servers including configuration management and user access control",
      "Implemented proactive monitoring to prevent server issues before impacting operations",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "3-Tier AWS Architecture with Terraform",
    category: "Infrastructure as Code",
    description:
      "Built production-grade 3-tier AWS architecture using Terraform with VPC, EC2, ALB, Auto Scaling, and multi-AZ RDS for high availability.",
    tools: ["Terraform", "AWS EC2", "VPC", "ALB", "RDS", "Route53", "S3", "CloudWatch"],
    metrics: [
      "87% faster deployments via Ansible automation",
      "Multi-AZ RDS for high availability",
      "Auto Scaling with health checks",
    ],
    github: "https://github.com/hassanahmed17824",
  },
  {
    number: "02",
    title: "CI/CD Pipeline with GitHub Actions",
    category: "DevOps Automation",
    description:
      "Developed end-to-end CI/CD pipeline achieving 95% deployment success rate with automated testing, Docker builds, and ECR deployments.",
    tools: ["GitHub Actions", "Docker", "Amazon ECR", "AWS ECS", "Nginx"],
    metrics: [
      "95% deployment success rate",
      "60% Docker image size reduction via multi-stage builds",
      "Automated ECR pushes with Git-based versioning",
    ],
    github: "https://github.com/hassanahmed17824",
  },
  {
    number: "03",
    title: "Docker Containerization & ECS Deployment",
    category: "Containerization",
    description:
      "Containerized applications deployed on AWS ECS with Fargate, featuring Nginx reverse proxy and Docker Compose local environment.",
    tools: ["Docker", "Docker Compose", "AWS ECS", "Fargate", "Nginx", "ECR"],
    metrics: [
      "Serverless container management with Fargate",
      "Local dev with Docker Compose + Nginx proxy",
      "Automated image versioning pipeline",
    ],
    github: "https://github.com/hassanahmed17824",
  },
];
