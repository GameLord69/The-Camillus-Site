/* =========================
   CLOCK
========================= */

function updateClock() {
    const now = new Date();
    let hours = now.getHours();

    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
}

updateClock();
setInterval(updateClock, 1000);

/* =========================
   MONDAY
========================= */

const mondaySchedule = [
    { subject: "Assembly", teacher: "None", start: "08:40", end: "08:50" },
    { subject: "➕Math", teacher: "Ms. Notarte", start: "08:50", end: "09:40" },
    { subject: "AM Break", teacher: "None", start: "09:40", end: "10:00" },
    { subject: "🏀MAPEH", teacher: "Mr. Quipanes", start: "10:00", end: "10:50" },
    { subject: "🧬Science", teacher: "Ms. De Leon", start: "10:50", end: "11:40" },
    { subject: "Lunch", teacher: "None", start: "11:40", end: "12:20" },
    { subject: "📓Filipino", teacher: "Mr. Dela Cruz", start: "12:20", end: "13:10" },
    { subject: "📖English", teacher: "Mr. Pastrana", start: "13:10", end: "14:00" },
    { subject: "PM Break", teacher: "None", start: "14:00", end: "14:10" },
    { subject: "🌏AP", teacher: "Mrs. Bautista", start: "14:10", end: "15:00" },
    { subject: "💻ICT", teacher: "Mr. Tubello", start: "15:00", end: "15:50" }
];


/* =========================
   TUESDAY
========================= */

const tuesdaySchedule = [
    { subject: "Morning Assembly and Homeroom", teacher: "None", start: "08:30", end: "08:50" },
    { subject: "🧬Science", teacher: "Ms. De Leon", start: "08:50", end: "09:40" },
    { subject: "AM Break", teacher: "None", start: "09:40", end: "10:00" },
    { subject: "🏀MAPEH", teacher: "Mr. Quipanes", start: "10:00", end: "10:50" },
    { subject: "📓Filipino", teacher: "Mr. Dela Cruz", start: "10:50", end: "11:40" },
    { subject: "Lunch", teacher: "None", start: "11:40", end: "12:20" },
    { subject: "🙏CLEd", teacher: "Ms. Tolentino", start: "12:20", end: "13:10" },
    { subject: "📖English", teacher: "Mr. Pastrana", start: "13:10", end: "14:00" },
    { subject: "PM Break", teacher: "None", start: "14:00", end: "14:10" },
    { subject: "🍳LE", teacher: "Ms. De Castro", start: "14:10", end: "15:00" },
    { subject: "🌏AP", teacher: "Mrs. Bautista", start: "15:00", end: "15:50" }
];


/* =========================
   WEDNESDAY
========================= */

const wednesdaySchedule = [
    { subject: "Morning Assembly and Homeroom", teacher: "None", start: "08:30", end: "08:50" },
    { subject: "🌏AP", teacher: "Mrs. Bautista", start: "08:50", end: "09:40" },
    { subject: "AM Break", teacher: "None", start: "09:40", end: "10:00" },
    { subject: "📓Filipino", teacher: "Mr. Dela Cruz", start: "10:00", end: "10:50" },
    { subject: "🏀MAPEH", teacher: "Mr. Quipanes", start: "10:50", end: "11:40" },
    { subject: "Lunch", teacher: "None", start: "11:40", end: "12:20" },
    { subject: "🙏CLEd", teacher: "Ms. Tolentino", start: "12:20", end: "13:10" },
    { subject: "➕Math", teacher: "Ms. Notarte", start: "13:10", end: "14:00" },
    { subject: "PM Break", teacher: "None", start: "14:00", end: "14:10" },
    { subject: "🍳LE", teacher: "Ms. De Castro", start: "14:10", end: "15:00" }

];


/* =========================
   THURSDAY
========================= */

const thursdaySchedule = [
    { subject: "Morning Assembly", teacher: "None", start: "07:10", end: "07:30" },
    { subject: "Holy Mass", teacher: "None", start: "07:30", end: "08:00" },
    { subject: "🧬Science", teacher: "Ms. De Leon", start: "08:00", end: "08:50" },
    { subject: "➕Math", teacher: "Ms. Notarte", start: "08:50", end: "09:40" },
    { subject: "AM Break", teacher: "None", start: "09:40", end: "10:00" },
    { subject: "🏀MAPEH", teacher: "Mr. Quipanes", start: "10:00", end: "10:50" },
    { subject: "🙏CLEd", teacher: "Ms. Tolentino", start: "10:50", end: "11:40" },
    { subject: "Lunch", teacher: "None", start: "11:40", end: "12:20" },
    { subject: "💻ICT", teacher: "Mr. Tubello", start: "12:20", end: "13:10" },
    { subject: "📓Filipino", teacher: "Mr. Dela Cruz", start: "13:10", end: "14:00" },
    { subject: "PM Break", teacher: "None", start: "14:00", end: "14:10" },
    { subject: "📖English", teacher: "Mr. Pastrana", start: "14:10", end: "15:00" }
];


