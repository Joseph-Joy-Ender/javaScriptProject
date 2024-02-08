const findingClasses = (timings) =>{
    return timings.filter((time) => time.includes("PM"));
}

module.exports = {findingClasses}