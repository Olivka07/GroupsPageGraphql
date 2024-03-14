const appService =  require('./app.service')

const root = {
    getUsers: (arg) => appService.getUsers(arg),
    getGroups: (arg) => appService.getGroups(arg)
}

module.exports = root