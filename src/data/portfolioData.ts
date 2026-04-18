// Hassan Ahmed Portfolio Data

export const personalInfo = {
  name: "Hassan Ahmed",
  initials: "HA",
  email: "hassanahmed17824@gmail.com",
  phone: "+923442288242",
  location: "Karachi, Pakistan",
  titles: ["DevOps Engineer", "Multi-Cloud Specialist"],
  summary:
    "DevOps Engineer | Multi-Cloud Specialist with expertise in AWS, Azure, GCP, and Alibaba Cloud. Specialized in Infrastructure as Code (Terraform, Ansible), containerization (Docker, AWS ECS), and CI/CD automation. Managing 20+ VMs with 99.8% uptime.",
  github: "https://github.com/Hassana-Ahmed",
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
      { name: "Ansible", icon: "SiAnsible" },
    ],
  },
  {
    category: "CI/CD",
    icon: "git",
    items: [
      { name: "GitHub Actions", icon: "SiGitHubActions" },
      { name: "Jenkins", icon: "SiJenkins" },
    ],
  },
  {
    category: "Containers",
    icon: "docker",
    items: [
      { name: "Docker", icon: "SiDocker" },
      { name: "AWS ECS", icon: "SiAmazonecs" },
    ],
  },
  {
    category: "Monitoring",
    icon: "monitor",
    items: [{ name: "CloudWatch", icon: "SiAmazoncloudwatch" }],
  },
  {
    category: "Virtualization",
    icon: "server",
    items: [
      { name: "VMware vSphere", icon: "SiVmware" },
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
    title: "DevOps Engineer",
    company: "Sherdil Cloud",
    location: "Karachi, Pakistan",
    period: "Aug 2024 – Present",
    type: "present",
    description: "Infrastructure, automation, and multi-cloud deployments",
    achievements: [
      "Specialized in Infrastructure as Code (Terraform, Ansible), containerization (Docker, AWS ECS), and CI/CD automation.",
      "Executed cloud projects achieving 30% cost optimization through resource right-sizing and reserved instances",
      "Supported cloud migrations and infrastructure deployments across multi-cloud environments",
    ],
  },
  {
    title: "Cloud Instructor",
    company: "Sherdil IT Academy",
    location: "Karachi, Pakistan",
    period: "Aug 2024 – Present",
    type: "present",
    description: "Training 50+ professionals on AWS, Azure, GCP, and DevOps tools",
    achievements: [
      "Trained 50+ professionals on AWS, Azure, GCP, and DevOps tools with hands-on labs",
      "Mentored students on cloud architecture, security configurations with 90% satisfaction rate",
      "Created training materials for Docker, Terraform, Ansible, and GitHub Actions CI/CD pipelines",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "3-Tier AWS Architecture",
    category: "Infrastructure as Code",
    description:
      "Built production-grade 3-tier AWS architecture using Terraform, Ansible, ASG, and RDS for high availability.",
    tools: ["Terraform", "Ansible", "AWS ASG", "RDS", "VPC", "ALB"],
    metrics: [
      "87% faster deployments via Ansible automation",
      "Multi-AZ RDS for high availability",
      "Auto Scaling with health checks",
    ],
    github: "",
  },
  {
    number: "02",
    title: "CI/CD Pipeline",
    category: "DevOps Automation",
    description:
      "Developed end-to-end CI/CD pipeline using GitHub Actions, Octopus Deploy, and Docker for automated deployments.",
    tools: ["GitHub Actions", "Octopus Deploy", "Docker", "Amazon ECR"],
    metrics: [
      "95% deployment success rate",
      "Automated ECR pushes with versioning",
      "Zero-downtime deployments via Octopus",
    ],
    github: "",
  },
  {
    number: "03",
    title: "Containerized App on AWS ECS + Fargate",
    category: "Containerization",
    description:
      "Containerized applications using multi-stage builds deployed on AWS ECS with Fargate for serverless management.",
    tools: ["Docker", "AWS ECS", "Fargate", "Multi-stage Build"],
    metrics: [
      "60% Docker image size reduction",
      "Serverless container management",
      "Automated image versioning pipeline",
    ],
    github: "",
  },
  {
    number: "04",
    title: "Healthcare Infrastructure Support Project",
    category: "Client Projects",
    description: "Managed infrastructure performance and reliability for a healthcare client including VMware and SharePoint.",
    tools: ["VMware vSphere", "SharePoint", "Monitoring", "Backup Systems"],
    metrics: [
      "Remotely managed 20+ VMware vSphere VMs",
      "99.8% Infrastructure Uptime",
      "Reduced incident response time by 40%"
    ],
    github: "",
  },
];
