import { styled } from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "sm"
      ? "7px 25px 8px"
      : props.size === "md"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.variant === 'solid' ? "#1b116e" : "#ffffff")};
  background-color: ${(props) => (props.variant === 'solid' ? "#6bedb5" : "#1b116e")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.variant === 'solid' ? "#55bd90" : "#6bedb5")};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "sm"
        ? "5px 23px 6px"
        : props.size === "md"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;