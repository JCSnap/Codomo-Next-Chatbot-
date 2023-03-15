from flask import Flask, request, jsonify
import openai
from flask_cors import CORS
import json 
from database import general, instructions

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['POST'])
def api():
    data = request.get_json()
    # Process the request data here
    prompt = instructions + general + data['prompt']
    openai.organization = "org-bvlKBmngxqAVQHzFfuyAjggS"
    openai.api_key = "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"
    openai.Model.list()
    completions = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=80,
        temperature=0
    )

    answer = completions.choices[0].text
    print(completions)
    response = jsonify(answer)
    json_data = response.data.decode('utf-8')
    python_data = json.loads(json_data)
    #print(python_data)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3001')
    return response

if __name__ == '__main__':
    app.run(debug=True)