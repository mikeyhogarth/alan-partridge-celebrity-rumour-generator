# Alan Partridge Celebrity Rumour Generator

A completely unofficial fan made Alan Partridge celebrity rumour generator. Generates untrue rumours about celebrities in the style of Alan Partridge.

![Screenshot](/public/screenshot.png?raw=true)

It's deployed [here](https://alan-partridge-celebrity-rumour-generator.netlify.app/) if you want to have a play.

Inspired by [this tweet](https://twitter.com/ThePartridgePod/status/1316837915402665987) from the [Monkey Tennis podcast](https://podfollow.com/monkeytennis/view) (thank you Katie for pointing me in its direction and to anyone who has helped come up with the content thus far).

## Contributing

If you look under the `src/data` folder it should be pretty obvious how it all works. Feel free to contribute by sending pull requests. The way it works is basically just lists of things being assembled into sentences;

### People

These should be people Alan has likely had some kind of interaction with.

### Actions

These need to be the same tense as 'eat a kebab'. The more mundane the better.

### Adjectives

These are sometimes used in sentences, and include words like 'disturbing' and 'silly'.

### Sentences

A construct that could conceivably have people, actions and adjectives dropped into it and still make sense. For example, `One time I watched {person} {action}, and it was {adjective}` might result in `One time I watched Ross Kemp eat a kebab and it was disturbing`

## Developy Stuff

It's just yarn/npm - just install and start. There is no server.
