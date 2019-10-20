/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = `subscription OnCreateArtist {
  onCreateArtist {
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
export const onUpdateArtist = `subscription OnUpdateArtist {
  onUpdateArtist {
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
export const onDeleteArtist = `subscription OnDeleteArtist {
  onDeleteArtist {
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
export const onCreateAlbum = `subscription OnCreateAlbum {
  onCreateAlbum {
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
export const onUpdateAlbum = `subscription OnUpdateAlbum {
  onUpdateAlbum {
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
export const onDeleteAlbum = `subscription OnDeleteAlbum {
  onDeleteAlbum {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
