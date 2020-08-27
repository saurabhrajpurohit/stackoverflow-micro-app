/**
 * Convert the given time stamp in to readable dat time string
 * @param timeStamp Time in Timestamp format
 */
function convertToDate(timeStamp: number) {
    return new Date(timeStamp * 1000).toDateString()
}

export {
    convertToDate
}