import "./App.css";
import mainImage from "./image/jeonguk-wpT8YxhNk9w-unsplash.jpg";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      {/**
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
      <h1>rohnotes</h1>
      <div className="gallery">
        <img src={mainImage} alt="seoul" />
        <div className="desc">
          Photo by{" "}
          <a
            href="https://unsplash.com/@u66kie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            JEONGUK -
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/s/photos/seoul?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </div>
      </div>
      <div className="introduce">
        <p>Hello. I am Yongwoo Roh.</p>
        <p>I am working as a startup developer in Seoul, Korea.</p>
        <p>I don't know anything. - Daniel Stenberg</p>
        <p>Ignoramus et ignorabimus. - Emil du Bois-Reymond</p>
      </div>
      {/** Add font awesome icons  */}
      <div className="related">
        <a
          type="button"
          className="fa fa-blog"
          href="https://blog.rohnotes.com/"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
        <a
          type="button"
          className="fa fa-facebook"
          href="https://www.facebook.com/ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          facebook
        </a>
        <a
          type="button"
          className="fa fa-instagram"
          href="https://www.instagram.com/ywroh1"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        <a
          type="button"
          className="fa fa-linkedin"
          href="https://www.linkedin.com/in/ywroh/"
          target="_blank"
          rel="noreferrer"
        >
          linkedIn
        </a>
        <a
          type="button"
          className="fa fa-youtube"
          href="https://www.youtube.com/channel/UCk4US1liBH0Lk5OS9tfUnPQ?view_as=subscriber"
          target="_blank"
          rel="noreferrer"
        >
          youtube
        </a>
        <a
          type="button"
          className="fa fa-github"
          href="https://github.com/ywroh"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          type="button"
          className="fa fa-dev"
          href="https://dev.to/ywroh"
          target="_blank"
          rel="noreferrer"
        >
          DEV
        </a>
        <a
          type="button"
          className="fa fa-twitter"
          href="https://twitter.com/ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>
        <a
          type="button"
          className="fa fa-stackoverflow"
          href="https://stackoverflow.com/users/10385668/yongwooroh"
          target="_blank"
          rel="noreferrer"
        >
          stackoverflow
        </a>
        <a
          type="button"
          className="fa fa-medium"
          href="https://medium.com/@ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          medium
        </a>
        {/**
    <button
      type="button"
      className="fa fa-trading"
      onClick="window.open('https://tradingnotes.tistory.com/');"
    >
      tradingNotes
    </button>
        <a
          type="button"
          className="fa fa-exercise"
          href="https://www.instagram.com/rohworkout"
          target="_blank"
          rel="noreferrer"
        >
          rohworkout
        </a>
    */}
        <a
          type="button"
          className="fa fa-npm"
          href="https://www.npmjs.com/~ywroh"
          target="_blank"
          rel="noreferrer"
        >
          npm
        </a>
        <a
          type="button"
          className="fa fa-unsplash"
          href="https://unsplash.com/@ywroh"
          target="_blank"
          rel="noreferrer"
        >
          unsplash
        </a>
      </div>
    </div>
  );
}

export default App;
