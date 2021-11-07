## Hashtag Generator

Converts strings to hashtag;

Requirements: String must be not empty. String length up to 140 characters.

Examples:
```
const hashtagGenerator = require('hashtag-generator');

hashtagGenerator(' string to hashtag') => '#StringToHashtag'
hashtagGenerator('    Hello     World   ') =>  "#HelloWorld"
hashtagGenerator('') =>  false
```
