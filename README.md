# Sentiment to Emoji API 😊😠😐

[![Built for func.live](https://img.shields.io/badge/Built_for-func.live-blueviolet)](https://www.func.live/)
[![Powered by Google Gemini](https://img.shields.io/badge/Powered_by-Google_Gemini-4285F4)](https://ai.google.dev/)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains a simple but powerful sentiment analysis function that converts a string of text into a corresponding emoji. It was built as a contribution to the [func.live](https://www.func.live/) platform by [@wakeflow](https://github.com/wakeflow).

The function takes any text input, uses the **Google Gemini API** to determine its sentiment, and returns a single emoji:

* 😊 for positive
* 😠 for negative
* 😐 for neutral

***

### Part 2: API Usage (GET Method)

## How to Use the Deployed Function

The API is live and available at the following endpoint.

**Endpoint:** `https://funclive-sentiment-analysis.vercel.app/sentimentToEmoji`

## GET `/sentimentToEmoji`

Use the `GET` method to retrieve the function's documentation in the required JSON Schema format.

**Example Request:**
```bash
curl [https://funclive-sentiment-analysis.vercel.app/sentimentToEmoji](https://funclive-sentiment-analysis.vercel.app/sentimentToEmoji)`
```

Example Response:
```bash
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
```

### Part 3: API Usage (POST Method)

## POST `/sentimentToEmoji`

Use the `POST` method to execute the function.

**Example Request:**
```bash
curl -X POST [https://funclive-sentiment-analysis.vercel.app/sentimentToEmoji](https://funclive-sentiment-analysis.vercel.app/sentimentToEmoji) \
   -H "Content-Type: application/json" \
   -d '{"input": "This is a fantastic product, I am so impressed!"}'
```

Example Response:
```bash
{
  "output": "😊"
}
```

### Part 4: Running Locally

## Running Locally for Development

To run this project on your own machine, follow these steps.

## 1. Prerequisites
* [Node.js](https://nodejs.org/) (v18 or later)
* [Git](https://git-scm.com/)
* A **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

## 2. Clone and Install
```bash
# Clone the repository
git clone [https://github.com/your-username/func.live_sentiment_analysis.git](https://github.com/your-username/func.live_sentiment_analysis.git)

# Navigate into the project directory
cd func.live_sentiment_analysis

# Install dependencies
npm install
```

## 3. Set Up Environment Variables
You need to provide your Google Gemini API key.
```bash
# Create a .env file from the example if it doesn't exist
cp .env.example .env
```
Now, open the .env file and add your secret key and add:
```bash
GEMINI_API_KEY="your-google-api-key"
```

## 4. Run the Server
```bash
npm run dev
```

Your function will be available at http://localhost:3000/sentimentToEmoji.

### Part 5: Technology Stack and License

## Technology Stack
* **Runtime:** Node.js
* **Framework:** Express
* **Language:** TypeScript
* **AI:** Google Gemini API
* **Deployment:** Vercel
