import actions from "./data/actions.json";
import people from "./data/people.json";
import adjectives from "./data/adjectives.json";
import sentences from "./data/sentences.json";

export function generateSentence() {
  const sentence = randomSentence();
  return capitalize(
    sentence
      .replace("{person}", randomPerson())
      .replace("{adjective}", randomAdjective())
      .replace("{action}", randomAction()) + "."
  );
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function randomSentence(): string {
  return randomItemFromArray(sentences);
}

function randomAction(): string {
  return randomItemFromArray(actions);
}

function randomAdjective(): string {
  return randomItemFromArray(adjectives);
}

function randomPerson(): string {
  return randomItemFromArray(people);
}

function randomItemFromArray(items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}
