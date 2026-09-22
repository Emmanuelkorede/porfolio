import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/Jobemmanuel.pdf',
        
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Emmanuel_Job_CV.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;