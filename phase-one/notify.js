const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}
console.log(notifyByEmail('hana@gmail.com'))

const notifyByNumber = (number) => {
    return `Text sent to: ${number} `;
}
console.log(notifyByNumber('00077888000'))

const notify = (emailOrNumber, transformFunction) => {
    return transformFunction(emailOrNumber)
}
console.log(notify('jeremy@gmail.com',notifyByEmail))
console.log(notify('0040450439054', notifyByNumber))