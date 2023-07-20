export function convertToSlug(string) {
    // Replace spaces with dashes and convert to lowercase
    return string?.trim()?.toLowerCase()?.replace(/\s+/g, '-');
}

export function convertToTitleCase(string) {
    // Split the string into words
    var words = string.split('-');

    // Capitalize the first letter of each word
    var titleCaseWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words back together with spaces
    return titleCaseWords.join(' ');
}