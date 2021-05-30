# YouTube Controls
## The problem
I watch a lot of tutorials on YouTube, and when I'm working in another tab or program having to constantly switch back to Chrome to pause and unpause or rewind the tutorial gets old fast. While I could find third party extensions to bind YouTube play/pause function to a keyboard hotkey none existed that allowed me to also rewind or fast forward the video.
## Disclaimer
These instructions work as of May 2021. It's my understanding that YouTube has broken this kind of scripts multiple times in the past, so if that happens I'll try update this repository with new scripts.
## Requirements
1. Google Chrome. I assume this also works on other Chromium based browsers that support extensions.
2. An extension to execute Javascript scripts with a global hotkey, I use [Global shortcuts](https://github.com/aironavt/global-shortcuts).
3. The scripts from this repository.
4. (Optional) Chrome is limited in the hotkeys it supports, so I also recommend a way to remap the hotkeys you assign to the controls. I personally use [AutoHotkey](https://www.autohotkey.com/), but if your keyboard has its own software that should work just fine.
## Installation
1. In Chrome, navigate to Global shortcuts options.
2. Click "Create shortcut".
3. In the Name field, type "Rewind".
4. Under the Shortcut dropdown, select "Command 01".
5. In the URL field, type "[https://www.youtube.com/*](https://www.youtube.com/*)". Be sure not to miss the asterisk at the end.
6. In the Code field, copy and paste the code from the script "Rewind.js" from this repository.
7. Repeat step 2 to 6, this time typing "Play and Pause" in the Name field, selecting "Command 02" in the Shortcut dropdown, using the same URL in the URL field and copying the "PlayAndPause.js" script code in the Code field.
8. Repeat step 2 to 6, this time typing "Fast Forward" in the Name field, selecting "Command 03" in the Shortcut dropdown, using the same URL in the URL field and copying the "FastForward.js" script code in the Code field.
9. Navigate to chrome://extensions/shortcuts, and you will find a list of your extensions with forms to configure their hotkeys. 
10. Under "Global shortcuts", assign hotkeys to "Command 01", "Command 02" and "Command 03" by clicking the corresponding pencil icon and then entering the hotkey combination. I personally use "Alt + Shift + U" for Command 01 (rewind), "Alt + Shift + I" for Command 02 (play/pause) and "Alt + Shift + O" for "Command 03 (fast forward).
11. Set each shortcut as "Global" or "In Chrome" based on your preferences. 
12. That's it! You're now able to control YouTube while its tab is not in focus - with Chrome in focus or not depending on what you picked in step 11.
13. (Optional) I use AutoHotkey to remap my hotkeys to my keyboard dial so I can scrub and play/pause YouTube by rotating the dial or pressing it.
