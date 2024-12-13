# xTimers

**Production:**: [xtimers.shadowcoding.com](https://xtimers.shadowcoding.com)

Customizable timer creation tool.
Can be used to set up birthday, holiday, and other timers.

*Nothing is stored, it is all based on the root url*

### *Note*:
*Everything is subject to change as I tinker with this project. I will update the README as I go.*

## URL Parameters

- a: Background color in hex without hash
- b: Text color in hex without hash
- c: Header that is to be displayed (formatted without special characters that would interfere with browser)
- d: Text to display (formatted without special characters that would interfere with browser)
- e: Logo URL (URL to external logo so it can be displayed via img)
- date: Formatted date for the countdown on the timer
- opt: 5 customizable options (see options below)

### Options

Within the *opt* parameter, you can store 5 different numeric values in sequence. (e.g. 13214).

These options dictate various parts of the timer. The sequence is as follows:
**Header Font, Text Font, Timer Font, Timer Style, Emblem**

#### Header, Text, and Timer Fonts

The following fonts are available (Beside their numeric option value):
- 1 - Arial
- 2 - Cambria
- 3 - Verdana
- 4 - Timers New Roman
- 5 - Trebuchet

#### Timer Styles

Currently, the following styles are available (Beside their numeric option value):
- 1 - Standard
- 2 - Festive
- 3 - Blues
- 4 - New Year

#### Emblems

Currently, the following emblems are available to be displayed on the timer (Beside their numeric option value):
- 1 - Holly Leaf
- 2 - Birthday Cake
- 3 - Firework
- 4 - Exclamation Mark
- 5 - Heart
- 6 - Balloons