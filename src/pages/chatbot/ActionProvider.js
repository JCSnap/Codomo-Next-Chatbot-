import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const gptReply = "";
  const passToGPT = async (message) => {
    async function generateResponse(prompt) {
      const answer = await fetch("http://127.0.0.1:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: message,
        }),
      }).then(async (res) => {
        console.log("Message sent to GPT-3");
        const text = await res.json();
        console.log("GPT-3 response: ", text);
        return text;
      });
      return answer;
    }
    const gptReply = await generateResponse(message);
    const botMessage = createChatBotMessage(gptReply);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            passToGPT,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
