import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

export default {
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    loggedInUser: (parent, args, { models, user }) => {
      if (user) {
        return models.User.findOne({
          where: {
            id: user.id,
          },
        })
      }
      return null
    },
  },

  Mutation: {
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    register: async (parent, args, { models }) => {
      const user = args
      user.password = await bcrypt.hash(user.password, 12)
      return models.User.create(user)
    },
    login: async (parent, { email, password }, { models, SECRET }) => {
      const user = await models.User.findOne({ where: { email } })
      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        throw new Error('Incorrect password')
      }

      const token = jwt.sign(
        { user: _.pick(user, ['id', 'username']) },
        SECRET,
        {
          expiresIn: '1y',
        },
      )

      return token
    },
    createPost: async (parent, args, { models }) => {
      const post = args
      return models.Post.create(post)
    },
  },
}