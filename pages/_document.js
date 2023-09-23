import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
          name="description"
          content="A blogging website containing blogs about web development."
        />
         <meta
          name="keywords"
          content="web development, html, css, javascript, blog, blogging"
        />
         <meta name="author" content="Syed Asar Aman" />
         <meta property="og:site_name" content="blog-app-asar.vercel.app" />
         <meta
          property="og:description"
          content="Asar Blog."
        />
         <meta property="og:title" content="Asar Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asar Blog" />
        <meta
          name="twitter:description"
          content="Syed Asar Aman Blog."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
