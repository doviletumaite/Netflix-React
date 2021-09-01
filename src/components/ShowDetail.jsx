import { useEffect, useState } from "react"
import { Alert, Container, Row, Col, Spinner } from "react-bootstrap"
import detail from "./Detail"

const ShowDetail = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
const fetchDetails = async () =>{ 
  try {
      let response = await   fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=10945bda", {
          method: "GET"
      })
      if(response.ok) {
          let details = await response.json()
          setIsLoading(false)
          console.log("movies detail",details)
      } else {
          console.log("something wrong")
          setIsLoading(true)
      }
  } catch (error) {
      console.log(error)
      setIsLoading(true)
  }
}
fetchDetails()
}, [])

return (
    <Container>
        <detail/>
    </Container>
)

}

export default ShowDetail