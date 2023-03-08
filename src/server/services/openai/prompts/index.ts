import type {
  CreateChatCompletionRequest,
  CreateCompletionRequest,
} from "openai";

export const prompts = {
  COMPLETION: (message: string): CreateCompletionRequest => {
    return {
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 5,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  },
  CHAT: (message: string): CreateChatCompletionRequest => {
    return {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };
  },
};
