require('dotenv').config()
const { OpenAI } = require("langchain/llms/openai");
const { PromptTemplate } = require("langchain/prompts");
const { LLMChain } = require( "langchain/chains");
const { default: Terra } = require('terra-api');
const fs = require('fs');

function filterData(filteredData, interval) {
  if (interval < 1) {
    throw new Error('Interval should be greater than or equal to 1');
  }

  if (interval === 1) {
    // If interval is 1, return the original data
    return filteredData;
  }

  const samples = filteredData;

  if (samples.length > interval) {
    // Filter out data points based on the interval
    filteredData = samples.filter((sample, index) => (index % interval) === 0);
  }

  return filteredData;
}
const apiKey = process.env.OPENAI_API_KEY;
const API_KEY = process.env.API_KEY;
const DEV_ID = process.env.DEV_ID;
const SECRET = process.env.SECRET;
const USER_ID = process.env.USER_ID;

const terra =new Terra(DEV_ID, API_KEY, SECRET);
const getHeartData = async () => {
    try {
      const HEART_DATA = await terra.getBody({
        userId: USER_ID,
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-17"),
        toWebhook: false,
      });
  
      const data = HEART_DATA.data;
      console.log(data.length);

      console.log("glucose_data extracted...")
      return data;
    } catch (e) {
      console.log(e.status, e.message);
      //throw e; // Optional: Re-throw the error to handle it elsewhere
    }
  };
  
async function processPrompt(data) {
    const llm = new OpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0.7,
        maxTokens: 1000,
        openAIApiKey: apiKey,
    })
  const results = [];
  // Convert the data to a JSON string

  const data_dict = JSON.parse(data);
  
  for (let i = 0; i < data_dict.length; i++)  {
    let current_data = data_dict[i].glucose_data;

    let no_trend = current_data.blood_glucose_samples.map(sample => {
      const { trend_arrow, ...rest } = sample; // Destructure to remove trend_arrow
      return rest; // Return the modified object without trend_arrow
    });
    
    // console.log(no_trend);
    
    const filteredData = filterData(no_trend, 4); // Keep one out of every 3 data points
    
    const prompt = PromptTemplate.fromTemplate(
      "The following data is from a blood glucose monitor. All of this data is from one day. Please compile the maximum glucose, minimum glucose, average glucose, and please make a brief summary of how the day went (2 sentences) {glucose_data}. give result in json format with date, average, highest, lowest, and general summary as fields");
    const chain = new LLMChain({ llm: llm, prompt });

    const res = await chain.call({
      glucose_data: JSON.stringify(filteredData)
    });
    console.log(res)
    results.push(res)

    if ((i + 1) % 3 === 0 && i < data_dict.length - 1) {
      console.log("Pausing for 1 minute...");
      await sleep(60000); // Sleep for 1 minute (in milliseconds)
    }

  }
  console.log(results)
  return results
}

// Usage:
getHeartData()
    .then((glucoseData) => {
      // Do something with the glucoseData
        const jsonData = JSON.stringify(glucoseData, null, 2);
        processPrompt(jsonData);

    })
    .catch((error) => {
      // Handle errors here if needed
      console.error("An error occurred:", error);
    });

function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

// console.log({ response });
