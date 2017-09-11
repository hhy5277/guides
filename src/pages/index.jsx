import React from 'react';
import Helmet from 'react-helmet';

function Index() {
  return (
    <div>
      <Helmet>
        <title>freeCodeCamp Guides</title>
      </Helmet>
      <h2>freeCodeCamp Guides</h2>
      <p>
        {
          'This website is full of articles about all things related to ' +
          'programming. You can use the search bar above to find something ' +
          'you would like to learn about, or use the navigation to explore ' +
          'the content.'
        }
      </p>
      <p>There are articles on:</p>
        <ul>
          <li>SQL</li>
          <li>Math</li>
          <li>javaScript</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>and a whole lot more</li>
        </ul>
        <h3>Not sure where to start?</h3>
        <p>
          {
            'If you want to learn programming but you\'re not sure where to ' +
            'start, check out '
          }
          <a
            href='https://freecodecamp.org'
            rel='nofollow'
            target='_blank'
            >
            freeCodeCamp.org
          </a>
          {
            '. It has a curriculum that starts from zero and helps you learn' +
            ' to code.'
          }
        </p>
        <h3>Contribute to the guides</h3>
        <p>
          {
            'This site and the articles on it are '
          }
          <a
            href='https://github.com/freeCodeCamp/guides'
            rel='nofollow'
            target='_blank'
            >
            open source
          </a>
          {
            '. Your help in making it better is greatly appreciated!'
          }
        </p>
        <hr />
        <p>Happy coding!</p>
    </div>
  );
}

Index.displayName = 'IndexPage';

export default Index;
