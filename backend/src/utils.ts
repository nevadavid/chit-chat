export function generateReadableName() {
  const adjectives = [
    "Brave",
    "Sneaky",
    "Happy",
    "Sleepy",
    "Curious",
    "Magic",
    "Tiny",
    "Wise",
    "Funny",
    "Lucky",
  ];
  const characters = [
    "Cinderella",
    "Aladdin",
    "PeterPan",
    "SnowWhite",
    "Pinocchio",
    "Rapunzel",
    "Ariel",
    "RobinHood",
    "Hobbit",
    "Gandalf",
    "Mickey",
    "Donald",
    "Goofy",
    "Winnie",
    "Tinkerbell",
  ];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const character = characters[Math.floor(Math.random() * characters.length)];
  const number = String(Math.floor(Math.random() * 10000)).padStart(4, "0");

  return `${adj}${character}${number}`;
}
