var config = {

    // Lenguage for the mirror
    language : "en", //must also manually update locales/X.js bower component in index.html
    layout: "main",
    // greeting : ["Hi there!", "Looking Good!", "Hey!", "What's Up?"], // An array of greetings to randomly choose from

    // Alternativly you can have greetings that appear based on the time of day
    greeting : {
       night: ["Bed?", "zZzzZz", "Time to sleep"],
       morning: ["Good Morning", "Looking Good!"],
       midday: ["Hey!", "Hello"],
       evening: ["Good evening"]
    },

    // forcast.io
    forcast : {
        key : "3caa6b35c90c1568682ae4f00900abca", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Philips Hue
    hue : {
        ip : "192.168.1.193", // The IP address of your hue base
        uername : "f1560fcb29008f2f6326d41dfca007", // The username used to control your hue
        group : "0" // The group you'd like the mirror to control (0 is all hue lights connected to your hub)
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : [
        "https://calendar.google.com/calendar/ical/o09ie23375vse1jdq8gf78apug%40group.calendar.google.com/public/basic.ics", // Personal
        "https://calendar.google.com/calendar/ical/duv0j7kl7dlb3qdilks6drfi70%40group.calendar.google.com/public/basic.ics", // Birthdays
        "https://calendar.google.com/calendar/ical/nq277a59h2rbdncmisar6biq2s%40group.calendar.google.com/public/basic.ics", // Brewing
        "https://calendar.google.com/calendar/ical/di1nhj2ii5m0d9poegh7ojq80c%40group.calendar.google.com/public/basic.ics" // Package Arrivals
      ],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 3 // Number of days to display (Default is one year)
    },
    // Giphy
    giphy: {
      key : "dc6zaTOxFJmzC" // Your Gliphy API key
    },
    traffic: {
      key : "AiHLjmQBazakEZL62bq27EC-JmeynUMJldXSqYDGseNYgn7zq5ITTJoG_9sLoQPz", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "3811 S 154th Ln, Tukwila, WA 98188", // Start of your trip. Human readable address.
      destination : "837 N 34th St Ste. 100, Seattle, WA 98103", // Destination of your trip. Human readable address.
      name : "work", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    }
};
