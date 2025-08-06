Sentiment to Emoji API 😊😠😐
This repository contains a simple but powerful sentiment analysis function that converts a string of text into a corresponding emoji. It was built as a contribution to the func.live platform by @wakeflow.

The function takes any text input, uses the OpenAI API to determine its sentiment, and returns a single emoji representing that sentiment:

😊 for positive

😠 for negative

😐 for neutral

How to Use the Deployed Function
The API is live and available at the following endpoint.

Endpoint: https://your-deployment-url.com/sentimentToEmoji

GET /sentimentToEmoji
Use the GET method to retrieve the function's documentation in the required JSON Schema format.

Example Request:

Bash

curl https://your-deployment-url.com/sentimentToEmoji
Example Response:

JSON

{
  "name": "sentimentToEmoji",
  "description": "Analyzes the sentiment of a text and returns a corresponding emoji.",
  "input": {
    "type": "string",
    "description": "The text you want to analyze.",
    "example": "I love sunny days, they make me so happy!"
  },
  "output": {
    "type": "string",
    "description": "A single emoji representing the sentiment: 😊 (positive), 😠 (negative), or 😐 (neutral).",
    "example": "😊"
  }
}
POST /sentimentToEmoji
Use the POST method to execute the function.

Example Request:

Bash

curl -X POST https://your-deployment-url.com/sentimentToEmoji \
   -H "Content-Type: application/json" \
   -d '{"input": "This is a fantastic product, I am so impressed!"}'
Example Response:

JSON

{
  "output": "😊"
}
Running Locally for Development
To run this project on your own machine, follow these steps.

1. Prerequisites
Node.js (v18 or later recommended)

Git

An OpenAI API Key

2. Clone and Install
Bash

# Clone the repository
git clone https://github.com/your-username/func.live_sentiment_analysis.git

# Navigate into the project directory
cd func.live_sentiment_analysis

# Install dependencies
npm install
3. Set Up Environment Variables
You need to provide your OpenAI API key.

Bash

# Create a .env file from the example
cp .env.example .env
Now, open the .env file and add your secret key:

OPENAI_API_KEY="your-api-key-here"
4. Run the Server
Bash

# Start the development server
npm start
Your function will be running at http://localhost:3000/sentimentToEmoji.

Technology Stack
Runtime: Node.js

Framework: Express

Language: TypeScript

AI: OpenAI API

Deployment: Vercel / Render / etc.

License
This project is licensed under the MIT License - see the LICENSE file for details.