// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hi! I'm Professor Eliza. I'm a professor that specializes in pokemon through generation five. Have any questions about Pokemon?",
// additions (not original)
"Hello Trainer! I'm Professor Eliza and I specialize in pokemon through generation five. Which starter Pokemon is your favorite?",
"Greetings, Trainer! I'm Professor Eliza. I specialize in pokemon through generation five. What is your favorite Pokemon game?"
];

var elizaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"catch you",
"gotta go battle",
"have fun playing"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["pokemon", 0, [
 ["*", [
     "There are over 1000 Pokemon in the Pokedex! Do you have a favorite game?",
     "What type of Pokemon do you like? Grass? Water? Dark?"
  ]]
]],
["red", 1, [
 ["*", [
     "That is one of the two original releases! Back in 1996, Pokemon Red and Green were released in Japan. What is your favorite type of pokemon?",
     "Oh, you're a fan of the classics. What is your favorite type of pokemon?",
     "I like Pokemon Red, too, but it is not my favorite. What is your favorite type of pokemon?",
  ]]
]],

["green", 1, [
  ["*", [
    "That is one of the two original releases! Back in 1996, Pokemon Red and Green were released in Japan. What is your favorite type of pokemon?",
    "Oh, you're a fan of the classics. What is your favorite type of pokemon?",
    "I like Pokemon Green, too, but it is not my favorite. What is your favorite type of pokemon?"
  ]]
]],

["blue", 1, [
  ["*", [
    "One of the first generation games! Truly a classic. What is your favorite type of pokemon?"
  ]]
]],

["gold", 1, [
  ["*", [
    "One of the second generation games! Truly a classic. What is your favorite type of pokemon?",
    "Pokemon Gold Version is available on the original Gameboy. What is your favorite type of pokemon?"
  ]]
]],

["silver", 1, [
  ["*", [
    "One of the second generation games! Truly a classic. What is your favorite type of pokemon?",
    "Pokemon Silver is available on the original Gameboy. What is your favorite type of pokemon?"
  ]]
]],

["ruby", 1, [
  ["*", [
    "One of the third generation games! One of my favorites. What is your favorite type of pokemon?",
    "Ruby is available for the GameBoy Advance, as it released in 2002. What is your favorite type of pokemon?"
  ]]
]],

["sapphire", 1, [
  ["*", [
    "One of the third generation games! Originally released for the GameBoy Advance. What is your favorite type of pokemon?",
    "Pokemon Sapphire is available for the GameBoy Advance and features Kyogre as the legendary Pokemon. What is your favorite type of pokemon?"
  ]]
]],

["emerald", 1, [
  ["*", [
    "One of the third generation games! My favorite Pokemon game to date. What is your favorite type of pokemon?",
    "Pokemon Emerald released as the third installment in the generation three games. What is your favorite type of pokemon?"
  ]]
]],

["heartgold", 1, [
  ["*", [
    "A remake of the second generation games, Pokemon HeartGold released for the Nintendo D.S. What is your favorite type of pokemon?"
  ]]
]],

["soulsilver", 1, [
  ["*", [
    "A remake of the second generation games, Pokemon SoulSilver released for the Nintendo D.S. What is your favorite type of pokemon?"
  ]]
]],

["pearl", 1, [
  ["*", [
    "One of the generation four games! A great game to pick up and play for the Nintendo D.S. What is your favorite type of pokemon?",
    "Pokemon Pearl featured starters like Turtwig, Chimchar, and Piplup.What is your favorite type of pokemon?"
  ]]
]],

["diamond", 1, [
  ["*", [
    "One of the fourth generation games! A great game to pick up and play for the Nintendo D.S. What is your favorite type of pokemon?",
    "Pokemon Diamond featured starters like Turtwig, Chimchar, and Piplup. What is your favorite type of pokemon?"
  ]]
]],

["platinum", 1, [
  ["*", [
    "One of the fourth generation games! It released as the third installment in the fourth generation of games. What is your favorite type of pokemon?",
    "Pokemon Platinum featured all the same starters as Pearl and Diamond, with a twist at the end that sets it apart. What is your favorite type of pokemon?"
  ]]
]],

["black", 1, [
  ["*", [
    "One of the fifth generation games! Pokemon Black released for the Nintendo D.S. and featured all new Pokemon. What is your favorite type of pokemon?"
  ]]
]],

["white", 1, [
  ["*", [
    "One of the fifth generation games! Pokemon White was released on the Nintendo D.S. and featured new game mechanics and Pokemon. What is your favorite type of pokemon?"
  ]]
]],


["charmander",2, [
  ["*", [
     "Charmander evolves into Charmeleon, then into Charizard. What other starter pokemon do you want to learn about?",
     "Charmander is a fire type pokemon. What other starter pokemon do you want to learn about?"
   ]]
  ]],

["squirtle",2, [
    ["*", [
       "Squirtle evolves into Wartortle, then into Blastoise. What other starter pokemon do you want to learn about?",
       "Squirtle is a water type pokemon. What other starter pokemon do you want to learn about?"
     ]]
  ]],

["bulbasaur",1, [
  ["*", [
      "Bulbasaur evolves into Ivysaur, then into Venusaur. What other starter pokemon do you want to learn about?",
      "Bulbasaur is a grass type pokemon. What other starter pokemon do you want to learn about?"
    ]]
  ]],

