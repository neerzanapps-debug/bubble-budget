# Bubble Budget — marketing copy source of truth

Everything on `bubble-budget/index.html` is drawn from this file. Edit here first,
then mirror into the page so copy stays consistent across the landing page, the
store listings and any ads.

---

## 1. Positioning

**One-line pitch**
A budget tracker where your categories are living glass bubbles, not spreadsheet rows.

**The wedge**
Nobody quits budgeting because they stopped caring about money. They quit because
logging a $4 coffee costs seven taps. Bubble Budget attacks the friction, not the maths.

**Primary audience**
Busy people who have installed — and abandoned — two or three finance apps already.
They don't want another dashboard. They want logging to cost nothing.

**Proof points (in priority order)**
1. Two taps to log, versus seven in a conventional app.
2. The canvas is readable at a glance — size, colour, ring.
3. Fully offline, local SQLite, no account, no subscription, zero tracking.
4. Optional sync to a Google Sheet the user owns.

---

## 2. Hero

**Eyebrow:** Offline-first · No account · No subscription

**Headline:** Stop filling in forms. Start popping bubbles.

**Subhead:**
Every budget app asks you to fill in a form for a $4 coffee. Bubble Budget gives you a
canvas of living glass bubbles instead — one per category. Tap the bubble, type the
number, done. Two taps, no menus, no dropdowns, no sign-up.

**CTA:** App Store · Google Play
**CTA note:** Free to use. Works on a plane. Nothing to cancel.
**Trust row:** 100% offline · Local SQLite storage · Zero tracking · No sign-up

### Headline alternates (for A/B testing)
- Two taps. Logged. Done.
- Your budget, as bubbles you can actually touch.
- The budget app that never asks you to fill in a form.
- Seven taps to log a coffee is why you quit. This takes two.

---

## 3. The friction problem

**Section headline:** You didn't quit budgeting. You quit the data entry.

**Deck:**
Nobody abandons a finance app because they stopped caring about money. They abandon it
because logging a coffee costs seven taps and forty seconds of admin. Bubble Budget
removes the admin.

### Every other budget app — 7 taps
1. Open the app, wait for it to sync
2. Hunt for the "＋ Add transaction" button
3. Choose the transaction type
4. Open the category dropdown
5. Scroll through 40 categories
6. Tap the amount field and type
7. Tap Save. Wait. Confirm.

> Do that six times a day and it becomes a chore. Skip it for three days and the numbers
> are wrong. Wrong numbers kill the habit — and the budget with it.

### Bubble Budget — 2 taps
1. Tap the Coffee bubble — the keypad is already open
2. Tap **+5**, or type the amount and log it

> The bubble grows a little. Its ring edges toward amber. You saw your whole month change
> in the two seconds it took — and you never left one screen.

---

## 4. Visual channels

**Section headline:** Three visual channels. Zero mental maths.
**Deck:** A spreadsheet makes you compare numbers. A canvas of bubbles lets you see the
answer before you've finished looking at it.

**Size is the amount** — Each bubble's area is proportional to what you've spent.
Groceries ballooning past everything else isn't a number you have to notice — it's the
biggest thing on screen.

**Colour is identity** — Pick a colour per category once and your muscle memory does the
rest. After a week you stop reading labels and start reaching straight for the teal one.

**Rings are your limits** — A bubble quietly draws an amber ring at 80% of its cap and a
red one at 100%. No push notifications, no red banners, no shame — just a ring that's
there when you look.

---

## 5. Feature grid

**Section headline:** Small app. Serious about the two seconds that matter.
**Deck:** Everything here exists to protect one thing: the moment you decide whether
logging this is worth the effort.

