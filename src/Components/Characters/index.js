import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CHAR } from "../../GraphQL/Queries";
import { useNavigate } from "react-router-dom";
import { Wrapper, BoxWrapper, BoxContent, Loading } from "./style";

function Characters() {
  const navigate = useNavigate();
  const page = 1;
  const filter = {
    name: "a",
  };
  const { error, loading, data } = useQuery(LOAD_CHAR, {
    variables: { page, filter },
  });
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
    setIsLoading(loading);
  }, [data]);

  const navigateToCharacter = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          {characters.map((item) => (
            <BoxWrapper key={item.id}>
              <img className="mainImg" src={item.image} alt="item.name" />
              <BoxContent onClick={() => navigateToCharacter(item.id)}>
                <h1 className="title">{item.name}</h1>
                {item.gender !== "unknown" && (
                  <span className="gender">{item.gender}</span>
                )}
                {item.species === "Human" ? (
                  <>{`I am a ${item.species}`}</>
                ) : (
                  <>{`I am an ${item.species}`}</>
                )}
                {item.status !== "unknown" && (
                  <>
                    {item.status === "Alive" ? (
                      <>{` and yes i am still ${item.status}`}</>
                    ) : (
                      <>{` but sadly i am ${item.status}`}</>
                    )}
                  </>
                )}
                <span className="created">{item.created}</span>
              </BoxContent>
            </BoxWrapper>
          ))}
        </>
      )}
    </Wrapper>
  );
}

export default Characters;
