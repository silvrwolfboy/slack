import api from './api.test'
import test from './auth.test'
import access from './oauth.access'
import info from './team.info'
import list from './users.list'
import channelsList from './channels.list'

let describe = `
  slack
    api.test(params, (err, data)=>)
    auth.test(token, (err, data)=>)
    oauth.access({client_id, client_secret, code}, (err, data)=>)
    team.info(token, (err, data)=>)
    users.list(token, (err, data)=>)
    channels.list({token, exclude_archived}, (err, data)=>)
`

export default {
  describe,
  api: {test:api},
  auth: {test},
  oauth: {access},
  team: {info},
  users: {list},
  channels: {list:channelsList}
}
