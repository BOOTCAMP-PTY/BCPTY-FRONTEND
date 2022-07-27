import { gql } from '@apollo/client'

export const registerUser = gql`
  mutation AddUser($email: String!, $password: String!) {
    createUsuario(data: { email: $email, password: $password }) {
      data {
        attributes {
          email
        }
      }
    }
  }
`
