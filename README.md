# Free add-to-calendar button 😍   

![add-to-calendar button](https://cdn.addevent.com/customers/addevent-github-t1.png)

 _The most used and trusted add-to-calendar button functionality on the internet.
Trusted by +150,000 companies around the world. Maintained daily and super reliable.
More than 500 mill events have been added to users calendars using AddEvent._

### Awesome features
- Works with **all major calendar services** (Apple, Google Calendar, Outlook, Outlook (online), Office 365, Yahoo)
- **Use** for websites and apps. For e-mails, use our [add-to-calendar links](https://www.addevent.com/solutions/share-events) on AddEvent.com
- **Time zone and daylight saving time compatible**. Make sure date/time is correct across time zones.
- **Supports**: Normal events, recurring events, fluid events, event reminders, include attendees, busy or free state. 
- **Touch- and user-friendly**: Designed and tested to work with desktops, tablets and mobile devices. Optimized for touch devices, user-friendly and easy to understand calendar options.
- **Keyboard Accessible**: Fully keyboard accessible. WAI compliant (W3C). Useful to people with disabilities. Accessibility is required by law in many countries.
- **No dependencies**: Written in pure javascript. No need to install anything on your server. Using backwards compatible technologies to support older browsers (down to IE6).
- **Legal**: Fully GDPR, CCPA, and LGPD compatible
- **Design**: Download a predefined theme or customize the design to fit your needs with simple CSS changes
- **Centralized end-point**: Historically the calendar vendors update/change their calendar software a couple of times per year. With AddEvent as a centralized end-point, it's our task to make sure everything is working and not your task. 
- **Free**: It's free, super reliable, and proven by millions of people ❤️ (we also offer a paid version with awesome technical support)

## Demo

Go to [https://addeventinc.github.io/add-to-calendar-button](https://addeventinc.github.io/add-to-calendar-button) for a live demo.

![Demo Screenshot](https://cdn.addevent.com/customers/gh-add-to-calendar-button-t2.gif)

## Install

The add-to-calendar button snippet is a simple piece of HTML where you fill in your event details dynamically. Here's a full example you can try out in your browser. 
💥 View more examples and themes on [AddEvent.com](https://www.addevent.com/documentation/add-to-calendar-button#anchor-themes)

```
html
<html>
<head>

<!--
1. Include below script in your <head> or <body> section -->
-->

<!-- Button script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

</head>
<body>

<!--
2. Add your "Add to Calendar" button snippet anywhere on your website -->
-->

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
    <span class="location">Location of the event</span>
</div>

</body>
</html>
```

<br />

### Parameters

| Parameter           | Description
|:------------------ |:-----------------------------------------------------------
| start 💥           | **REQUIRED**. `<span class="start">10/20/2022 03:00 PM</span>` <br /><br />Start date of the event. Accepts most date/time formats, e.g. `10/20/2022 03:00 PM` (12-hour format) or `20-10-2022 15:00` (24-hour format). Use numeric values to describe the date, e.g. "10/20/2022" and not textual, e.g. "October 20th, 2022". Dates in the m/d/y or d-m-y formats are disambiguated by looking at the separator between the various components: if the separator is a slash (/), then the American m/d/y is assumed; whereas if the separator is a dash (-) or a dot (.), then the European d-m-y format is assumed. If, however, the year is given in a two digit format and the separator is a dash (-, the date string is parsed as y-m-d. To avoid potential ambiguity, it's best to use ISO 8601 (YYYY-MM-DD) dates. <br /><br />Date examples: `10/20/2022 03:00 PM` or `20-10-2022 15:00` or `2022/10/20 03:00 PM` or `2022-10-20 15:00`
| end                | `<span class="end">10/20/2022 05:00 PM</span>` <br /><br />End date of the event. Accepts most date/time formats, e.g. `10/20/2022 05:00 PM` (12-hour format) or `20-10-2022 17:00` (24-hour format). Use numeric values to describe the date, e.g. "10/20/2022" and not textual, e.g. "October 20th, 2022". Dates in the m/d/y or d-m-y formats are disambiguated by looking at the separator between the various components: if the separator is a slash (/), then the American m/d/y is assumed; whereas if the separator is a dash (-) or a dot (.), then the European d-m-y format is assumed. If, however, the year is given in a two digit format and the separator is a dash (-, the date string is parsed as y-m-d. To avoid potential ambiguity, it's best to use ISO 8601 (YYYY-MM-DD) dates. <br /><br />Date examples: `10/20/2022 05:00 PM` or `20-10-2022 17:00` or `2022/10/20 05:00 PM` or `2022-10-20 17:00`. If end is not defined, the end date is automatically set to start date plus one hour.
| timezone           | `<span class="timezone">Europe/Paris</span>` <br /><br />The events time zone, e.g. Europe/Paris or America/Los_Angeles. If timezone is applied (highly recommended), date/time will be converted to Zulu time / GMT / UTC. If timezone is not applied, date/time will be parsed as is (fluid date/time). ** Please notice: We're currently using the Microsoft Events API for inserting events into Outlook.com and Office 365. Those options does not allow fluid time and a timezone is required. Explanation: The timezone parameter makes sure the date/time is correct no matter if you are in New York or Sydney. If your event has users from multiple time zones in the world, it's highly recommended to use the parameter.
| title 💥           | **REQUIRED**. `<span class="title">Title of event</span>` <br /><br />Title of the event. Single line string.
| description        | `<span class="description">Description of event</span>` <br /><br />Description of the event. Use `<br>` to separate lines. The field accepts plain text or simplified HTML. Simplified HTML is supported by calendar clients like Outlook and Apple Calendar. If the calendar client does accept HTML, the content of the field is automatically converted into readable text. Keep the description short and to the point. Link to a website for further details if the event description is long. Maximum 500 characters recommended. Reason: Most modern browsers allow an unlimited number of characters to be transferred by the browser. Internet Explorer / Edge only allows ~2000 characters. A 500 characters maximum is recommended to make sure your event is cross browser compatible.
| location           | `<span class="location">Eiffel Tower</span>` <br /><br />Event location, e.g. "Eiffel Tower, Paris".
| organizer          | `<span class="organizer">John Johnson</span>` <br /><br />Event organizer, e.g. "John Johnson". If you fill out organizer you must also include the organizer_email field. If you include an organizer and an organizer_email, the event is considered to be a "meeting" by calendar clients like Outlook. If you don't include the fields, the event is considered to be an "appointment".
| organizer_email    | `<span class="organizer_email">john@example.com</span>` <br /><br />Event organizer e-mail, e.g. "your@email.com". If you fill out organizer_email you must also include the organizer field. If you include an organizer and an organizer_email, the event is considered to be a "meeting" by calendar clients like Outlook. If you don't include the fields, the event is considered to be an "appointment".
| all_day_event      | `<span class="all_day_event">true</span>` <br /><br />All day event. Accepts `true` or `false`.
| date_format        | `<span class="date_format">MM/DD/YYYY</span>` <br /><br />The format of the date in start and end. Accepts the values `MM/DD/YYYY` or `DD/MM/YYYY` only. Lets the engine know how to handle the date, e.g. 12-hour format (MM/DD/YYYY) or 24-hour format (DD/MM/YYYY).
| alarm_reminder     | `<span class="alarm_reminder">15</span>` <br /><br />Event reminder. Trigger an event reminder e.g. "15" minutes before the event starts. Accepted input: Number. Example: Reminder "15" minutes before event starts = 15 or one day before event starts : 60 minutes x 24 hours = 1440. <br /><br />Event reminders are currently supported by: Apple Calendar, Google Calendar (using Google Events API), Outlook, Outlook.com (using Microsoft Events API)
| recurring          | `<span class="recurring">FREQ=DAILY;INTERVAL=2;COUNT=5</span>` <br /><br />Make the event repeat for a number of times. Please notice: The start date/time must match the recurrence rule in order to work in strict calendar systems like Outlook and Apple Calendar. <br /><br />Recurring rules are currently supported by: Apple Calendar, Google Calendar (using "Direct" and Google Events API), Office 365 (using the Microsoft Events API), Outlook, Outlook.com (using Microsoft Events API). <br /><br />On AddEvent.com you can find a brilliant RRule generator: https://www.addevent.com/documentation/add-to-calendar-button
| calname            | `<span class="calname">use-title</span>` <br /><br />Custom filenaming of the .ics file used for e.g. Outlook and Apple Calendar. If not specified the name defaults to "event.ics". Use the phrase use-title to use the title from the title parameter or enter a custom filename.
| attendees          | `<span class="attendees">joe@example.com</span>` <br /><br />Add one or multiple attendees (pre-populated) to the event. Enables the pre-populated attendee(s) to get a response from the attendee. Separate multiple attendees (email addresses) with a comma. <br /><br />Example: `<span class="attendees">joe@example.com,jack@example.com</span>`
| uid                | `<span class="uid">my-unique-id123@addevent.com</span>` <br /><br />Define your own UID for the event. If not specified, a system UID is generated. Please notice; Yahoo Calendar reports error 404 if an UID is defined. We therefore don't include UID's in Yahoo Calendar. Warning. Use this option only if it serves a purpose in your coding.
| sequence           | `<span class="sequence">3</span>` <br /><br />Sequence is the number of times your event has been changed/updated and should be used in combination with an UID. Warning. Use this option only if it serves a purpose in your coding.
| status             | `<span class="status">CONFIRMED</span>` <br /><br />Define the status parameter in the .ics file used for e.g. Outlook and Apple Calendar. <br /><br />The options can be `CONFIRMED`, `TENTATIVE`, `CANCELLED`, `NEEDS-ACTION`, `COMPLETED`, `IN-PROCESS` according to the iCalendar guidelines. <br /><br />If the value is not defined (recommended), the system defaults to "CONFIRMED". Warning. Use this option only if it serves a purpose in your coding.
| client             | `<span class="client">ACCOUNT-CLIENT-ID</span>` <br /><br />The client field refers to your account ID. If you want the domain on which your "Add to Calendar" button appears to be automatically added to your accounts list of domains, then include the client tag in the button code.
| method             | `<span class="method">PUBLISH</span>` <br /><br />If defined, a method parameter is added in the .ics file used by e.g. Outlook and Apple Calendar. If not defined, no method parameter is added in the .ics file. http://www.kanzaki.com/docs/ical/method.html + https://tools.ietf.org/html/rfc2446. <br /><br />Examples of usage: `PUBLISH`, `REQUEST`, `CANCEL`, `REFRESH`. <br /><br />Warning. Use this option only if it serves a purpose in your coding.
| transp             | `<span class="transp">TRANSPARENT</span>` <br /><br />Determines whether the event appears as "free" or "busy" on the users calendar. Default value is OPAQUE (busy). <br /><br />Accepted values: `TRANSPARENT` or `OPAQUE`.

<br />

### Button controls (HTML attributes)

| Parameter           | Description
|:------------------- |:-----------------------------------------------------------
| data-direct         | `<div class="addeventatc" .. data-direct="google">`<br /><br /> The attribute disables the dropdown and makes the button a direct link to the service specified. <br /><br />Accepted values: `apple` or `google` or `office365` or `outlook` or `outlookcom` or `yahoo`
| data-dropdown-x     | `<div class="addeventatc" .. data-dropdown-x="left">`<br /><br /> Control the horizontal position of the dropdown. <br /><br />Accepted values: `left` or `right` or `auto`
| data-dropdown-y     | `<div class="addeventatc" .. data-dropdown-y="up">`<br /><br /> Control the vertical position of the dropdown. <br /><br />Accepted values: `up` or `down` or `auto`
| data-render         | `<div class="addeventatc" .. data-render="inline-buttons">`<br /><br /> The attribute ensures that the options are generated and displayed at load. The attribute furthermore disables the default CSS. <br /><br />Accepted value: `inline-buttons`
| data-styling        | `<div class="addeventatc" .. data-styling="none">`<br /><br /> The attribute disables the default CSS. <br /><br />Accepted value: `none`
| data-intel          | `<div class="addeventatc" .. data-intel="false">`<br /><br /> If we can detect which device the user is on (e.g. an iDevice) it makes sense to automatically select the "Apple" option on click instead of showing the dropdown option. The behavior can be disabled by setting "data-intel" to "false". <br /><br />Accepts: `true` or `false`. Default is true.

<br />

### Button controls (Javascript)

#### Example: Change labels in drop-down

```
<html>
<head>

<!-- AddEvent script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

<!-- AddEvent Settings -->
<script type="text/javascript">
window.addeventasync = function(){
    addeventatc.settings({
        appleical  : {show:true, text:"Apple Calendar"},
        google     : {show:true, text:"Google <em>(online)</em>"},
        office365  : {show:true, text:"Office 365 <em>(online)</em>"},
        outlook    : {show:true, text:"Outlook"},
        outlookcom : {show:true, text:"Outlook.com <em>(online)</em>"},
        yahoo      : {show:true, text:"Yahoo <em>(online)</em>"}
    });
};
</script>

</head>
<body>

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
</div>

</body>
</html>
```

#### Example: Remove AddEvent from the drop-down

```
<html>
<head>

<!-- AddEvent script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

<!-- Remove "AddEvent" from the dropdown with the following CSS -->
<style type="text/css">
.addeventatc_dropdown {padding:6px 0px;}
.addeventatc_dropdown .copyx {display:none;}
</style>

<!-- 
Or use the AddEvent settings script
-->

<!-- AddEvent Settings -->
<script type="text/javascript">
window.addeventasync = function(){
    addeventatc.settings({
        license : "YOUR-CLIENT-ID"
    });
};
</script>

</head>
<body>

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
</div>

</body>
</html>
```

#### Example: No CSS. Unstyled button

```
<html>
<head>

<!-- AddEvent script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

<!-- AddEvent Settings -->
<script type="text/javascript">
window.addeventasync = function(){
    addeventatc.settings({
        css        : false
    });
};
</script>

<!-- 
Or apply the data-styling="none" attribute 
to the button code 
-->

</head>
<body>

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc" data-styling="none">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
</div>

</body>
</html>
```

#### Example: Show options drop-down on mouseover

```
<html>
<head>

<!-- AddEvent script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

<!-- AddEvent Settings -->
<script type="text/javascript">
window.addeventasync = function(){
    addeventatc.settings({
        mouse      : true
    });
};
</script>

</head>
<body>

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
</div>

</body>
</html>
```

#### Example: Sort order of drop-down options

```
<html>
<head>

<!-- AddEvent script -->
<script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

<!-- AddEvent Settings -->
<script type="text/javascript">
window.addeventasync = function(){
    addeventatc.settings({
        dropdown   : {order:"google,appleical,office365,outlook,yahoo,outlookcom"}
    });
};
</script>

</head>
<body>

<!-- Button code -->
<div title="Add to Calendar" class="addeventatc">
    Add to Calendar
    <span class="start">10/20/2022 08:00 AM</span>
    <span class="end">10/20/2022 10:00 AM</span>
    <span class="timezone">America/Los_Angeles</span>
    <span class="title">Summary of the event</span>
    <span class="description">Description of the event</span>
</div>

</body>
</html>
```

## Who we are

Behind AddEvent, Inc. there is a team of passionate people building event and calendar service software.

With a suite of services ([Share Events](https://www.addevent.com/solutions/share-events), [Collect RSVPs](https://www.addevent.com/solutions/collect-rsvp-events), [Subscription calendar](https://www.addevent.com/solutions/subscription-calendars), [Embeddable calendar](https://www.addevent.com/solutions/embeddable-calendar), [Automated events](https://www.addevent.com/solutions/automated-events)) and their powerful APIs, we power customer communication and attendance.

## Thank you
* Thousands of customers providing useful feedback and users using cryptic computer/browser setups where the "Add to Calendar" button also needs to work. ❤️
* Millions of end-users using and breaking our services on a daily basis ❤️
* DEV team on AddEvent.com (United States, Spain, Romania, Malaysia) for daily making sure everything is in mint condition
* [Michael Nilsson](https://nilsson.co) Original creator (Denmark)

## Contact us
- Send us an email at support@addevent.com
