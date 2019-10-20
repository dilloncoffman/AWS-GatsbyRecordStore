/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = `mutation CreateArtist($input: CreateArtistInput!) {
  createArtist(input: $input) {
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
export const updateArtist = `mutation UpdateArtist($input: UpdateArtistInput!) {
  updateArtist(input: $input) {
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
export const deleteArtist = `mutation DeleteArtist($input: DeleteArtistInput!) {
  deleteArtist(input: $input) {
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
export const createAlbum = `mutation CreateAlbum($input: CreateAlbumInput!) {
  createAlbum(input: $input) {
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
export const updateAlbum = `mutation UpdateAlbum($input: UpdateAlbumInput!) {
  updateAlbum(input: $input) {
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
export const deleteAlbum = `mutation DeleteAlbum($input: DeleteAlbumInput!) {
  deleteAlbum(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