| Feature | Copy |
|---|---|
| Tactile glass physics | Bubbles drift, jostle and settle on a single canvas with real momentum. It feels like moving objects around a desk, not editing a database row. |
| Two taps, then the keypad | Tapping a bubble opens the numeric sheet instantly. No transaction type, no category picker, no date field you have to confirm. |
| Quick-add chips | +5 · +10 · +25 sitting right above the keypad. The parking meter, the flat white, the round of coffees — logged before the card terminal beeps. |
| Offline-first, local SQLite | Your ledger lives in a SQLite file on your own device. No server round-trip, no loading spinner, no "you're offline" screen. Ever. |
| Sync to *your* Google Sheet | Optional one-way sync straight into a spreadsheet you own, via a Google Apps Script you install. We never see it — there's no "we" in the middle. |
| In-app KPI reports | Burn rate, biggest movers, month-over-month deltas and category shares — computed on-device, in a report you can read in ten seconds. |

---

## 6. Privacy & ownership

**Headline:** Your spending never leaves your phone.

**Deck:** Bubble Budget has no back end. Not a small one, not a "privacy-respecting" one —
none at all. There is no account to create, so there is nothing to breach, sell, or hold
hostage behind a subscription.

- **Local SQLite storage.** One database file, on your device, under your control.
- **Zero telemetry.** No analytics SDK, no crash-tracking pixel, no ad identifiers.
- **No bank connection.** We never ask for credentials, because we never need them.
- **Yours to export.** Push to your own Google Sheet whenever you want a copy.

**Things you will never see in this app**
~~Create an account to continue~~ · ~~Connect your bank to get started~~ ·
~~Start your 7-day free trial~~ · ~~Upgrade to Pro to see this report~~ ·
~~We use cookies and 43 partners~~

---

## 7. Google Sheet sync

**Headline:** Offline by default. Spreadsheet when you want one.

**Body:** Some months you just want the bubbles. Some months you want pivot tables.
Bubble Budget pushes your ledger into a Google Sheet *you* own via an Apps Script you
paste in once — where automated dashboards build themselves from the rows.

---

## 8. FAQ

**Is it really free, with no subscription?**
Yes. There's no server to pay for, so there's no recurring bill to pass on to you. No
trial timer, no locked reports, no "Pro" tier hiding the useful half of the app.

**Does it connect to my bank?**
No — deliberately. Bank aggregation means handing credentials to a third party and then
correcting mis-categorised transactions forever. Bubble Budget is built on the idea that
two taps in the moment beats thirty minutes of cleanup later.

**What happens to my data if I delete the app?**
It goes with it — the database is a local file, not a row in someone's cloud. If you want
a copy that outlives the app, turn on Google Sheet sync and the ledger lives in your own
spreadsheet too.

**How does the Google Sheet sync work?**
You create a sheet, deploy a short Google Apps Script that Bubble Budget gives you, and
paste the resulting URL into the app. Entries post directly from your phone to your
sheet. Nothing routes through us, because there is no us to route through.

**Can I set limits per category?**
Yes. Each bubble can carry its own cap. At 80% it draws an amber ring, at 100% a red one
— visible at a glance on the canvas, without a single notification.

**Which platforms is it on?**
iOS and Android, from a single Flutter codebase.

---

## 9. Final CTA

**Headline:** The budget app you'll still be using in March.
**Body:** Because it never asked you to sign up, never charged you, and never made you
fill in a form to record a coffee.
**Note:** No account. No subscription. No tracking.

---

## 10. Store listing drafts

**App Store subtitle (30 char max)**
`Two taps. Logged. Done.` (23)

**Promotional text (170 char max)**
Budgeting dies from data entry, not from maths. Bubble Budget makes every category a
floating bubble — tap it, type it, done. Offline, no account, no subscription.

**Keywords (100 char, comma separated, no spaces)**
`budget,expense,tracker,offline,spending,money,finance,no account,private,simple,daily,log`

**Short description — Google Play (80 char max)**
`Tap a bubble, log a spend. Offline budget tracker. No account, no subscription.` (78)

---

## 11. Voice notes

- Short sentences. Concrete nouns. Real dollar amounts, not "your finances".
- Contrast is the engine of this page: seven taps vs two, form vs bubble, server vs phone.
- Never claim bank-grade security or use fintech boilerplate — the whole pitch is that
  there is no server to secure.
- Avoid guilt framing ("stop wasting money"). The app deliberately doesn't nag; the copy
  shouldn't either.
- Keep the em-dash-heavy rhythm out of store listings; Apple review copy reads better plain.
