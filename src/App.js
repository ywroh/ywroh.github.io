import logo from "./logo.svg";
import "./App.css";
import mainImage from "./public/image/jeonguk-wpT8YxhNk9w-unsplash.jpg";
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
      <div class="gallery">
        <img src={mainImage} alt="seoul" />
        <div class="desc">
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
      <div class="introduce">
        <p>Hello. I am Yongwoo Roh.</p>
        <p>I am working as a cloud web developer in Seoul, Korea.</p>
        <p>I don't know anything.</p>
      </div>
      {/** Add font awesome icons  */}
      <div class="related">
        <button
          type="button"
          class="fa fa-blog"
          onclick="window.open('https://blog.rohnotes.com/');"
        >
          blog
        </button>
        <a
          type="button"
          class="fa fa-facebook"
          href="https://www.facebook.com/ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <br />
        <a
          type="button"
          class="fa fa-instagram"
          href="https://www.instagram.com/ywroh1"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <br />
        <a
          type="button"
          class="fa fa-linkedin"
          href="https://www.linkedin.com/in/ywroh/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          type="button"
          class="fa fa-youtube"
          href="https://www.youtube.com/channel/UCk4US1liBH0Lk5OS9tfUnPQ?view_as=subscriber"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
        <br />
        <a
          type="button"
          class="fa fa-github"
          href="https://github.com/ywroh"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />
        <button
          type="button"
          class="fa fa-dev"
          onclick="window.open('https://dev.to/ywroh');"
        >
          DEV
        </button>
        <a
          type="button"
          class="fa fa-twitter"
          href="https://twitter.com/ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>
        <br />
        <button
          type="button"
          class="fa fa-stackoverflow"
          onclick="window.open('https://stackoverflow.com/users/10385668/yongwooroh');"
        >
          stackOverFlow
        </button>
        <a
          type="button"
          class="fa fa-medium"
          href="https://medium.com/@ywroh2"
          target="_blank"
          rel="noreferrer"
        >
          medium
        </a>
        <br />
        {/**
    <button
      type="button"
      class="fa fa-trading"
      onclick="window.open('https://tradingnotes.tistory.com/');"
    >
      tradingNotes
    </button>
    */}
        <button
          type="button"
          class="fa fa-exercise"
          onclick="window.open('https://www.instagram.com/rohworkout');"
        >
          rohworkout
        </button>
        <button
          type="button"
          class="fa fa-npm"
          onclick="window.open('https://www.npmjs.com/~ywroh');"
        >
          NPM
        </button>
      </div>
    </div>
  );
}

export default App;
