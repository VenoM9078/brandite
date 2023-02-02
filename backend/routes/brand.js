const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");
const circularJSON = require("circular-json");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

router.post("/getBrands", async (req, res) => {
  let keywords = req.body.keywords;
  let style = req.body.style;

  const response = await openai.createCompletion({
    model: "text-ada-001",
    prompt:
      'Give me a list of 20 names based on the keywords "technology, noxions, amazing, spicy, restaurant, bot", each name must be unique, creative, catchy and attractive. Style of the name MUST be "non-english i.e use foreign words like Toyota or Audi". These names MUST be usable as business names. So make them attractive without making them unusable or weird. Single word only. No numbering before the text. Keep each name short i.e less than 10 characters.\n\n1. Toyota\n2. Audi\n3. Tesla\n4. Bot\n5. Inferno\n6. Mondo\n7. Carpet\n8. The',
    temperature: 0,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.send(circularJSON.stringify({ response }));
});

module.exports = router;
