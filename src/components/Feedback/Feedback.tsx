//import { useState } from "react";
//import { log } from "console"
import Button from "../Button/Button"
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)
  //console.log(count);
  const dispatch = useAppDispatch() // 

  const onLike = () => {
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }
  const onReset = () => {
    dispatch(feedbackSliceActions.reset())
  }

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={onLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={onDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={onReset} />
    </FeedbackContainer>
  )
}

export default Feedback
