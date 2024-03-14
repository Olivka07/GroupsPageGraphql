const pathData = require("./consts")
const fs = require('node:fs')

class AppService {
    getUsers({id}) {
        const groups = JSON.parse(fs.readFileSync(pathData))
        const group = groups.find(group => Number(group.id) === Number(id))
        const users = group.friends ? group.friends : null
        return users
    }

    getGroups({start, end}) {
        const groups = JSON.parse(fs.readFileSync(pathData))
        if (end < groups.length) {
            return {
                data: groups.slice(Number(start), Number(end)),
                result: 0
            }
        } 
        return {
            data: groups.slice(Number(start), groups.length),
            result: 1
        }
    }
}

module.exports = new AppService()