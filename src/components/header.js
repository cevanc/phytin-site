import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PhytinLogo from "../components/phytinLogo"
import Facebook from "../components/facebook"
import Soundcloud from "../components/soundcloud"
import Spotify from "../components/spotify"
import Apple from "../components/apple"

const Header = ({ siteTitle }) => {
  function hoverOver(event) {
    event.target.className = "animate__animated animate__fadeOut"
  }

  function hoverOff(event) {
    event.target.className = "animate__animated animate__fadeIn"
  }

  // function handleClick(event) {
  //   event.target.className = "animate__animated animate__slideOutUp"
  // }

  return (
    <header
      style={{
        borderBottomLeftRadius: "50% 20%",
        borderBottomRightRadius: "50% 20%",
        display: "grid",
        gridTemplateColumns: "2fr 15fr 2fr",
        justifyItems: "center",
        alignItems: "start",
        gridColumnGap: "2rem",
        position: "fixed",
        background: `rgb(139,0,139)`,
        border: ".5px solid black",
        padding: `0`,
        marginBottom: "0",
        width: "100%",
      }}
    >
      <div
        id="logo-holder"
        onMouseOver={hoverOver}
        onMouseOut={hoverOff}
        style={{
          alignSelf: "start",
          justifySelf: "start",

          gridColumn: "1/2",
        }}
      >
        <Link to="/">
          <PhytinLogo />
        </Link>
      </div>
      <div
        id="navbar-links"
        style={{
          gridColumn: "2 / 3",
          textAlign: "center",
          justifySelf: "stretch",     
          alignSelf: "center",
          flexShrink: "1",
        }}
      >
        {" "}
        <Link
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          id="header-link"
          to="https://phytin.bandcamp.com/"
          target="_blank"
        >
          Bandcamp
        </Link>{" "}
        <Link
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          id="header-link"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div id="link-box">
        <div
          id="link-container"
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          style={{
            gridColumn: "1/2",
            gridRow: "1/2",
          }}
        >
          <a
            href="https://www.soundcloud.com/phytin"
            id="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <Soundcloud
              style={{
                boxShadow: "5px 10px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div
          id="link-container"
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          style={{
            gridColumn: "2/3",
            gridRow: "1/2",
          }}
        >
          <a
            href="https://music.apple.com/us/artist/phyti%C5%8B/1436978382"
            id="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <Apple />
          </a>
        </div>
        <div
          id="link-container"
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          style={{
            gridColumn: "1/2",
            gridRow: "2/3",
          }}
        >
          <a
            href="https://www.facebook.com/phytinn"
            id="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </div>
        <div
          id="link-container"
          onMouseOver={hoverOver}
          onMouseOut={hoverOff}
          style={{
            gridColumn: "2/3",
            gridRow: "2/3",
          }}
        >
          <a
            href="https://open.spotify.com/artist/59Qzda0hhZqLEZqjNmEn7m  "
            id="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <Spotify />
          </a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Phytiŋ`,
}

export default Header
