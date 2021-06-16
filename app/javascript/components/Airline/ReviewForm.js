import React from 'react';

const ReviewForm = (props) => {
  return (
    <div className='Wrapper'>
      <form>
        <div>Have an experience with [AirlineName]? Share your review!</div>
        <div className='field'>
          <input type='text' name='title' placeholder='Review Title'></input>
        </div>
        <div className='field'>
          <input
            type='text'
            name='description'
            placeholder='Review Description'></input>
        </div>
        <div className='field'>
          <div className='rating conatiner'>
            <div className=' rating-title-text'>Rate this Airline</div>
            [Star Rating Goes Here]
          </div>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  );
};
export default ReviewForm;
