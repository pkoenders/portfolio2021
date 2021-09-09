import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '/src/components/layout'
import Bground404 from '/src/components/common/404/404-bground'

import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import HomeTemplate from './index'
import PageTemplate from '../templates/generalPage'
import Button from '/src/components/common/buttons/linkButton'

const NotFoundPage = ({ data }) => {
  if (!data) return null
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang
  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <Bground404 />
      {/* <canvas className={'catAnim'} width="32" height="32" /> */}
      <section className="section-layout fourOfour">
        <span>
          <h1>Oh purr-leaze!</h1>
          <p>It appears that Zoe has hidden this page.</p>
          {/* <Button className="btn primary" to="/">
            <i className="material-icons-round md-36" aria-hidden="true">
              home
            </i>
            Take me home
          </Button> */}

          <Button
            buttonLabel={'Take me home'}
            buttonType={'Static'}
            staticLink={'/'}
            buttonStyle={'black'}
          />
        </span>
      </section>
    </Layout>
  )
}

export default withPrismicPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    homepage: HomeTemplate,
    prismicPage: PageTemplate,
    prismicHomepage: HomeTemplate,
  },
})

export const query = graphql`
  query errorPage($locale: String) {
    ## Get the primary nav in local context
    prismicMainNavigation(lang: { eq: $locale }) {
      type
      lang
      data {
        nav {
          ... on PrismicMainNavigationDataNavNavItem {
            id
            primary {
              label {
                text
              }
              link {
                uid
                lang
                type
              }
            }
            items {
              sub_nav_link {
                uid
                type
                lang
              }
              sub_nav_link_label {
                text
              }
            }
          }
        }
      }
    }
  }
`
