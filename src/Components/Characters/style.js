import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 22px;
  min-height: calc(100vh - 158px);
  max-width: 1300px;
  margin: auto;
`;

export const BoxWrapper = styled.div`
  border: 1px solid #e2e1e1;
  margin-bottom: 16px;
  width: 22%;
  cursor: pointer;
  .mainImg {
    width: 100%;
  }
  :hover {
    box-shadow: 1px 1px 14px -1px #747474;
  }
`;
export const BoxContent = styled.div`
  padding: 13px;
  position: relative;
  span {
    display: block;
  }
  .title {
    font-size: 22px;
    margin-bottom: 13px;
  }
  .gender {
    position: absolute;
    top: -43px;
    background: black;
    color: white;
    padding: 5px 14px;
    right: 0px;
    font-size: 17px;
    border-radius: 8px 0px 0px 0px;
  }
  .created {
    font-size: 13px;
    color: #828284;
    margin-top: 13px;
  }
`;

export const Loading = styled.span`
  font-size: 28px;
  display: block;
  margin: auto;
`;