["cyndaquil", 1, [
 ["*", [
     "Cyndaquil evolves into Quilava, then into Typhlosion. What other starter pokemon do you want to learn about?",
     "Cyndaquil is a fire type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["chikorita", 1, [
 ["*", [
     "Chikorita evolves into Bayleef, then into Meganium. What other starter pokemon do you want to learn about?",
     "Chikorita is a grass type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["totodile", 1, [
 ["*", [
     "Totodile evolves into Croconaw, then into Feraligatr. What other starter pokemon do you want to learn about?",
     "Totodile is a water type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["treecko", 1, [
 ["*", [
     "Treecko evolves into Grovyle, then into Sceptile. What other starter pokemon do you want to learn about?",
     "Treecko is a grass type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["torchic", 1, [
 ["*", [
     "Torchic evolves into Combusken, then into Blaziken. What other starter pokemon do you want to learn about?",
     "Torchic is a fire type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["mudkip", 1, [
 ["*", [
     "Mudkip evolves into Marshtomp, then into Swampert. What other starter pokemon do you want to learn about?",
     "Mudkip is a water type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["turtwig", 1, [
 ["*", [
     "Turtwig evolves into Grotle, then into Torterra. What other starter pokemon do you want to learn about?",
     "Turtwig is a grass type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["chimchar", 1, [
 ["*", [
     "Chimchar evolves into Monferno, then into Infernape. What other starter pokemon do you want to learn about?",
     "Chimchar is a fire type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["piplup", 1, [
 ["*", [
     "Piplup evolves into Prinplup, then into Empoleon. What other starter pokemon do you want to learn about?",
     "Piplup is a water type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["snivy", 1, [
 ["*", [
     "Snivy evolves into Servine, then into Serperior. What other starter pokemon do you want to learn about?",
     "Snivy is a grass type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["tepig", 1, [
 ["*", [
     "Tepig evolves into Pignite, then into Emboar. What other starter pokemon do you want to learn about?",
     "Tepig is a fire type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["oshawott", 1, [
 ["*", [
     "Oshawott evolves into Dewott, then into Samurott. What other starter pokemon do you want to learn about?",
     "Oshawott is a water type pokemon. What other starter pokemon do you want to learn about?"
  ]]
]],

["fire", 1, [
 ["*", [
     "Fire type pokemon are strong against bug, grass, ice, and steel type pokemon but weak against water, ground, and rock type pokemon. What other types would you like to know about?"
  ]]
]],

["bug", 1, [
 ["*", [
     "Bug type pokemon are strong against dark, grass, and psychic type pokemon but weak against rock, ground, and fire type pokemon. What other types would you like to know about?"
  ]]
]],

["dark", 1, [
 ["*", [
     "Dark type pokemon are strong against ghost and psychic type pokemon but weak against bug, fairy, and fighting type pokemon. What other types would you like to know about?"
  ]]
]],

["dragon", 1, [
 ["*", [
    "Dragon type pokemon are strong against other dragon types, but are weak to dragon, fairy, and ice type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["electric", 1, [
 ["*", [
    "Electric type pokemon are strong against flying and water type pokemon, but weak to ground type. What other types of pokemon would you like to know about?"
  ]]
]],

["fairy", 1, [
 ["*", [
    "Fairy type pokemon are strong against dark, dragon, and fighting type pokemon but weak against poison and steel type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["fighting", 1, [
 ["*", [
    "Fighting type pokemon are strong against dark, ice, normal, rock, and steel type pokemon and are weak against psychic, flying, and fairy type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["flying", 1, [
 ["*", [
    "Flying type pokemon are strong against bug, grass, and fighting type pokemon but are weak against rock, ice, and electric type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["ghost", 1, [
 ["*", [
    "Ghost type pokemon are strong against ghost and psychic type pokemon but are weak against ghost and dark type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["grass", 1, [
 ["*", [
    "Grass type pokemon are strong against ground, rock, and water type pokemon but are weak against poison, ice, flying, fire, and bug type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["ground", 1, [
 ["*", [
    "Ground type pokemon are strong against electric, fire, poison, rock, and steel type pokemon but are weak against water, ice, and grass type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["ice", 1, [
 ["*", [
    "Ice type pokemon are strong against dragon, flying, grass, and ground type pokemon, but are weak to steel, rock, ground, fire, and fighting type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["normal", 1, [
 ["*", [
   "Normal type pokemon are not strong against any other types of pokemon, but are only weak against fighting types. What other types of pokemon would you like to know about?"
  ]]
]],

["poison", 1, [
 ["*", [
    "Poison type pokemon are strong against fairy and grass type pokemon but weak to psychic and ground type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["psychic", 1, [
 ["*", [
    "Psychic pokemon are strong against fighting and poison type pokemon but weak to ghost, dark, and grass type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["rock", 1, [
 ["*", [
    "Rock type pokemon are strong against grass, fire, flying, and ice type pokemon but weak to water, steel, ground, grass, and fighting type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["steel", 1, [
 ["*", [
    "Steel type pokemon are strong against fairy, ice, and rock type pokemon but weak to ground, fire, and fighting type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["water", 1, [
 ["*", [
    "Water type pokemon are strong against fire, ground, and rock type pokemon but are weak to grass and electric type pokemon. What other types of pokemon would you like to know about?"
  ]]
]],

["legendary", 1, [
 ["*", [
    "Legendary pokemon are some of the strongest and most difficult pokemon to capture. Those who catch them are some of the most skilled trainers in the region. What other types of pokemon do you want to know about?"
  ]]
]],

["Pokemon", 1, [
 ["* tell me about pokemon *", [
    "Pokemon is a game created in the late 1990's that involved capturing creatures and battling friends and gym leaders. The goal is to become the strongest trainer in the region through the completion of gym battles."
  ]]
]],

["battle", 1, [
 ["* tell me about battling *", [
    "Battling in pokemon games includes turn based systems where each player has the opportunity to use one of four moves, and the winner is crowned when one player has eliminated all six of the oponents pokemon."
  ]]
]],

["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],

["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
