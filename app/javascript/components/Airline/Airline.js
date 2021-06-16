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
            <ReviewForm />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
