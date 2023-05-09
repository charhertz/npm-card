#!/usr/bin/env node

"use strict";

import boxen from 'boxen'
import {
  cyan,
  gray,
  lightCyan,
  red,
  white,
  dim
} from 'kolorist'
import prompts from 'prompts'
import clear from "clear"
import open from "open"
import cfonts from 'cfonts'

// clear screen
clear()

cfonts.say("Hello world", {
  font: 'simple'
});

// boxen options
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
  borderColor: 'white'
}

// output data
const data = {
  name: white('                   Charlie'),
  handle: cyan('@charhertz'),

  work: `${white("full-stack developer & life-long learner")} `,
  twitter: gray("https://twitter.com/") + cyan("charhertz"),
  github: gray("https://github.com/") + cyan("charhertz"),
  npm: gray("https://npmjs.com/") + cyan("~charhertz"),
  npx: red("npx") + " " + white('charhertz'),
  web: gray("https://charhertz.com/"),
  wakatime: gray("https://wakatime.com/") + cyan("@charhertz"),

  labelWork: white("       Work:"),
  labelTwitter: white("    Twitter:"),
  labelnpm: white("        npm:"),
  labelGitHub: white("     GitHub:"),
  labelWeb: white("        Web:"),
  labelWakatime: white("   Wakatime:"),
  labelCard: white("       Card:"),
}

const output = [
  `${data.name} / ${data.handle}`,
  ``,
  `${data.labelWork}  ${data.work}`,
  `${data.labelTwitter}  ${data.twitter}`,
  `${data.labelnpm}  ${data.npm}`,
  `${data.labelGitHub}  ${data.github}`,
  `${data.labelWeb}  ${data.web}`,
  `${data.labelWakatime}  ${data.wakatime}`,
  ``,
  `${data.labelCard}  ${data.npx}`,
  ``,
  `${dim(
    "Done is better than perfect. Done is better, then perfect."
  )}`
].join("\n")
console.log(boxen(output, options));

const tip = [
  `Tip: Try ${lightCyan(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);

const questions = [
  {
    type: "select",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        title: `Send me an email?`,
      },
      {
        title: "Just quit.",
      }
    ]
  }
];

prompts(questions).then(res => {
  switch (res.action) {
    case 0:
      open("mailto:hi@charhertz.com");
      console.log("\nDone, see you soon.\n");
      break;
    case 1:
    default:
      console.log("Ok, bye.\n");
      break;
  }
})
