import "./App.css";
import { useQuery } from "@apollo/client";
import { getAllWishes } from "./queries";
import Wish from "./components/Wish/Wish";
import styled from "styled-components";

export default function App() {
  const { loading, data, error } = useQuery(getAllWishes);

  switch (true) {
    case loading:
      return "Loading";
    case !!data: {
      return (
        <WishList>
          {(data.wishes ?? []).map((wish, index) => (
            <Wish key={index} details={wish} />
          ))}
        </WishList>
      );
    }
    case !!error:
      return error.message;
    default:
      return null;
  }
}

const WishList = styled.div`
  display: grid;
  padding: 60px 40px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, 300px);
`;
