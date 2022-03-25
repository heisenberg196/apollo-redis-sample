export const defaultQuery = `
query getMovie($id: ID!) {
  movie(id: $id) {
    id
    title
    overview
    releaseDate @date(as: "YYYY")
    poster {
      custom(size: "w300")
    }
    backdrop {
      custom(size: "w1400_and_h450_face")
      colors {
        darkMuted
      }
    }
    cast(limit: 6) {
      id
      name
      description: character
      img: photo {
        url: custom(size: "w150_and_h225_bestv2")
      }
    }
    crew(limit: 6) {
      id
      name
      job
    }
    similar(limit: 6) {
      id
      name: title
      description: releaseDate @date(as: "MMMM D, YYYY")
      img: poster {
        url: custom(size: "w150_and_h225_bestv2")
      }
    }
    videos(filter: { site: "YouTube", type: Trailer }) {
      name
      key
    }
  }
}
`
