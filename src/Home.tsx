import { FunctionComponent, useCallback } from "react";
import styles from "./css/Home.module.css";

export const Home: FunctionComponent = () => {
  const onImage2Click = useCallback(() => {
    window.open("https://www.youtube.com/");
  }, []);

  const onImage1Click = useCallback(() => {
    window.open("https://github.com/imreset");
  }, []);

  const onGitHubMark32px1ButtonClick = useCallback(() => {
    window.open("https://github.com/imreset");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/12r6qzN0Fxkpd2B_IUIroDSwmrjdVryvtekQa_xyg2Yo/edit?usp=sharing"
    );
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.contactsContainer}>
          <a
            className={styles.behancecomjohndoeLink}
            href="https://www.dog.com/"
            target="_blank"
          >
            behance.com/johndoe
          </a>
          <a
            className={styles.twittercomjohndoeLink}
            href="https://twitter.com/"
            target="_blank"
          >
            twitter.com/johndoe
          </a>
          <a
            className={styles.matthiascheng50gmailcomLink}
            href="mailto:matthiascheng50@gmail.com?subject=Hello there!"
          >
            <a
              className={styles.johndoegmailcomLink}
              href="mailto:matthiascheng50@gmail.com?subject=Hello there!"
            >
              <p className={styles.johndoegmailcomP}>johndoe@gmail.com</p>
            </a>
          </a>
        </div>
        <p className={styles.loremIpsumDolor5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
        <h2 className={styles.contactText}>contact.</h2>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.project2Container}>
          <p className={styles.breifDescriptionText1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
            convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
          </p>
          <h4 className={styles.titleText}>Some Case Study</h4>
          <i className={styles.dateCreatedText1}>November 24, 2019</i>
          <img
            className={styles.image2}
            alt=""
            src="/rectangle-15@2x.png"
            onClick={onImage2Click}
          />
        </div>
        <div className={styles.project1Container}>
          <p className={styles.breifDescriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
            convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
          </p>
          <h4 className={styles.titleText}>Some Case Study</h4>
          <i className={styles.dateCreatedText}>November 24, 2019</i>
          <img
            className={styles.image1}
            alt=""
            src="/rectangle-15@2x.png"
            onClick={onImage1Click}
          />
        </div>
        <p className={styles.loremIpsumDolor4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
        <h2 className={styles.projectsText}>projects.</h2>
      </div>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutText}>about.</h2>
        <p className={styles.loremIpsumDolor3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
        <div className={styles.text1Container}>
          <p className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
          <b className={styles.text}>2014-2018</b>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-1.svg" />
        </div>
        <div className={styles.text1Container}>
          <p className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
          <b className={styles.text}>2018-2020</b>
          <img className={styles.ellipseIcon1} alt="" src="/ellipse-1.svg" />
        </div>
        <div className={styles.text3Container}>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
          <b className={styles.presentText}>2020 - Present</b>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-1.svg" />
        </div>
      </div>
      <div className={styles.navBarContainer}>
        <button className={styles.aboutButton}>about</button>
        <button className={styles.projectsButton}>projects</button>
        <button className={styles.projectsButton}>contact</button>
      </div>
      <div className={styles.iconsContainer}>
        <button
          className={styles.gitHubMark32px1Button}
          onClick={onGitHubMark32px1ButtonClick}
        />
        <button className={styles.behance21Button}>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        </button>
        <button className={styles.twitter61Button}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        </button>
      </div>
      <img className={styles.linesImage} alt="" src="/group-12@2x.png" />
      <div className={styles.mainTextContainer}>
        <p className={styles.basedInCanada}>based in Canada.</p>
        <h1 className={styles.portfolioText}>Portfolio.</h1>
        <h1 className={styles.myText}>My</h1>
        <p className={styles.helloImMatthias}>Hello, I’m Matthias,</p>
        <button className={styles.groupButton} onClick={onGroupButtonClick}>
          <div className={styles.rectangleRectangle1} />
          <div className={styles.rectangleRectangle} />
          <div className={styles.resumeText}>Resume</div>
        </button>
      </div>
      <div className={styles.matthiasText}>Matthias </div>
    </div>
  );
};
