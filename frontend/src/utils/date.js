/**
 * Converts a timestamp to a relative time:
 * eg:
 *
 *  var current =  new Date(2011, 04, 24, 12, 30, 30, 30)
 *  var previous = new Date(2010, 03, 24, 12, 00, 00, 00)
 *
 *  timeDifference(current, previous)
 *  will return: '1 years ago'
 *
 * @param current date
 * @param previous date
 * @returns {string}
 */
function timeDifference (current, previous) {

  var msPerMinute = 60 * 1000
  var msPerHour = msPerMinute * 60
  var msPerDay = msPerHour * 24
  var msPerMonth = msPerDay * 30
  var msPerYear = msPerDay * 365

  var elapsed = current - previous

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago'
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago'
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago'
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago'
  }
}

export default timeDifference
