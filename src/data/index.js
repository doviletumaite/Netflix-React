const URL = process.env.MOVIEDB_API_URL
console.log(URL)

export const fetchMovie = async(imdbID) => {
 try {
  const response = await fetch(`
  https://api.themoviedb.org/3/list/{list_id}?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US`,{
      headers:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTYxMzdhMjVjMTEyZDdhMzkzMTk3MGIyZDAzYjNiNCIsInN1YiI6IjYxNmM3MzE2MzNlYzI2MDA0M2Y3NTM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbiNtpM9FU2Lydfvip0VSZy4PV-sTvkoQPCkI3Cot_Q`,
        'Content-Type': 'application/json'
      }
  })
  if (response.ok) {
      const movies = await response.json()
      console.log("movies",movies)
      return movies
  } else {
      throw new Error("movies fetch failed :(")
  }
 } catch (error) {
    throw error 
 }
}