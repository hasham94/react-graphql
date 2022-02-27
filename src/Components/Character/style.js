import styled from "styled-components";

export const BackButton = styled.button`
  width: fit-content;
  background: none;
  border: none;
  margin-bottom: 22px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 22px;
  min-height: calc(100vh - 158px);
  max-width: 1300px;
  margin: auto;
`;

export const CharacterInfo = styled.div`
  display: flex;
  img {
    flex: 1;
    max-width: 264px;
    width: 100%;
    border-radius: 50%;
  }
  .character-content {
    flex: 3;
    padding: 26px;
    span {
      display: block;
      margin-bottom: 13px;
    }
    .title {
      margin-bottom: 13px;
    }
  }
`;

export const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 38px;
  .heading {
    width: 100%;
    margin-bottom: 32px;
  }
`;
export const EpisodeWrapper = styled.div`
  padding: 13px;
  box-shadow: 1px 0px 14px -7px black;
  margin-right: 13px;
  margin-bottom: 13px;
  :hover {
    box-shadow: none;
    cursor: pointer;
  }
  span {
    display: block;
  }
  .title {
    font-size: 18px;
    margin-bottom: 13px;
  }
`;
