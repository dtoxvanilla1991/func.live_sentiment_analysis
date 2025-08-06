import express, { Request, Response } from 'express';
import OpenAI from 'openai';
import 'dotenv/config';

enum Sentiment {
    Positive = "😊",
    Negative = "😠",
    Neutral = "😐",
}
enum SentimentType {
    Positive = "positive",
    Negative = "negative",
    Neutral = "neutral",
}

// init Express app
const app = express();
app.use(express.json());

// init OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// defining the docs for the function
const functionDocs = {
  name: "sentimentAnalysis",
  description:
    "Analyzes the sentiment of a given text using OpenAI's API and return the corresponding emoji.",
  input: {
    type: "string",
    description: "The text to analyze for sentiment.",
    example: "I love programming!",
  },
  output: {
    type: "string",
    description:
      "A single emoji representing the sentiment: 😊 (positive), 😠 (negative), or 😐 (neutral).",
    example: "😊",
  },
};

// endpoint
const functionPath = '/sentimentToEmoji';

// GET for docs

app.get(functionPath, (req: Request, res: Response) => {
  res.status(200).json(functionDocs);
});

// POST for function logic
app.post(functionPath, async (req: Request, res: Response) => {
  const { input } = req.body;

  // 1. Input validation
  if (!input || typeof input !== "string") {
    return res
      .status(400)
      .send({
        error:
          "Invalid input. Please type a regular sentence or phrase to analyze.",
      });
  }

  try {
    // 2. Call the LLM to get the sentiment
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1", // faster
      messages: [
        {
          role: "system",
          content:
            "You are a sentiment analysis expert. Your task is to analyze the user's text and determine if its sentiment is positive, negative, or neutral. You must respond with only a single word: 'positive', 'negative', or 'neutral'.",
        },
        {
          role: "user",
          content: input,
        },
      ],
      temperature: 0, // We want deterministic output
    });

    const sentiment = (completion.choices[0]?.message?.content ?? "")
      .toLowerCase()
      .trim();

    // 3. Map sentiment to an emoji
    let output = Sentiment.Neutral;
    if (sentiment === SentimentType.Positive) {
      output = Sentiment.Positive;
    } else if (sentiment === SentimentType.Negative) {
      output = Sentiment.Negative;
    }

    // 4. Send the response
    res.status(200).send({ output });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res
      .status(500)
      .send({
        error: "Failed to analyze sentiment due to an internal server error.",
      });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✨ Server is running on http://localhost:${PORT}`);
    console.log(
      `Your function is available at http://localhost:${PORT}${functionPath}`
    );
})