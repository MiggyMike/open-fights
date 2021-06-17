import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  // set this as false - this lets us know when the data has been loaded - add to useEffect - set a boolean to update - helper for digging into nested objects
  const [loaded, setLoaded] = useState(false);

  //
  useEffect(() => {
    console.log(props);

    // airlines/:slug
    const slug = props.match.params.slug;
    // api/v1/airlines/:slug
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        // console.log(resp);
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  // handles changes in input fields
  const handleChange = (e) => {
    e.preventDefault();
    // console.log('name:', e.target.name, 'value:', e.target.value);
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    console.log('review:', review);
  };

  // handles changes in what we do when form is submited fields
  // sumbit review to api to create new recview in database
  const handleSubmit = (e) => {
    e.preventDefault();

    // update default headers to pull in csrfTokens
    const csrfToken = document.querySelector('[name =csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    console.log('csrf:', csrfToken);

    // grab airline id from  airline object
    const airline_id = airline.data.id;
    // combine  review with the airline id
    // making post request to api
    axios
      .post('/api/v1/reviews', { review, airline_id }) // payload submitted
      .then((resp) => {
        // debugger;
        const included = [...airline.included, resp.data];
        setAirline({ ...airline, included });
        setReview({ title: '', description: '', score: 0 });
      })
      .catch((resp) => {});
  };

  return (
    <Wrapper>
      {/* added the loaded wrapper to header */}
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              <div className='reviews'></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