/* =========================
   FRIDAY
========================= */

const fridaySchedule = [
    { subject: "Assembly", teacher: "None", start: "07:20", end: "07:30" },
    { subject: "Holy Mass", teacher: "None", start: "07:30", end: "08:00" },
    { subject: "🧬Science", teacher: "Ms. De Leon", start: "08:00", end: "08:50" },
    { subject: "🌏AP", teacher: "Mrs. Bautista", start: "08:50", end: "09:40" },
    { subject: "AM Break", teacher: "None", start: "09:40", end: "10:00" },
    { subject: "🙏CLEd", teacher: "Ms. Tolentino", start: "10:00", end: "10:50" },
    { subject: "📖English", teacher: "Mr. Pastrana", start: "10:50", end: "11:40" },
    { subject: "Lunch", teacher: "None", start: "11:40", end: "12:20" },
    { subject: "➕Math", teacher: "Ms. Notarte", start: "12:20", end: "13:10" }
];


/* =========================
   ALL SCHEDULES
========================= */

const schedules = [
    null,
    mondaySchedule,
    tuesdaySchedule,
    wednesdaySchedule,
    thursdaySchedule,
    fridaySchedule,
    null
];


/* =========================
   TIME FUNCTIONS
========================= */

// Converts time into minutes for calculations
function totalMinutes(hours, minutes, seconds) {
    return (hours * 60) + minutes + (seconds / 60);
}

// Converts "13:10" into minutes
function convertScheduleTime(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return totalMinutes(hours, minutes, 0);
}

// Converts "13:10" into "1:10 PM"
function formatTime(time) {
    let [hours, minutes] = time.split(":").map(Number);

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${hours}:${String(minutes).padStart(2, "0")} ${period}`;
}


/* =========================
   FIND CURRENT EVENT
========================= */

function findCurrentEvent() {
    const now = new Date();

    const currentTime = totalMinutes(
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    );

    const schedule = schedules[now.getDay()];

    if (!schedule) {
        return null;
    }

    for (const event of schedule) {
        const start = convertScheduleTime(event.start);
        const end = convertScheduleTime(event.end);

        if (currentTime >= start && currentTime < end) {
            return event;
        }
    }

    return null;
}

updateCurrentClass();
setInterval(updateCurrentClass, 1000);


/* =========================
   DISPLAY CURRENT CLASS
========================= */

function updateCurrentClass() {
    const event = findCurrentEvent();
    const display = document.getElementById("currentClass_id");

    if (!event) {
        display.textContent = "No class right now.";
        return;
    }

    display.innerHTML = `
        <div class="class-name">${event.subject}</div>
        <div class="teacher">Teacher: ${event.teacher}</div>
        <div class="end-time">Ends at: ${formatTime(event.end)}</div>
    `;
}

/* =========================
   PRAYER ALERTS
========================= */

function showPrayerAlert(title, message) {
    document.getElementById("prayer-title").textContent = title;
    document.getElementById("prayer-message").textContent = message;

    document.getElementById("prayer-alert").style.display = "block";
}

function closePrayerAlert() {
    document.getElementById("prayer-alert").style.display = "none";
}

const prayerTimes = {
    "07:30": {
        title: "✝️ Holy Mass",
        message: "Holy Mass is beginning."
    },

    "12:00": {
        title: "🙏 Angelus",
        message: "It is time for the Angelus."
    },

    "15:00": {
        title: "🕊️ Three O' Clock Prayer",
        message: "The Three O' Clock Prayer is beginning."
    }
};

let lastPrayerAlert = "";

function checkPrayerTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;

    const prayer = prayerTimes[currentTime];

    if (!prayer) {
        return;
    }

    const alertKey = `${now.toDateString()}-${currentTime}`;

    if (alertKey === lastPrayerAlert) {
        return;
    }

    lastPrayerAlert = alertKey;

    showPrayerAlert(prayer.title, prayer.message);
}

checkPrayerTime();
setInterval(checkPrayerTime, 1000);
