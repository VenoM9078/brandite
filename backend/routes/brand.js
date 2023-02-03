const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");
const circularJSON = require("circular-json");
const axios = require("axios");

const apiKey = "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";
let list;
let filteredList;

router.post("/getBrands", async (req, res) => {
  let keywords = req.body.keywords;
  let style = req.body.style;

  filteredList = [
    {
      name: "Toyota",
    },
    {
      name: "Audi",
    },
    {
      name: "Tesla",
    },
    {
      name: "Bot",
    },
    {
      name: "Inferno",
    },
    {
      name: "Mondo",
    },
    {
      name: "Carpet",
    },
    {
      name: "Noxions",
    },
    {
      name: "Bot",
    },
    {
      name: "Inferno",
    },
    {
      name: "Mondo",
    },
    {
      name: "Carpet",
    },
    {
      name: "Noxions",
    },
    {
      name: "Bot",
    },
    {
      name: "Inferno",
    },
    {
      name: "Mondo",
    },
    {
      name: "Carpet",
    },
    {
      name: "What",
    },
  ];

  let obj = [filteredList, keywords, style];

  //   axios({
  //     method: "post",
  //     url: "https://api.openai.com/v1/completions",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${apiKey}`,
  //     },
  //     data: {
  //       model: "text-ada-001",
  //       prompt:
  //         'Give me a list of 20 names based on the keywords "technology, noxions, amazing, spicy, restaurant, bot", each name must be unique, creative, catchy and attractive. Style of the name MUST be "non-english i.e use foreign words like Toyota or Audi". These names MUST be usable as business names. So make them attractive without making them unusable or weird. Single word only. No numbering before the text. Keep each name short i.e less than 10 characters.',
  //       temperature: 0,
  //       max_tokens: 64,
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0,
  //     },
  //   })
  //     .then(function (response) {
  //       list = response.data.choices[0].text.split("\n");
  //       const objects = list.map((word) => {
  //         let wordParts = word.split(".");
  //         if (wordParts.length >= 2) {
  //           let cleanWord = wordParts[1].trim();
  //           return { name: cleanWord };
  //         }
  //       });
  //       filteredList = objects.filter((obj) => obj !== undefined);
  //       res.json(filteredList);
  //     })

  //     .catch(function (error) {
  //       console.error(error);
  //     });

  res.json(obj);
});

module.exports = router;
