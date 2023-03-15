import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export default openai;
