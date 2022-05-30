# Free add-to-calendar button 😍 

![add-to-calendar button](https://phpphp.dk/gh-add-to-calendar-button-t1.png)
 

_The most used and trusted add-to-calendar button functionality on the internet.
Trusted by +150,000 companies around the world. Maintained daily and super reliable.
More than 500 mill events have been added to users calendars using AddEvent._

### Awesome features
- Works with all major calendar services (Apple, Google Calendar, Outlook, Outlook (online), Office 365, Yahoo)
- Works on websites and apps. For e-mails, use our add-to-calendar links on AddEvent.com
- Time zone and daylight saving time compatible. Makes sure date/time is correct across time zones.
- Touch- and user-friendly: Designed and tested to work with desktops, tablets and mobile devices. Optimized for touch devices, user-friendly and easy to understand calendar options.
- Keyboard Accessible: Fully keyboard accessible. WAI compliant (W3C). Useful to people with disabilities. Accessibility is required by law in many countries.
- No dependencies: Written in pure javascript. No need to install anything on your server. Using backwards compatible technologies to support older browsers (down to IE6).
- Legal: Fully GDPR, CCPA, and LGPD compatible
- Design: Download a predefined theme or customize the design to fit your needs with simple CSS changes


## Demo

Go to [addevent.github.io/add-to-calendar-button](https://addevent.github.io/add-to-calendar-button/) for a live demo.

## All features

* Simple and convenient integration of multiple buttons - configure them directly within the HTML code.
* Optimized UX (for desktop and mobile) - adjustable.
* Beautiful UI (the best combined from experts around the world).
* Up-to-date integration of all popular calendars:
  * Google Calendar.
  * Yahoo Calender.
  * Microsoft 365, Outlook, and Teams.
  * Automatically generated iCal/ics files (for all other calendars, like Apple).
* Timed and all-day events.
* Translatable labels and dynamic dates.
* Well documented code, to easily understand the processes and build on top of it.

![Demo Screenshot](https://phpphp.dk/gh-add-to-calendar-button-t2.gif)

## Install

### Option 1: CDN

1. Include (`<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>`) in your HTML (`<head>`) or (`<body>`) section. 
2. Add your "Add to Calendar" button snippet anywhere on your website (see configuration below)
3. That's it. You now have a functional "Add to Calendar" button

### Option 2: Self-hosted

1. **Download** the code from GitHub **or clone** the git repository. Alternatively, you can open up this file (`https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js`) and copy the contents of the file over to your existing javascript file. An uncompressed version is available here: (`https://cdn.addevent.com/libs/atc/1.6.1/atc.original.js`)

💥 If you prefer to use a different theme, you can download full examples on this location: 
https://www.addevent.com/documentation/add-to-calendar-button#anchor-themes

## Configuration

The add-to-calendar button snippet is a simple piece of HTML where you fill in your event details dynamically.

```html
<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">06/15/2022 08:00 AM</span>
    <span class="end">06/15/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
    <span class="location">Location of the event</span>
</div>
```

#### Parameters

-- `start` 💥 Required. 

E.g. `<span class="start">06/13/2022 03:00 PM</span>`
Start date of the event. Accepts most date/time formats, e.g. `06/13/2022 03:00 PM` (12-hour format) or `13-06-2022 15:00` (24-hour format). Use numeric values to describe the date, e.g. "06/13/2022" and not textual, e.g. "June 13th, 2022". Dates in the m/d/y or d-m-y formats are disambiguated by looking at the separator between the various components: if the separator is a slash (/), then the American m/d/y is assumed; whereas if the separator is a dash (-) or a dot (.), then the European d-m-y format is assumed. If, however, the year is given in a two digit format and the separator is a dash (-, the date string is parsed as y-m-d. To avoid potential ambiguity, it's best to use ISO 8601 (YYYY-MM-DD) dates

Date examples:
`06/13/2022 03:00 PM` or `13-06-2022 15:00` or `2022/06/13 03:00 PM` or `2022-06-13 15:00`

-- `end` 💥 Required. 

E.g. `<span class="end">06/13/2022 05:00 PM</span>`
End date of the event. Accepts most date/time formats, e.g. `06/13/2022 05:00 PM` (12-hour format) or `13-06-2022 17:00` (24-hour format). Use numeric values to describe the date, e.g. "06/13/2022" and not textual, e.g. "June 13th, 2022". Dates in the m/d/y or d-m-y formats are disambiguated by looking at the separator between the various components: if the separator is a slash (/), then the American m/d/y is assumed; whereas if the separator is a dash (-) or a dot (.), then the European d-m-y format is assumed. If, however, the year is given in a two digit format and the separator is a dash (-, the date string is parsed as y-m-d. To avoid potential ambiguity, it's best to use ISO 8601 (YYYY-MM-DD) dates

Date examples:
`06/13/2022 05:00 PM` or `13-06-2022 17:00` or `2022/06/13 05:00 PM` or `2022-06-13 17:00`

If end is not defined, the end date is automatically set to start date plus one hour.



### Important information and hidden features

* The "label" is optional, but enables you to customize the button text. Default: "Add to Calendar".
* Dates need to be formatted as YYYY-MM-DD ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)).
* You can also use the word "today" as date. It will then dynamically use the current day at click (not supported with schema.org style).
* Add "+5" at the end of the date to dynamically add 5 days (or any other number). "2022-01-30+12" would generate the 11th of February 2022. This can be interesting, when combined with "today". 
* Times need to be formatted as HH:MM.
* Times are optional. If not set, the button generates all-day events.
* 1 option is required. You can add as many as you want. The supported formats are listed above.
* If you want to rename (or translate) a label, use the following schema at the options: optionName + Pipe + yourLabel. "Google|Google Kalender" would generate a Google Calendar option, but label it as "Google Kalender".
* If no timeZone and no timeZoneOffset is provided, the date refers to UTC time.
* You can add a timeZoneOffset or timeZone (TZ name). You can find a list of them at [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
* If the timeZoneOffset is set, it will always override the timeZone. It is recommended to only use 1 of them at a time.
* The timeZone might not work in very old browsers, but also considers dynamic changes like summer/winter time.
* timeZoneOffset works with older browsers, but is quite static.
* Use "currentBrowser" as value for timeZone to dynamically use the time of the user's browser. Use this with caution, since it would mean that the date and time will differ per user, which should not be the usual case! (Requires all times to be set.)
* You can set the trigger to "click". This makes the button open on click at desktop. Otherwise, the default would be to open on hover. On touch devices, this makes no difference.
* If you want to define a specific name for any generated ics file (iCal), you can specify it via the "iCalFileName" option. The default would be "event-to-save-in-my-calendar".
* You can use the option "inline":true in order to make the button appear with inline-block instead of block style.
* Formatting a URL in the description like `[url]https://....[/url]` makes it clickable.
* If you require line breaks within the description, use `\n` or `<br>`.

<br />

## 🙌 Contributing

Anyone is welcome to contribute, but mind the [guidelines](.github/CONTRIBUTING.md):

* [Bug reports](.github/CONTRIBUTING.md#bugs)
* [Feature requests](.github/CONTRIBUTING.md#features)
* [Pull requests](.github/CONTRIBUTING.md#pull-requests)

**IMPORTANT NOTE:** Run `npm install` and `npm run build` to create the minified js and css file, its sourcemap files as well as the npm_dist/ folder and content!

<br />

## 📃 License

The code is available under the [MIT license (with “Commons Clause” License Condition v1.0)](LICENSE.txt).

<br />

## ⚡ Changelog (without minor changes and fixes)

* v1.8 : new button style
* v1.7 : new code structure and options + tons of optimizations
* v1.6 : supporting Microsoft Teams
* v1.5 : update to date format and better accesibility
* v1.4 : schema.org support (also changed some keys in the JSON!)
* v1.3 : new license (MIT with “Commons Clause”)
* v1.2 : inline and line break support
* v1.1 : npm functionality
* v1.0 : initial release

<br />

## 💜 Kudos go to
* [uxwing.com](https://uxwing.com)
* [Brian R (dudewheresmycode)](https://github.com/dudewheresmycode)
* [Chad Ostrowski (chadoh)](https://github.com/chadoh)
* ... and all other contributors!
