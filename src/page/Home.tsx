import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content='11112312312 ' data-rh='true' />

        <meta property='og:url' content={window.location.href} data-rh='true' />
        <meta property='og:type' content='website' data-rh='true' />
        <meta property='og:title' content='11111111' data-rh='true' />
        <meta property='og:description' content='1111111111' data-rh='true' />

        <meta
          data-rh='true'
          property='og:image'
          content='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
        />
        <meta
          data-rh='true'
          property='og:image:secure_url'
          content='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
        />
        <meta data-rh='true' property='og:image:type' content='image/jpeg' />
        <meta data-rh='true' property='og:image:width' content='200' />
        <meta property='og:image:alt' content='Image of site' />

        <meta data-rh='true' name='twitter:creator' content='1111111' />
        <meta data-rh='true' name='twitter:card' content='summary' />
        <meta data-rh='true' name='twitter:title' content='1111111' />
        <meta data-rh='true' name='twitter:description' content='1111111' />
      </Helmet>
      <h1>Home</h1>
    </>
  )
}

export default Home
