# Bubble Budget — marketing copy source of truth

Everything on `index.html` is drawn from this file. Edit here first, then mirror into the
page so copy stays consistent across the landing page, the store listings and any ads.

---

## 0. Rules for this page

1. **Never make claims about other apps.** No "every other app", no "unlike competitors",
   no invented tap counts for software we don't control. Those claims are unquantifiable
   and they make the page sound defensive.
2. **State what Bubble Budget doesn't do, as facts about us.** No subscription, no data
   collection, no bank linking, no tap marathon, no spreadsheet homework. The reader draws
   their own comparison — that lands harder than us drawing it for them.
3. **No scare quotes, no sneering.** Not at categories of app, not at practices.
4. Every number on the page must describe *our* app and be verifiable.

---

## 1. Positioning

**One-line pitch**
A budget tracker where your categories are bubbles you tap, not rows you fill in.

**The wedge**
Budgeting fails at the moment of entry. If recording four dollars costs any real effort,
it doesn't get recorded, and within a week the numbers are wrong. Bubble Budget attacks
the cost of that one moment.

**Primary audience**
Busy people who have installed and abandoned a finance app before. They don't want another
dashboard; they want logging to cost nothing.

**Proof points (priority order)**
1. Two taps to log, keypad already open.
2. The canvas is readable at a glance — size, colour, ring.
3. Fully offline, local SQLite, no account, no subscription, no telemetry.
4. Optional sync to a Google Sheet the user owns.

---

## 2. Hero

**Eyebrow:** Offline-first · No account · No subscription

**Headline:** Log it in two taps. / Nothing else to do.

**Subhead:**
Bubble Budget puts every spending category on one canvas as a bubble you can touch. Tap the
bubble, type the amount — that's the whole interaction. No menus, no dropdowns, no sign-up.

**CTA:** App Store (live) · Android (coming soon, not a link)
**CTA note:** Free on the App Store. Works on a plane. Nothing to cancel.
**Trust row:** 100% offline · Local SQLite storage · Zero tracking · No sign-up

### Headline alternates (for A/B testing)
- Two taps. Logged. Done.
- Your budget, as bubbles you can actually touch.
- Tap the bubble. Type the number. That's it.
- The budgeting app that gets out of your way.

---

## 3. Five things this app doesn't do

**Eyebrow:** Designed by subtraction
**Headline:** Five things this app doesn't do.
**Deck:** Bubble Budget is shaped as much by what was left out as by what went in. Each of
these was a deliberate decision, and together they are why logging a coffee takes two seconds.

### What's not in it
- **No subscription.** Nothing to cancel, no trial countdown.
- **No data collection.** No analytics, no ad identifiers, no profile of you.
- **No bank linking.** You are never asked for banking credentials.
- **No tap marathon.** No forms, category dropdowns or confirm screens.
- **No spreadsheet homework.** No weekend tidy-up to keep the numbers honest.

### What that leaves — 2 taps to log a coffee
1. Tap the Coffee bubble — the keypad is already open
2. Tap **+5**, or type the amount and log it

> The bubble grows a little. Its ring edges toward amber. Your whole month updated in about
> two seconds, without leaving the screen or making a single decision about where the entry
> belongs.

---

## 4. Visual channels

**Headline:** Three visual channels. Zero mental maths.
**Deck:** A spreadsheet makes you compare numbers. A canvas of bubbles lets you see the
answer before you've finished looking at it.

**Size is the amount** — Each bubble's area is proportional to what you've spent. Groceries
ballooning past everything else isn't a number you have to notice — it's the biggest thing
on screen.

**Colour is identity** — Pick a colour per category once and your muscle memory does the
rest. After a week you stop reading labels and start reaching straight for the teal one.

**Rings are your limits** — A bubble quietly draws an amber ring at 80% of its cap and a red
one at 100%. No push notifications, no red banners, no shame — just a ring that's there when
you look.

---

## 5. Feature grid

**Headline:** Small app. Serious about the two seconds that matter.
**Deck:** Everything here exists to protect one thing: the moment you decide whether logging
this is worth the effort.

| Feature | Copy |
|---|---|
| Tactile glass physics | Bubbles drift, jostle and settle on a single canvas with real momentum. It feels like moving objects around a desk, not editing a database row. |
| Two taps, then the keypad | Tapping a bubble opens the numeric sheet instantly. No transaction type, no category picker, no date field you have to confirm. |
| Quick-add chips | +5 · +10 · +25 sitting right above the keypad. The parking meter, the flat white, the round of coffees — logged before the card terminal beeps. |
| Offline-first, local SQLite | Your ledger lives in a SQLite file on your own device. No server round-trip, no loading spinner, no "you're offline" screen. Ever. |
| Your spreadsheet, your call | Sync to a Google Sheet you own via a script you install, or just export the ledger as a spreadsheet whenever you feel like it. Both routes skip us entirely. |
| In-app KPI reports | Burn rate, biggest movers, month-over-month deltas and category shares — computed on-device, in a report you can read in ten seconds. |

---

## 6. Privacy & ownership

**Headline:** Your spending never leaves your phone.

**Deck:** Bubble Budget has no back end at all. There is no account to create and no copy of
your ledger anywhere but your phone — so there is nothing to breach, nothing to sell, and
nothing to lock behind a subscription.

