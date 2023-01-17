import React from "react";
import Banner from "./Login/Banner";
import styled from "styled-components";
import Stream from "./Login/Stream";
import DownloadNow from "./Login/DownloadNow";
import GroupWatch from "./Login/GroupWatch";
import MarvelStudio from "./Login/MarvelStudio";
import GridTheme from "./Login/GridTheme";
import Devices from "./Login/Devices";
import Advertise from "./Login/Advertise";

const Login = () => {
  return (
    <>
      <Main>
        <Banner />
        <Stream />
        <GroupWatch />
        <MarvelStudio />
        <GridTheme />
        <DownloadNow />
        <Advertise />
        <Devices />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;

export default Login;
