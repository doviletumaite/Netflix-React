const URL = process.env.REACT_APP_BE_URL
console.log(URL)

export const fetchMovie = async(imdbID) => {
 try {
  const response = await fetch(URL)
  if (response.ok) {
      const movies = await response.json()
      console.log(movies)
      return movies
  } else {
      throw new Error("movies fetch failed :(")
  }
 } catch (error) {
    throw error 
 }
}