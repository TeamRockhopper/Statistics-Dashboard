const express = require('express');
const app = express();
const port = 3000;
const loremIpsum = require('lorem-ipsum').loremIpsum;

app.listen(port, () => console.log(`Statistics Dashboard listening on port ${port}!`));

app.get('/', (req, res) => res.send('Hello World!'));

let text = loremIpsum({
  count: 1,                // Number of "words", "sentences", or "paragraphs"
  format: "plain",         // "plain" or "html"
  paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
  paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
  random: Math.random,     // A PRNG function
  sentenceLowerBound: 5,   // Min. number of words per sentence.
  sentenceUpperBound: 15,  // Max. number of words per sentence.
  suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
  units: 'sentences'      // paragraph(s), "sentence(s)", or "word(s)
});

app.get('/test', (req, res) => res.send(text));
