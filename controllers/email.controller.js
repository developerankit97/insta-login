const nodemailer = require("nodemailer");
const ical = require('ical-generator');

function getIcalObjectInstance(starttime, endtime, summary, description, location, url, name, email) {
    const cal = ical({domail: "mytestwebsite.com", name: 'My test calender event'});

    cal.domain("mytestwebsite.com");
    cal.createEvent({
        start: starttime,
        end: endtime,
        summary: summary,
        description: description,
        location: location,
        url: url,
        organizer: {
            name: name,
            email: email
        }
    });
    return cal;
}

const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "a.sharma@binaryinfomatics.com",
        pass: "vyhrunyjuslcowpv",
    }
})

async function sendemail(sendto, subject, htmlbody, calendarObj = null) {
    mailOptions = {
        to: sendto,
        subject: subject,
        html: htmlbody
    }

    if (calendarObj) {
        let alternatives = {
            "Content-Type": "text/calender",
            "method": "REQUEST",
            "content": new Buffer(calendarObj.toString()),
            "component": "VEVENT",
            "Content-Class": "urn:content-classes:calendermessage"
        }
        mailOptions['alternatives'] = alternatives;
        mailOptions['alternatives']['contentType'] = 'text/calendar'
        mailOptions['alternatives']['content'] 
            = new Buffer(calendarObj.toString())
    }
}

let mailOptions = {
    to: "ankitsh.developer@gmail.com",
    subject: "This is a test email from a developer",
    html: "<h1>Welcome to my website",
}

smtpTransport.sendMail(mailOptions, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("Message sent: ", response);
    }
})