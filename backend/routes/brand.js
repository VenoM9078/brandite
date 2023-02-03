const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");
const circularJSON = require("circular-json");
const axios = require("axios");

let list;
let filteredList;

router.post("/getBrands", async (req, res) => {
  let keywords = req.body.keywords;
  let style = req.body.style;

  const OPENAI_KEY = process.env.OPENAI_KEY;
  const apiKey = OPENAI_KEY;

  console.log(apiKey);

  if (style == "Auto") {
    style =
      "Auto - can have Alternate Spelling, Brandable Names, Non-English Words, Two Words";
  } else if (style == "Brandable") {
    style = "can have Brandable names - like Google or Rolex";
  } else if (style == "Alternate") {
    style = "can have Alternate Spelling - like Lyft or Fiverr";
  } else if (style == "Non-English") {
    style = "can have Non English Words - like Toyota or Audi";
  }

  axios({
    method: "post",
    url: "https://api.openai.com/v1/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    data: {
      model: "text-davinci-001",
      prompt: `Give me a list of 20 names based on the keywords "${keywords}", each name MUST be LESS than 13 characters long, unique, creative, catchy and attractive. Priority is SINGLE WORDS. Do NOT include any numeric digits in any name. Style of the name MUST be "${style}". These names MUST be usable as business names. So make them attractive without making them unusable or weird. Single word only. No numbering before the text. Keep each name short.`,
      temperature: 1,
      max_tokens: 124,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 0,
    },
  })
    .then(function (response) {
      console.log(response.data.choices[0]);
      const list = response.data.choices[0].text.split("\n");
      const objects = list.map((word) => {
        let wordParts = word.split(".");
        if (wordParts.length >= 2) {
          let cleanWord = wordParts[1].trim();
          if (cleanWord.length <= 13 && !/\d/.test(cleanWord)) {
            return { name: cleanWord };
          }
        }
      });
      const filteredList = objects.filter((obj) => obj !== undefined);

      let obj = [filteredList, keywords, style];

      // res.json(filteredList);

      res.json(obj);
    })
    .catch(function (error) {
      console.error(error.response);
    });
});

module.exports = router;
