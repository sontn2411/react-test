import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>asdasdasd</title>
        <meta data-react-helmet='true' name='title' content='asdasdasd' />
        <meta data-react-helmet='true' name='description' content='asdasdasd' />

        <meta data-react-helmet='true' property='og:type' content='website' />
        <meta
          data-react-helmet='true'
          property='og:url'
          content='https://react-test-eight-hazel.vercel.app/'
        />
        <meta
          data-react-helmet='true'
          property='og:title'
          content='asdasdasd'
        />
        <meta
          data-react-helmet='true'
          property='og:description'
          content='asdasdasd'
        />
        <meta
          data-react-helmet='true'
          property='og:image'
          content='https://metatags.io/images/meta-tags.png'
        />

        <meta
          data-react-helmet='true'
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          data-react-helmet='true'
          property='twitter:url'
          content='https://react-test-eight-hazel.vercel.app/'
        />
        <meta
          data-react-helmet='true'
          property='twitter:title'
          content='asdasdasd'
        />
        <meta
          data-react-helmet='true'
          property='twitter:description'
          content='asdasdasd'
        />
        <meta
          data-react-helmet='true'
          property='twitter:image'
          content='https://metatags.io/images/meta-tags.png'
        />
      </Helmet>
      <h1>Home</h1>
    </>
  )
}

export default Home
