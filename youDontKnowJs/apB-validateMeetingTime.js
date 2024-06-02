const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    const time = startTime.split(":");
    const hour = Number(time[0]);
    const min = Number(time[1]);
    const isMoreThanHour = (durationMinutes + Number(time[1])) / 60;
    const endHour = isMoreThanHour >= 1 ? Number(time[0]) + Number(Math.trunc(isMoreThanHour)) : Number(time[0]);
    const endMin = (Number(durationMinutes + Number(time[1])) % 60);
    console.log(hour, min, time, endHour, endMin, isMoreThanHour);
    const dayStartTime = dayStart.split(":");
    const dayEndTime = dayEnd.split(":");
    return Number(time[0]) === Number(dayStartTime[0]) ?  Number(time[1]) > Number(dayStartTime[1]) :  (Number(time[0]) > Number(dayStartTime[0]) || Number(time[0]) < Number(dayEndTime[0]))
}   
