const alreadyInUseCode = 11000

const isEmailUsed = err =>
    err.code === alreadyInUseCode

module.exports = {
    isEmailUsed,
}
