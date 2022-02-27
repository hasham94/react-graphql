import { Wrapper } from "./style";

const Pagination = ({ pageInfo, setPage }) => {
  return (
    <Wrapper>
      {pageInfo.prev && (
        <button onClick={() => setPage(pageInfo.prev)}>Prev</button>
      )}
      {pageInfo.next && (
        <button onClick={() => setPage(pageInfo.next)}>Next</button>
      )}
    </Wrapper>
  );
};

export default Pagination;
