import React, { Fragment } from 'react';
import styled from 'styled-components';
import Gray from './Star/Gray';
import Selected from './Star/Selected';
import Hover from './Star/Hover';

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 19px;
  padding: 40px 0px 10px 0;
  border: 1px solid @e6e6e6;
  margin-top: 20px;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml;charset=UTF-8,l${Gray}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url('data:image/svg+xml;charset=UTF-8,${Selected}');
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url('data:image/svg+xml;charset=UTF-8,${Hover}');
  }
`;

const Field = styled.div`
border-radius: 4px;

input{
  width: 97%;
  min-height: 50px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  margin-top: 12px;
  padding: 12px;
}

textarea{
  width: 100%;
  min-height: 80px
  border: 1px solid #e6e6e6;
  margin: 12px;
  padding: 12px;
}`;

const Wrapper = styled.div`
  background: #000;
  padding: 20px;
  height: 100vh;
  padding-top: 100px;
`;
const Submit = styled.div`
  color: #fff;
  background: green;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  width: 97%;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`;
const Headline = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weightL bold;
  color: #fff;
`;

const RatingTitle = styled.div`
  padding:20px;
  font-size:20px;
  font-weightL bold;
`;

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type='radio'
          value={score}
          name='rating'
          checked={props.review.score == score}
          onChange={() => console.log('selected:', score)}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Have an experience with {props.attributes.name}? Share your review!
        </Headline>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type='text'
            name='title'
            placeholder='Review Title'></input>
        </Field>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type='text'
            name='description'
            placeholder='Review Description'></input>
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Airline</RatingTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <Submit>Submit Your Review</Submit>
      </form>
    </Wrapper>
  );
};
export default ReviewForm;
