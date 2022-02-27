import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHAR_BY_ID } from "../../GraphQL/Queries";
import { useNavigate, useParams } from "react-router-dom";
import {
  Wrapper,
  CharacterInfo,
  EpisodesWrapper,
  EpisodeWrapper,
  BackButton,
} from "./style";

function Character() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_CHAR_BY_ID, {
    variables: { id },
  });
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
    setIsLoading(loading);
  }, [data]);

  return (
    <Wrapper>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      {character && (
        <div>
          <CharacterInfo>
            <img src={character.image} alt={character.name} />
            <div className="character-content">
              <h1 className="title">{character.name}</h1>
              <span>{`I am a ${character.species}`}</span>

              <span>
                <b>Origin: </b>
                {`${character.origin.name} - ${character.origin.type}`}
              </span>

              <span>
                <b>Location: </b>
                {`${character.location.name} - ${character.location.type}`}
              </span>
            </div>
          </CharacterInfo>
          <EpisodesWrapper>
            <h1 className="heading">Episodes</h1>
            {character.episode.map((item) => (
              <EpisodeWrapper key={item.episode}>
                <span className="title">{item.episode}</span>
                <span>{item.name}</span>
                <span>{item.air_date}</span>
              </EpisodeWrapper>
            ))}
          </EpisodesWrapper>
        </div>
      )}
    </Wrapper>
  );
}

export default Character;
