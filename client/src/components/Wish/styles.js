import styled from "styled-components";

export const WishBox = styled.div`
  padding: 20px;
  border-radius: 4px;
  transition: box-shadow 0.2s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  :hover {
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Budget = styled.div`
  font-size: 15px;
  margin-bottom: 20px;

  > p {
    font-weight: 500;
    margin: 0 0 5px 0;
  }
`;

export const Links = styled.div`
  font-size: 15px;

  > p {
    font-weight: 500;
    margin: 0 0 5px 0;
  }

  > div::before {
    content: "•";
    margin-right: 5px;
  }
`;
