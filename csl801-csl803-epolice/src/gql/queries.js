import { gql } from '@apollo/client';

export const GET_REPORTS = gql`
query {
    reports(where: {managed: {_eq: false,}})
    {
      area
      category
      id
      img
      lat
      lng
      text
    }
}
`;

export const CREATE_REPORT = gql`
mutation(
    $area: String,
    $category: String,
    $img: bytea,
    $lat: float8,
    $lng: float8,
    $text: String
  ) {
    insert_reports_one(object: {
      area: $area,
      category: $category,
      img: $img,
      lat: $lat,
      lng: $lng,
      text: $text}
    ) {
      id
    }   
}
`;
