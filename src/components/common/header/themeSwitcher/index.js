import React from 'react'

import styled from 'styled-components'

const Switcher = styled.button`
  display: flex;
  //height: ${({ theme }) => theme.header.height};
  align-self: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  margin: auto;
  padding: ${({ theme }) => theme.padding['1/16']} 16px;
  // position: absolute;
  //right: 0;
  //top: 0;
  border-radius: 999rem;
  //background-color: ${({ theme }) => theme.colors.pageHold.default};
  border: 1px solid ${({ theme }) => theme.colors.header[800]};
  //box-shadow: ${({ theme }) => theme.boxShadow.lg};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    //  top: 60px;
    //right: ${({ theme }) => theme.padding['1/4']};
  }

  span {
    color: ${({ theme }) => theme.colors.pageHold[200]};
    white-space: nowrap;
    display: inherit;
    flex-direction: row;
    align-items: center;
    transition: transform 0.4s ease-in;
    //text-decoration: underline;
    span {
      margin-left: 6px;
      font-size: 22px;
    }
    .dark {
      margin-left: 8px;
      //margin: 0;
      // margin-right: 6px;
    }
  }
`

const ThemeSwitcher = ({ changeTheme, currTheme }) => {
  return (
    <Switcher className="themeSwitcher" type="button" onClick={changeTheme}>
      {currTheme ? (
        <span aria-label="Light mode" role="img">
          Light<span>🌞</span>
        </span>
      ) : (
        <span aria-label="Dark mode" role="img">
          Dark<span className="dark">🌜</span>
        </span>
      )}
    </Switcher>
  )
}

export default ThemeSwitcher
