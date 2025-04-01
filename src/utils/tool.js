export const LinkValidation = (str) =>
{
    const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return linkRegex.test(str)
}