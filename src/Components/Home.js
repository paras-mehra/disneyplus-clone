import React from "react";
import styled from "styled-components";
import dbConfig from "../Firebase";
import { useDispatch } from "react-redux";
import Banner from "./Home/Banner";
import background from "../Components/Images/background.jpg";
import Brand from "./Home/Brand";
import Original from "./Home/Original";
import NewToDisney from "./Home/NewToDisney";
import Trending from "./Home/Trending";
import Hollywood from "./Home/Hollywood";
import DisneyKid from "./Home/DisneyKid";
import Popular from "./Home/Popular";
import { useEffect } from "react";
import { setDisneyMovies } from "./Redux/Reducer/MovieReducer";

const Home = () => {
  const dispatch = useDispatch();

  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;

          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;

          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;

          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });

      dispatch(
        setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trending,
        })
      );
    });
  }, []);

  return (
    <>
      <Container>
        <Banner />
        <Brand />
        <Original />
        <NewToDisney />
        <Trending />
        <Hollywood />
        <DisneyKid />
        <Popular />
      </Container>
    </>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  background: url(${background}) center/cover no-repeat;
`;

export default Home;
