import { google } from '@ai-sdk/google';
import { streamText, convertToCoreMessages } from 'ai';

export const maxDuration = 30;

// Example portfolio content - this should be dynamically fetched or embedded based on the queries
const portfolioContext = `
  - Name: Gudwin AI
  - Role: Frontend Developer
  - Experience: 2 years in React.js, Next.js, TypeScript
  - Projects: AI-powered portfolio, LMS web app, Slack clone, School Management System, etc.
  - Tech Stack: React, Next.js, TypeScript, Tailwind CSS, etc.
  - Achievements: 100% SEO score, AI chatbot integration, Strapi CMS for blogs, etc.
  - Contact: You can contact me on my Email Id ->>> gudwinnayak786@gmail.com or on my no +919284713796
`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const customMessages = convertToCoreMessages([
    { role: 'system', content: `You are a helpful AI that answers questions about my portfolio. Here is some information about it: ${portfolioContext}` },
    ...messages
  ]);

  const result = await streamText({
    model: google('gemini-1.5-flash-latest'),
    messages: customMessages,
  });

  return result.toDataStreamResponse();
}
