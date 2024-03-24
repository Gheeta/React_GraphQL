import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters($x: ID!) {
    character(id: $x) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;
export const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTERS,{
    variables:{x:id}
  });
  return {
    error,
    data,
    loading,
  };
};