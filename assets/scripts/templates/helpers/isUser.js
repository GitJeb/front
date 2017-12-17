const store = require('../../store')

const isUser = function (upload, options) {
  // set owner based on upload _owner.id
  const ownerId = upload._owner.id
  // Initialize user and set if a user.id is logged in
  let userId
  store.user ? userId = store.user.id : userId = ''

  // If OwnerID is same as UserID return true, else return false
  return ownerId === userId ? options.fn(this) : options.inverse(this)
}
module.exports = isUser
