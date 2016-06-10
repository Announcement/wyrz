var answers;
var getAnswer;
var questions;
var fromRandom;

answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

questions = {
  hardest: [
    "Would you rather live one life that lasts 1,000 years or live 10 lives that last 100 years each?",
    "Would you rather use eye drops made of vinegar or toilet paper made from sandpaper?",
    "Would you rather be without elbows or be without knees?",
    "Would you rather experience a sharp pain in your side each time someone says your name or have a bell sound each time you are aroused?",
    "Would you rather have a large 10 inch long belly button that swayed to music or have accordions for legs?",
    "Would you rather have to sneeze but not be able to or have something stuck in your eye for an entire year?",
    "Would you rather have a dragon or be a dragon?",
    "Would you rather secretly have sex with a goat or have everyone think you had sex with a goat even though you didn’t?",
    "Would you rather have hair nowhere on your body or be very hairy all over and not be able to shave?",
    "Would you rather never be able to speak again or always have to say everything that is on your mind?",
    "Would you rather be able to read or be able to read minds (but be illiterate)?",
    "Would you rather be able to speak fluently every language in the world or be the best in the world at something of your choosing?",
    "Would you rather be in prison for five years in solitary confinement or not ever go to prison and not ever become rich?",
    "Would you rather wear a snow suit in the desert or be naked in Antarctica?",
    "Would you rather change the past or be able to see into the future?"
  ],
  couples: [
    "Would you rather have one sex partner or multiple sex partners?",
    "Would you rather swallow or spit?",
    "Would you rather be on the bottom or on top?",
    "Would you prefer to have someone watching you have sex or watch someone having sex?",
    "Would you rather have sex in the morning or at night?",
    "Would you rather bring another person in bed with us or cheat on me?",
    "Would you rather have sex with the lights off or with the lights on?",
    "Would you rather receive oral sex or give it?",
    "Would you rather have romantic sex or try out some new kinky sex ideas?",
    "Would you rather end a first date with sex or with a passionate kiss?",
  ],
  girls: [
    "Would you rather wear a pushup bra all day long, every day or stiletto heels all day long, every day?",
    "Would you rather be told to stop being so sensitive every day or be asked if you are PMSing every day?",
    "Would you rather get a rash from a poor bikini wax job or have an entire eyebrow accidentally waxed off?",
    "Would you rather go through a whole day with a very visible panty line or with lipstick on your teeth?",
    "Would you rather have your gynecologist use a speculum that is too large or a speculum that is cold?",
    "Would you rather go through a whole day with your bra’s underwire poking you or have a very bad hair day?",
    "Would you rather be able to choose your bridesmaid dress or never have to be a bridesmaid again?",
    "Would you never have painful cramps again or never have to shave again?",
    "Would you rather be treated like a human being or be catcalled?",
    "Would you rather get your period on a date or at the beach?",
  ],
  technology: [
    "Would you rather email an embarrassing email to your entire company or eat an entire stick of butter?",
    "Would you rather never laugh again or never use your smartphone again?",
    "Would you rather lose $1000 or lose all of your phone contacts?",
    "Would you rather be stung by a jellyfish or give up Facebook for a week?",
    "Would you rather eat the same meal for the rest of your life or never use Instagram again?",
    "Would you rather give up alcohol for a year or give up your smartphone for a month?",
    "Would you rather never have coffee again or live without TV forever?",
    "Would you rather feel like you were hung over for a week or not use email for a week?",
    "Would you rather win a trip to Hawaii or win a free laptop?",
    "Would you rather give up shopping for six months or give up emoji for six months?"
  ]
  kids: [
    "Would you rather have cookies or have French fries?",
    "Would you rather be good at sports or get good grades?",
    "Would you rather help clean up after dinner or help set the table before dinner?",
    "Would you rather get up early or stay up late?",
    "Would you rather be super fast or super strong?",
    "Would you rather be invisible or have the ability to fly?",
    "Would you rather be the smartest kid in school or the most popular kid in school?",
    "Would you rather eat your boogers or lick your shoe?",
    "Would you rather have bad breath or smelly feet?",
    "Would you rather be a police officer or be a firefighter?"
  ],
}

fromRandom = function fromRandom(source) {
  if (source.constructor === Array) {
    return fromRandom(source[Math.floor(Math.random() * source.length)]);
  }
  if (typeof source === 'object') {
    var keys;
    keys = Object.keys(source);
    return fromRandom(source[keys[Math.floor(Math.random() * keys.length)]]);
  }
  return source;
};

exports.fromRandom = fromRandom;
exports.questions = questions;
exports.answers = answers;
