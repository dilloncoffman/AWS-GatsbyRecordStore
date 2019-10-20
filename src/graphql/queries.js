/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = `query GetArtist($id: ID!) {
  getArtist(id: $id) {
    id
    name
    albums {
      items {
        id
        title
        albumart
      }
      nextToken
    }
  }
}
`;
export const listArtists = `query ListArtists(
  $filter: ModelArtistFilterInput
  $limit: Int
  $nextToken: String
) {
  listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      albums {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAlbum = `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    title
    albumart
    artist {
      id
      name
      albums {
        nextToken
      }
    }
    reviews {
      items {
        id
        author
        content
      }
      nextToken
    }
  }
}
`;
export const listAlbums = `query ListAlbums(
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      albumart
      artist {
        id
        name
      }
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    author
    content
    album {
      id
      title
      albumart
      artist {
        id
        name
      }
      reviews {
        nextToken
      }
    }
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      author
      content
      album {
        id
        title
        albumart
      }
    }
    nextToken
  }
}
`;
