import styled, { css } from 'styled-components'

export const Style = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    overflow: hidden;

    .layout-top-bar {
      background: #F5F3F6;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .display-page {
      height: calc(100% - 100px);
    }

  `}
`