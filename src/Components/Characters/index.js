import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CHAR } from "../../GraphQL/Queries";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../common/SearchBar";
import Pagination from "../../common/Pagination";
import { Wrapper, BoxWrapper, BoxContent, Loading } from "./style";

function Characters() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [gender, setGender] = useState("");
  const [pageInfo, setPageInfo] = useState(null);
  const filter = {
    name: searchInput,
    gender: gender,
  };
  const { error, loading, data } = useQuery(LOAD_CHAR, {
    variables: { page, filter },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setPageInfo(data.characters.info);
    }
    setIsLoading(loading);
  }, [data, loading]);

  const navigateToCharacter = (id) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        gender={gender}
        setGender={setGender}
      />
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
      {pageInfo && <Pagination pageInfo={pageInfo} setPage={setPage} />}
    </>
  );
}

export default Characters;
