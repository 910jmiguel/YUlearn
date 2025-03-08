import { CohereClientV2 } from 'cohere-ai';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

const cohere = new CohereClientV2({
  token: process.env.COHERE_AI,
});

export async function POST(req) {
  try {
    const { message } = await req.json(); // Ensure we parse JSON properly

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = await cohere.chat({
      model: 'command-light',
      messages: [
        {
          role: 'system',
          content: `You are a Support bot for "York University" under the module "YuLearn". 
            Your ONLY task is to assist users with YuLearn's education module. If a query is irrelevant, respond with: 
            "I am sorry, but I cannot assist you with that query." Otherwise, reply: "Hello, this is YuLearn Support. How can I help you today?"`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    return NextResponse.json({ content: response.message.content[0]?.text || 'No response from Cohere API' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}