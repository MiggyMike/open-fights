import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  //
  useEffect(() => {
    // console.log(props);

    // airlines/:slug
    const slug = props.match.params.slug;
    // api/v1/airlines/:slug
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((resp) => console.log(resp))
      .catch((resp) => console.log(resp));
  }, []);
  return <div> This is the Airline#show view for the app</div>;
};

export default Airline;
