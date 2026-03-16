import axios from 'axios';

// OpenAI API key
const OPEN_AI_KEY = '';

const openaiURL = 'https://api.openai.com/v1/chat/completions';

export const getOpenAIResponse = async (msg: string): Promise<string> => {
  try {
    const response = await axios.post(
      openaiURL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            content: msg,
            role: 'user',
          },
        ],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${OPEN_AI_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('GPT Response:', response.data);
    return response.data.choices[0].message.content;
  } catch (error: unknown) {
    const errorMessage = axios.isAxiosError(error)
      ? error?.message
      : 'An unknown error occurred!';
    console.error('OpenAI API Error:', errorMessage);
    return `Error: ${errorMessage}. Please check your API key.`;
  }
};
