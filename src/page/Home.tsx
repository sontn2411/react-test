import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Standard metadata tags */}
        <title>1111111</title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content={'11112312312'} />
        {/* Open Graph tags (OG) */}
        <meta property='og:url' content={window.location.href} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={'11111111'} />
        <meta property='og:description' content={'1111111111'} />

        <meta
          property='og:image'
          content='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
        />
        <meta
          property='og:image:secure_url'
          content='https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:alt' content={`Image of  site`} />

        <meta name='twitter:creator' content={'1111111'} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={'1111111'} />
        <meta name='twitter:description' content={'1111111'} />
      </Helmet>
      <h1>Home</h1>
    </>
  )
}

export default Home
