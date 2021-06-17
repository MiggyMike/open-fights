import React, { Fragment } from 'react';

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment>
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
          <div className='rating conatiner'>
            <div className=' rating-title-text'>Rate this Airline</div>
            {ratingOptions}
          </div>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  );
};
export default ReviewForm;
