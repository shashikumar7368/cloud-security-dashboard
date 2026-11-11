
const dashboardData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 101,
          title: "Cloud Accounts",
          description: "Total cloud accounts: 25. All connected accounts are monitored.",
        },
        {
          id: 102,
          title: "Cloud Account Risk Assessment",
          description: "Security assessment completed. 85% of accounts are secure.",
        },
        {
          id: 103,
          title: "Cloud Security Score",
          description: "Current security score is 92%. No critical issues detected.",
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 201,
          title: "Top 5 Vulnerabilities",
          description: "Five vulnerabilities require attention in your cloud environment.",
        },
        {
          id: 202,
          title: "Workload Alerts",
          description: "12 workload alerts detected. Three require immediate review.",
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        {
          id: 301,
          title: "Image Risk Assessment",
          description: "Container image scanning is currently active.",
        },
        {
          id: 302,
          title: "Image Security",
          description: "All container images are being monitored for security risks.",
        },
      ],
    },
  ],
};

export default dashboardData;
