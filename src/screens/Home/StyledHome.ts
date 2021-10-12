import styled, { css } from "styled-components";
import Colors from "../../utils/colors";

interface IButton {
  isCelsius: boolean;
}

export const StyledCelsiusButton = styled.button<IButton>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin-right: 5px;

  background-color: ${Colors.weakBlue};
  color: ${Colors.white};
  font-size: 20px;
  ${(props) =>
    props.isCelsius === true &&
    css`
      background-color: ${Colors.weakWhite};
      color: ${Colors.darkBlue};
    `}
`;

export const StyledFahrenheitButton = styled.button<IButton>`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;

  background-color: ${Colors.weakWhite};
  color: ${Colors.darkBlue};

  font-size: 20px;
  ${(props) =>
    props.isCelsius === true &&
    css`
      background-color: ${Colors.weakBlue};
      color: ${Colors.white};
    `}
`;

export const StyledCelsiusFahrenheitDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 40px;
`;

export const StyledMainDiv = styled.div`
  display: flex;
`;

export const StyledCityDiv = styled.div`
  display: flex;
  width: 500px;
  min-height: 100vh;
  background-color: ${Colors.darkBlue};
  flex-direction: column;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 350px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const StyledMainTemperatureDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.weakWhite};
  font-size: 50px;
  margin-bottom: -80px;
  margin-top: -50px;
`;

export const StyledTodayWeatherName = styled.p`
  color: ${Colors.grey};
  margin-top: 80px;
  font-size: 25px;
`;

export const StyledIconAndCityNameDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledComponentsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
