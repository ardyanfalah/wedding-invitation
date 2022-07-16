import React from 'react'
import '../styles/global.css'
import { GlobalStyles } from 'twin.macro'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import thumbnail from '../images/thumbnail.jpg'

const Layout = ({ children, ...rest }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata?.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <div {...rest}>
      <Helmet
        title={defaultTitle}
        titleTemplate={defaultTitle}
        meta={[
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: 'Khitanan Imie - Undangan Digital'
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``
          },
          {
            name: `twitter:title`,
            content: defaultTitle
          },
          {
            name: `twitter:description`,
            content: metaDescription
          }
        ]}
      >
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="robots" content="NOODP" />
        <meta name="theme-color" content="#eeeeee" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="google" content="notranslate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="description"
          content="Official Wedding Website Firda Meilani Fauziah with Ardyan Hidayatul Falah"
        />
        <meta property="og:title" content="Khitanan Imie - Undangan Digital" />
        <meta property="og:url" content="https://undangankhitan.gatsbyjs.io/" />
        <meta property="og:description" content="25 Juli 2022" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Undangan Digital"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          id="og-image"
          property="og:image"
          content="https://i.ibb.co/3C7MqRF/Whats-App-Image-2022-07-10-at-10-16-08-PM-1.jpg"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300"></meta>
      </Helmet>
      <GlobalStyles />
      {children}
    </div>
  )
}

export default Layout
