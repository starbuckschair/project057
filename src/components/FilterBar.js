import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import font from '../styles/font';

let FilterBox = styled.div`
  margin-top: 1%;
  width: 800px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
let Filters = styled.div`
  width: auto;
  height: auto;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 400;
  font-size: 13px;
  border-right: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #f0be29;
    cursor: pointer;
  }
`;
let All = styled(Filters)`
  font-weight: 600;
`;

function FilterBar() {
  return (
    <FilterBox>
      <All>전체보기</All>
      <Filters>1인분 주문 </Filters>
      <Filters>프렌차이즈</Filters>
      <Filters>치킨</Filters>
      <Filters>피자/양식</Filters>
      <Filters>중국집</Filters>
      <Filters>한식</Filters>
      <Filters>일식/돈까스</Filters>
      <Filters>족발/보쌈</Filters>
      <Filters>야식</Filters>
      <Filters>분식</Filters>
      <Filters>까페/디저트</Filters>
      <Filters>편의점/마트</Filters>
    </FilterBox>
  );
}
export default FilterBar;
