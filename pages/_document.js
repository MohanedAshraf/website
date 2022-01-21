import Document, { Html, Head, Main, NextScript } from "next/document"
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="images/logo.png" />
          <meta property="og:image" content="images/blacklogo.png"></meta>
          <meta property="twitter:image" content="images/blacklogo.png"></meta>
          <meta property="twitter:card" content="images/blacklogo.png"></meta>
          <meta property='og:title' content='Mohaned Ashraf'/>
          <meta property='og:image' content='images/blacklogo.png'/>
          <meta property='og:description' content='Mohaned Ashraf Website'/>
          <meta property='og:url' content='www.mohaned.me'/>
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
