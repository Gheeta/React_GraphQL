import { gql,useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: String!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;
export const useCharactersLocation = (name, quantityPerUnit) => {
  const [getProductName, { loading, error, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name,
        quantityPerUnit,
      },
    }
  );
  return { getProductName, error, loading, data };
};