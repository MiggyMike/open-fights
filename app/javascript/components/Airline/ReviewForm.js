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

const RatingTitle = styled.div``;

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type='radio'
          value={score}
          name='rating'
          onChange={() => console.log('selected:', score)}
          id={`rating-${score}`}
        />
        <label></label>
      </Fragment>
    );
  });

  return (
    <div className='Wrapper'>
      <form onSubmit={props.handleSubmit}>
        <div>
          Have an experience with {props.attributes.name}? Share your review!
        </div>
        <div className='field'>
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type='text'
            name='title'
            placeholder='Review Title'></input>
        </div>
        <div className='field'>
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type='text'
            name='description'
            placeholder='Review Description'></input>
        </div>
        <div className='field'>
          <RatingContainer>
            <div className=' rating-title-text'>Rate this Airline</div>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  );
};
export default ReviewForm;
