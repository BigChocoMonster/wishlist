import { gql } from "@apollo/client";

export const getAllWishes = gql`
  query getWishes {
    wishes {
      title
      desc
      isAcquired
      budget {
        from
        to
        currency
      }
      weblinks
    }
  }
`;
