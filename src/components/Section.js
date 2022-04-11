import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export function SectionOne({
  id,
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
  alt,
}) {
  return (
    <Wrap bgImage={backgroundImg} id={id} alt={alt}>
      <Fade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" alt="down arrow" />
      </Buttons>
    </Wrap>
  );
}

export function Section({
  id,
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
  alt,
}) {
  return (
    <Wrap bgImage={backgroundImg} id={id} alt={alt}>
      <Fade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  scroll-snap-align: end;
  /* added this query same for buttons */
  @media (max-width: 599px) {
    background-image: ${(props) => `url("/images/m/${props.bgImage}")`};
    background-size: cover 100%;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  /* change for small screens */
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: White;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
