import Button from "components/Button/Button"
import {
  AdviceCard,
  AdviceContainer,
  AdviceRandomizerWrapper,
  AdviceWrapper,
  AdviceText,
  Error,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  adviceRandomizerActions,
  adviceRandomizerSelectors,
} from "store/redux/adviceRandomizer/adviceRandomizerSlice"
import { v4 } from "uuid"
import Spinner from "components/Spinner/Spinner"

function AdviceRandomizer() {
  const { data, error, status } = useAppSelector(
    adviceRandomizerSelectors.adviceData,
  )
  const dispatch = useAppDispatch()

  const advices = data.map(advice => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
  })

  const getAdvice = () => {
    dispatch(adviceRandomizerActions.getAdvice())
  }
  const deleteAllAdvices = () => {
    dispatch(adviceRandomizerActions.clearAdvice())
  }

  const isLoading: boolean = status === "loading"

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <Button name="Get Advice" onClick={getAdvice} disabled={isLoading} />
        {status === "loading" && <Spinner />}
        {status === "error" && <Error>{error}</Error>}
        {/*{status === "error" && <div>Error: {error}</div>}*/}
        <AdviceContainer>{advices}</AdviceContainer>
        {data.length > 0 && (
          <Button name="Delete All Advices" onClick={deleteAllAdvices} />
        )}
      </AdviceCard>
    </AdviceRandomizerWrapper>
  )
}

export default AdviceRandomizer
