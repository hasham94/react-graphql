import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHAR_BY_ID } from "../../GraphQL/Queries";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper, BackButton } from "./style";

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
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
          <span>{character.species}</span>

          <span>{character.origin.name}</span>
          <span>{character.origin.type}</span>

          <span>{character.location.name}</span>
          <span>{character.location.type}</span>

          {character.episode.map((item) => (
            <div>
              <span key={item.episode}>
                {item.name} {item.air_date}
              </span>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

export default Character;
