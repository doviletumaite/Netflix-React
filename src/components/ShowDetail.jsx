import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
 import Detail from "./Detail";

const ShowDetail = ({match}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
        let id = match.params.movieID
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=10945bda" + id,
        //   {
        //     method: "GET",
        //   }
        );
        if (id) {
          let details = await response.json();
          setIsLoading(false);
          setInfo(details)
          console.log("movies detail", details);
        } else {
          console.log("something wrong");
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    fetchDetails();
  }, [match.params.movieID]);

  useEffect(() => {
    const fetchComments = async () => {
        let id = match.params.movieID
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + id,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJiYTY0Nzk5OGZmODAwMTVhMzM1ZTEiLCJpYXQiOjE2MzAyNTA1NjcsImV4cCI6MTYzMTQ2MDE2N30.fjwBzicLDqvpDPoHDNeOTPFCpomeo2Zu4lr109e37EQ",
            },
            // method: "POST",
            body: JSON.stringify()
          }
        );
        if (id) {
          let movieComments = await response.json();
          setIsLoading(false);
          setComments(movieComments)
          console.log("movies comments",movieComments );
        } else {
          console.log("something wrong");
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    fetchComments();
  }, [match.params.movieID]);
  
  return (
<div>
    {
        info && <Detail movie={info} comments={comments}/>
    }
</div>
  )

};

export default ShowDetail;
