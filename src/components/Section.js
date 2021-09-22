import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemTest>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemTest>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemTest = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  color: #ffffff;
  background-color: #171a20;
  border-radius: 100px;
  opacity: 0.85;
  text-align: center;
  box-shadow: #393c41 0px 0px 0px 2px;
  text-transform: uppercase;
  line-height: 14.4px;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 8px;

  @media (max-width: 768px) {
    width: 500px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: #ffffff;
  color: #393c41;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
