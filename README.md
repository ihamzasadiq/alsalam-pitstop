# Al Salam Pit Stop Challenge

A browser-based, bilingual (English/Arabic) Formula racing kiosk concept. Players enter a first name, complete a timed pit stop and launch challenge, then see their result and the day's leaderboard.

> **Concept demo:** branding and event copy are placeholders and require approval before public use.

## Run

Open `index.html` in a modern browser. There is no build step or package install. Internet access is needed for the Google Fonts; for an offline kiosk, self-host those fonts.

## Gameplay

- Tap the highlighted wheels to loosen and tighten each tyre, then tap **GO** after the start lights go out.
- Incorrect taps and false starts add configurable time penalties.
- Scores and first names are stored in that browser's local storage. The hidden admin panel (long-press the sponsor wordmark for 3 seconds) can export scores as CSV or clear the local data.
- The leaderboard is local to the browser and shows today's scores; it is not a shared or server-backed leaderboard.

## Configure

Edit the `CONFIG` object near the top of the script in `index.html`. It controls sponsor name and logo, theme colours, event and prize text, language, round and launch timing, penalties, result tiers, leaderboard size, and kiosk reset timing. English and Arabic interface text is in the adjacent `I18N` object.

The logo slot accepts an SVG string or markup. Review any supplied markup and assets before use.

## Check

Run the name-validation self-check with:

```sh
node test-name.mjs
```

Before deployment, get approval for the bank's name, logo and colours; clear the event and prize copy; and have consent and privacy language reviewed by compliance. The current demo stores names and scores locally without a consent flow, so do not use it with real participant data until that flow and the data-handling approach are approved.
