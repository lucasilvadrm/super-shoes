import styled, { css } from "styled-components";

export const StyledCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  flex: none;
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface SpanProps {
  options: "name" | "oldprice" | "price";
}

export const SpanDefault = styled.span`
  display: block;
  text-align: center;
  color: #1e1e1e;
  padding: 5px;
  border-radius: 10px;
`;

export const Span = styled(SpanDefault)<SpanProps>`
  ${({ options }) => {
    if (options === "name") {
      return css`
        font-size: 1.2rem;
        font-weight: bold;
        margin: 10px 0;
        color: #00a8fb;
      `;
    }

    if (options === "oldprice") {
      return css`
        font-size: 0.8rem;
        text-decoration: line-through;
        flex-grow: 1;
        color: #e81a5d;
      `;
    }

    if (options === "price") {
      return css`
        margin-top: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #ff7e3b;
      `;
    }
  }}
`;

export const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;
