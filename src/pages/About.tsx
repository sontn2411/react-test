import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>about | Smarter</title>
        <meta
          name='description'
          content='Học Lập Trình Để Đi Làm với các khóa học xây dựng UI web với HTML, CSS, lập trình Java, lập trình Javascript, React, ReactJS, lập trình mobile React-Native, lập trình Backend với PHP, Laravel, Node, ExpressJS, MySQL, MongoDB, RESTfulAPI, ...'
          data-react-helmet='true'
        ></meta>

        <meta
          property='og:url'
          content='https://fullstack.edu.vn/'
          data-react-helmet='true'
        />
        <meta
          property='og:type'
          content='article'
          data-react-helmet='true'
        ></meta>
        <meta
          property='og:title'
          content='F8 - Học Lập Trình Để Đi Làm'
          data-react-helmet='true'
        ></meta>
        <meta
          property='og:description'
          content='Học Lập Trình Để Đi Làm với các khóa học xây dựng UI web với HTML, CSS, lập trình Java, lập trình Javascript, React, ReactJS, lập trình mobile React-Native, lập trình Backend với PHP, Laravel, Node, ExpressJS, MySQL, MongoDB, RESTfulAPI, ...'
          data-react-helmet='true'
        ></meta>
      </Helmet>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
      <p>Here you can find information about our project, team, and goals.</p>
      <p>Feel free to explore and learn more about what we do!</p>
    </div>
  )
}

export default About
