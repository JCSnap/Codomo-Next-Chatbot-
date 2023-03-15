import { spawn } from "child_process";

export default async function handler(
  req: { body: { prompt: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { response: any }): void; new (): any };
    };
  }
) {
  const { prompt } = req.body;
  const gptProcess = spawn("python", ["./pages/api/gpt.py"]);
  gptProcess.stdin.write(JSON.stringify({ prompt }) + "\n");
  gptProcess.stdin.end();
  let responseData = "";
  for await (const chunk of gptProcess.stdout) {
    responseData += chunk;
  }
  const { response } = JSON.parse(responseData);
  res.status(200).json({ response });
}
