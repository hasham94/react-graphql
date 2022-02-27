import { gql } from "@apollo/client";
import { FilterCharacter } from "./Types";

export const LOAD_CHAR = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

export const GET_CHAR_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        name
        type
        dimension
      }
      location {
        name
        type
      }
      episode {
        name
        air_date
        episode
      }
    }
  }
`;
