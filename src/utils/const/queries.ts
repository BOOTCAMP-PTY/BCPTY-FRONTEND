import { gql } from '@apollo/client'

export const registerUser = gql`
  mutation AddUser($email: String!, $password: String!) {
    register(input: { username: "default", email: $email, password: $password }) {
      jwt
      user {
        id
        username
      }
    }
  }
`

export const loginUser = gql`
  mutation AddUser($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
      }
    }
  }
`

export const createProfile = gql`
  mutation sampleMut($userId: ID!) {
    createProfile(data: { userId: $userId }) {
      data {
        attributes {
          createdAt
        }
      }
    }
  }
`
