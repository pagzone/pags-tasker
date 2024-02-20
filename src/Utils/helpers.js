export const getCurrentDateTimePart = (part) => {
    const currentDateTime = new Date();

    switch (part.toLowerCase()) {
        case "y":
            return currentDateTime.getFullYear();
        case "m":
            return currentDateTime.getMonth() + 1; // Months are zero-indexed
        case "d":
            return currentDateTime.getDate();
        case "h":
            return currentDateTime.getHours();
        case "min":
            return currentDateTime.getMinutes();
        case "s":
            return currentDateTime.getSeconds();
        default:
            return currentDateTime.toISOString(); // Return full date-time by default
    }
}
