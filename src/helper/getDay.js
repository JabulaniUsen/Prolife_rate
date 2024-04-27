// Function to predict the day of the week for a given date
function getDay(dateString) {
    const daysOfWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Create a new Date object from the dateString
    const date=new Date(dateString);

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayIndex=date.getDay();

    // Return the corresponding day of the week
    return daysOfWeek[dayIndex];
}
