# WinWin

## ✅ 요약
- wanted에서 주최한 [해,커리어] 채용 연계형 해커톤에서 진행한 프로젝트 입니다.
- **호텔 로비의 남는 공간에 아티스트들의 작품을 전시할 수 있도록 호텔과 아티스트를 연결해주는 플랫폼 WinWin**

## ⚙️ 기술 스택
<div style='display: flex;'>
  <img alt="Javascript" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img alt="Redux" src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img alt="Redux-saga" src="https://img.shields.io/badge/Redux saga-999999?style=for-the-badge&logo=redux-saga&logoColor=white">
  <img alt="Styled-components" src="https://img.shields.io/badge/Styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

## 🎨 구현한 기능(UI)
- 아티스트/호텔 사용자로 나누어 UI를 개발하였습니다.

![winwin](https://user-images.githubusercontent.com/33178048/193223290-9d5951b2-f1fa-49c5-9797-de5cd681c5d7.png)

## 🤔 고민
- Container/Presentational 구조로 프로젝트를 구성하여 **view와 API상태로직(Redux 로직)을 분리**하고자 했습니다.
- **Redux가 비동기 통신에 적합한 도구인지 고민**해보았습니다. 비동기 통신을 위해 Redux-saga를 도입하였지만 JS의 generator와 같은 최신 문법을 사용하고 있어 익숙하지 못해 러닝커브가 있었습니다.
- 서버 API가 많아지면서 덩달아 Redux 모듈을 만들기 위한 보일러플레이트가 증가하였습니다. 하나의 API를 사용하는데에도 적어도 3개의 상태(데이터, 로딩, 에러)가 필요했고, reducer, action, action생성 함수 등을 작성하는 작업이 반복되었습니다. 이런 불편함 때문에 프로젝트가 끝나갈 무렵에는 redux 모듈을 만들지 않고 그냥 API함수를 가져다 사용하는 상황까지 생겼습니다. 서버 상태를 관리하기 위해 redux말고 다른 도구를 고려해볼 필요가 있었습니다.
