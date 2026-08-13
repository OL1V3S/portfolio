const projects = [
  {
    title: "Budget Planner",
    type: "Deployed full-stack application",
    featured: true,
    description: "A deployed personal finance application for tracking user-specific expenses, setting category budgets, filtering activity, and understanding spending through visualizations.",
    highlights: [
      "ASP.NET Identity and JWT authentication with email confirmation and password reset via the Gmail API",
      "Rate-limited confirmation recovery and account-enumeration-resistant account responses",
      "Integration and service testing across a React, ASP.NET Core, and PostgreSQL stack",
      "Deployed with Vercel, Render, and Neon",
    ],
    tech: ["React", "ASP.NET Core", "PostgreSQL", "xUnit", "Docker"],
    github: "https://github.com/OL1V3S/budget_planner",
    live: "https://oli-budget-planner.vercel.app",
  },
  {
    title: "Templo Bautista Website",
    type: "Production client website",
    description: "A responsive React website built for a local church while working directly with stakeholders.",
    highlights: [
      "Responsive, production-ready React interface",
      "Automated build and deployment with GitHub Actions",
    ],
    tech: ["React", "Vite", "JavaScript", "GitHub Actions"],
    github: "https://github.com/OL1V3S/church_site",
    live: "https://templobautista.net",
  },
  {
    title: "Online Grocery Store",
    type: "Team-built e-commerce system",
    description: "An e-commerce application where I owned backend and database work for product, customer, cart, and persistence functionality.",
    highlights: [
      "Layered controllers, managers, engines, and data accessors",
      "Dependency injection, xUnit testing, and SOLID design principles",
    ],
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "React", "xUnit"],
    github: "https://github.com/OL1V3S/361_Project",
  },
];

export default projects;