- **Local SQLite storage.** One database file, on your device, under your control.
- **Zero telemetry.** No analytics SDK, no crash-tracking pixel, no ad identifiers.
- **No bank connection.** We never ask for credentials, because we never need them.
- **Yours to export.** Take the whole ledger out as a spreadsheet any time, sync or no sync.

**Where your data actually goes**
1. You tap a bubble — the entry is written to a SQLite file on your phone
2. That is the end of the journey, unless you switch on Sheet sync
3. With sync on, it posts to your Google Sheet — your account, not ours

> There is no further step where it reaches a server of ours, because there isn't one.

---

## 7. Getting your data out

**Eyebrow:** Getting your data out
**Headline:** Offline by default. Spreadsheet on demand.
**Deck:** Some months you just want the bubbles. Some months you want pivot tables. Two ways
to get there, and you never have to choose one permanently.

**Set it once — Sync to your Google Sheet**
Paste in a short Apps Script and entries post straight from your phone to a sheet you own, as
you log them. Automated dashboards build themselves from the rows.

**Or skip it entirely — Just export the file**
Don't want sync, or don't want a Google account in the loop? Export the whole ledger as a
spreadsheet in a couple of taps and open it in Excel, Numbers or Sheets. No setup, no script,
no account.

> Both routes matter. Sync is for people who want the sheet always current; export is for
> everyone who just wants their numbers out on a Sunday afternoon. Neither routes through us.

---

## 8. FAQ

**Is it really free, with no subscription?**
Yes. There's no server to pay for, so there's no recurring bill to pass on to you. No trial
timer, no locked reports, no "Pro" tier hiding the useful half of the app.

**Does it connect to my bank?**
No, by choice. Linking a bank means handing credentials to a third party, and imported
transactions still need sorting into categories afterwards. We would rather make logging
cheap enough in the moment that you simply do it as you go.

**What happens to my data if I delete the app?**
It goes with it — the database is a local file, not a row in someone's cloud. If you want a
copy that outlives the app, turn on Google Sheet sync and the ledger lives in your own
spreadsheet too.

**Can I get my data out without setting up sync?**
Yes. Export the whole ledger as a spreadsheet in a couple of taps and open it wherever you
like — Excel, Numbers, Sheets. The Apps Script sync is for people who want it landing in a
sheet continuously; export is for everyone else.

**How does the Google Sheet sync work?**
You create a sheet, deploy a short Google Apps Script that Bubble Budget gives you, and paste
the resulting URL into the app. Entries post directly from your phone to your sheet. Nothing
routes through us, because there is no us to route through.

**Can I set limits per category?**
Yes. Each bubble can carry its own cap. At 80% it draws an amber ring, at 100% a red one —
visible at a glance on the canvas, without a single notification.

**Which platforms is it on?**
On iPhone today, free on the App Store. It is built in Flutter, so an Android build is
planned from the same codebase.

---

## 9. Final CTA

**Headline:** The budget app you'll still be using in March.
**Body:** Because it never asked you to sign up, never charged you, and never made you fill
in a form to record a coffee.
**Note:** No account. No subscription. No tracking.

---

## 9a. Live listing facts

- **App Store:** https://apps.apple.com/us/app/bubble-budget/id6808602875
- **Name / subtitle as published:** Bubble Budget — Visual Expense Tracker
- **Developer of record:** Nazreen Ansar
- **Price:** Free · **Category:** Productivity · **Age rating:** 4+
- **Apple privacy card:** "The developer does not collect any data from this app" — the page's
  privacy claims must stay consistent with this.
- **Android:** not published. The badge on the page is a non-clickable "coming soon" state.
  Swap it for a real link when the Play listing exists, and update the FAQ at the same time.

---

## 10. Store listing drafts

**App Store subtitle (30 char max)**
`Two taps. Logged. Done.` (23)

**Promotional text (170 char max)**
Budgeting dies at the moment of entry. Bubble Budget makes every category a bubble — tap it,
type it, done. Offline, no account, no subscription.

**Keywords (100 char, comma separated, no spaces)**
`budget,expense,tracker,offline,spending,money,finance,no account,private,simple,daily,log`

**Short description — Google Play (80 char max)**
`Tap a bubble, log a spend. Offline budget tracker. No account, no subscription.` (78)

---

## 11. Voice notes

- Short sentences. Concrete nouns. Real dollar amounts, not "your finances".
- The engine of the page is subtraction: what isn't here, and what that buys you. Never
  comparison against named or implied competitors — see §0.
- Never claim bank-grade security or use fintech boilerplate. The pitch is that there's no
  server to secure.
- Avoid guilt framing ("stop wasting money"). The app deliberately doesn't nag; the copy
  shouldn't either.
- Keep the em-dash-heavy rhythm out of store listings; Apple review copy reads better plain.

---

## 12. Visual direction

The hero canvas is framed as an actual phone — bezel, status bar, home indicator — so the
bubbles read as the app rather than as a chart. Everything else is light and plain,
deliberately. Warm off-white paper, white cards, hairline borders, short
soft shadows, one deep-teal accent. No dark mode, no neon, no glowing gradients — that
aesthetic has become the house style of dodgy finance and crypto sites, which is the exact
opposite of the signal this app needs. Colour appears in the category bubbles and almost
nowhere else.
