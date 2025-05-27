import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>about | Smarter</title>

        <meta property='og:url' content='https://www.smarter.com' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content='Smarter, Smarter' />
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s'
        />
        <meta property='og:image:alt' content='Home | Smarter' />

        <meta name='twitter:title' content='Home | Smarter' />
        <meta name='twitter:description' content='Smarter, Smarter' />
        <meta
          name='twitter:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <p>Here you can find information about our project, team, and goals.</p>
      <p>Feel free to explore and learn more about what we do!</p>
    </div>
  )
}

export default About
