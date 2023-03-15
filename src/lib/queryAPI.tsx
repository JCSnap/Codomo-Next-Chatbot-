import openai from "./chatgpt";

const query = async (prompt: string) => {
  const response = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.5,
      top_p: 1,
      max_tokens: 100,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => response.data.choices[0].text)
    .catch((error) => console.log("failed to get response"));

  return response;
};

export default query;
