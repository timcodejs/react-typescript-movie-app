# react-typescript 무비앱 만들기

## 1. 개요

- TMDB Api를 활용하여 '영화 웹 어플리케이션' 개발 진행
- React, Typescript, Redux, Redux-saga를 사용하여 제작

## 2. 설치 라이브러리

1) dependencies
- react-router-dom, react-redux, redux, redux-saga, redux-logger, redux-devtools-extension, styled-components, axios, immer
- @types/react-redux, @types/redux-logger, @types/styled-components

## 3. 폴더 구조 (src/)

- _layout
- actions
- api
- components
- hook
- pages
- reducer
- saga
- store
- types

## 4. 기본 구조

- 메인 페이지(homeMain.tsx)에는 인기 영화, 현재 상영 영화, 개봉 예정 영화, 높은 평점의 인기 영화들의 Top 20을 정렬하여 보여주며
가로 스크롤을 사용하여 정렬.
- 상단 메뉴의 각 버튼(인기, 현재 상영 중, 개봉 영화, 높은 평점)들은 해당하는 영화들의 리스트만 보여주도록 각 페이지로 이동한다.
- 각 영화 카드를 클릭하면 상세 페이지(movieDetail.tsx)로 이동하며 영화의 개봉일과 평점 그리고 줄거리 및 감독, 출연 배우진에 대한 설명과 이미지를 볼 수 있다.
- 상단의 검색 섹션은 리스트(list.ts) 상태 관리와는 별개로 찾기(search.ts) 상태 관리를 통해 검색된 이름이 포함된 영화들에 대한 리스트를 보여준다.