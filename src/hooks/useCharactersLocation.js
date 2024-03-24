import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
export const useCharactersLocation = (name) => {
  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name: name,
      },
    }
  );
  return { getLocations, error, loading, data };
};