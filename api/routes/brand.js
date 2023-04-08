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
      model: "text-davinci-003",
      prompt: `Provide a list of 40 single-word names based on the keywords "${keywords}", each name MUST be LESS than 10 characters long, unique, creative, catchy, and attractive. Do NOT include any numeric digits or the string "xyz" in any name. The style of the name MUST be "${style}". These names MUST be usable as business names. Format the response as: Name1|Name2|Name3|...`,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
    },
  })
    .then(function (response) {
      console.log(response.data.choices[0]);
      const responseText = response.data.choices[0].text;
      const nameArray = responseText.split("|");
      const filteredList = nameArray.map((name) => ({ name }));

      let obj = [filteredList, keywords, style];

      res.json(obj);
    })
    .catch(function (error) {
      console.error(error.response);
    });
});

module.exports = router;
