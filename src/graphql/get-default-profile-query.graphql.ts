import { graphql } from "../gql";

const getDefaultProfileByAddressQuery = graphql(/* GraphQL */ `
  query defaultProfile($address: EthereumAddress!) {
    defaultProfile(request: { ethereumAddress: $address }) {
      id
      name
      isDefault
      metadata
      handle
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      ownedBy
    }
  }
`);

export default getDefaultProfileByAddressQuery;
