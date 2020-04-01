import { client } from "../../functions/ApolloClient"
import gql from "graphql-tag"

export const getItems = (onSuccess) => {
  client.query({
    query: gql(`
      {
        mealTypes {
          id
          name
        }
        medicationTypes {
          id
          name
          unit {
            displayName
            name
          }
          unitId
        }
        supplementTypes {
          id
          name
          unit {
            displayName
            name
          }
          unitId
        }
        victualItems {
          id
          name
          typeId
          type {
            id
            name
          }
        }
        victualTypes {
          id
          name
        }
        logDetailTypes {
          id
          description
        }
        units {
          id
          displayName
          name
        }
      }
    `)
  })
    .then(result => onSuccess(result))
}
