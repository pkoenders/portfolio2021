// import React from 'react'
import React, { Component, createRef } from 'react'

// Helpers
import { Link } from 'gatsby'
import i18n from '/config/i18n'
//import linkResolver from '/src/utils/linkResolver'

import Brand from '../brand/'
//import ScrollToTop from './scrollToTop/'
import ThemeSwitcher from '/src/components/common/header/themeSwitcher/'

import styled from 'styled-components'

const FooterWrapper = styled.footer`
  position: relative;
  color: ${({ theme }) => theme.colors.footer.text.default};
  background-color: ${({ theme }) => theme.colors.footer.default};
  padding: ${({ theme }) => theme.padding['4xl']} 0;
  text-align: center;
  //z-index: 1;

  > nav {
    max-width: ${({ theme }) => theme.screens.lg};
    position: relative;
    margin: 0 auto;
    z-index: 1000 !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};

    p {
      //margin-bottom: ${({ theme }) => theme.margin['1/4']};
      position: relative;
      text-align: center;
    }

    a {
      position: relative;
      color: unset;
      display: flex;
      margin: 0 auto;
      width: fit-content;
      padding: 2px 12px;

      span {
        display: none;
      }

      svg {
        width: auto;
        height: 24px;
        // margin: ${({ theme }) => theme.margin['1/4']} auto;
      }
    }

    a:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="footerWrapper">
        <nav aria-label="Footer navigation">
          <ThemeSwitcher changeTheme={this.props.changeTheme} currTheme={this.props.currTheme} />

          {/* <ScrollToTop /> */}
          <p>
            {/* © {new Date().getFullYear()} - {i18n[currentLang].siteTitle} */}©{' '}
            {new Date().getFullYear()} — Peter Koenders
          </p>

          <Link
            to={
              this.props.currentPrefix === '/'
                ? this.props.currentPrefix
                : `${this.props.currentPrefix}/`
            }
            aria-label={i18n[this.props.currentLang].linkToHomepage}
            className="l1"
          >
            <Brand />
          </Link>
        </nav>
      </FooterWrapper>
    )
  }
}

export default Footer

// const Footer = ({ currentLang, currentPrefix, changeTheme, currTheme }) => {
//   // const data = useStaticQuery(graphql`
//   //   query FooterQuery {
//   //     site {
//   //       siteMetadata {
//   //         title
//   //         author
//   //         year
//   //       }
//   //     }
//   //   }
//   // `)

//   return (
//     <FooterWrapper className="footerWrapper">
//       <nav aria-label="Footer navigation">
//         {/* <ScrollToTop /> */}
//         <p>
//           {/* © {new Date().getFullYear()} - {i18n[currentLang].siteTitle} */}©{' '}
//           {new Date().getFullYear()} — Peter Koenders
//         </p>
//         <Link
//           to={currentPrefix === '/' ? currentPrefix : `${currentPrefix}/`}
//           aria-label={i18n[currentLang].linkToHomepage}
//           className="brand"
//         >
//           <Brand />
//         </Link>
//         <ThemeSwitcher changeTheme={this.props.changeTheme} currTheme={this.props.currTheme} />
//       </nav>
//     </FooterWrapper>
//   )
// }

// export default Footer
