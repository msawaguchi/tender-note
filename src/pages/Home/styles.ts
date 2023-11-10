import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h2 {
    position: absolute;
    bottom: 5%;
    z-index: 8;
    font-family: 'Itim', cursive;
    color: #638458;

    &:hover {
      color: #f2efdb;
      cursor: pointer;
    }
  }

  canvas {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`

export const LetterPaper = styled.div`
  position: absolute;
  max-width: 1200px;
  width: 30rem;
  height: 40rem;
  margin: 0 auto;
  border-radius: 8px;

  /* Background lines */
  background-image: linear-gradient(#ede3ca 1.1rem, #a591b5 1.2rem);
  background-size: 100% 1.2rem;

  line-height: 1.2rem;
  padding: 0 0.5rem 0 3.5rem;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.2);

  .header {
    height: 4rem;
    background: #ede3ca;
  }

  .marge {
    border-left: 1px solid #d88;
    height: 100%;
    padding-left: 2px;

    textarea {
      position: absolute;
      margin-top: 2px;
      width: -webkit-fill-available;
      height: 100%;
      background: transparent;
      border: none;
      z-index: 2;
      resize: none;
      line-height: 1.2rem;
      font-family: 'Playpen Sans', cursive;
      color: #889f77;

      &:focus {
        outline: none;
        z-index: 0;
      }

      &:active {
        z-index: 0;
      }
    }
  }

  .tape-section {
    position: absolute;
  }

  .tape-section:first-of-type::before,
  .tape-section:last-of-type::after {
    content: '';
    width: 17vmin;
    height: 5vmin;
    position: absolute;
    background-color: #dbd8be;
    opacity: 0.5;
    border-right: 1px dotted #dbd8be;
    border-left: 1px dotted #dbd8be;
    transform: rotate(-45deg);
  }

  .tape-section:last-of-type::after {
    right: -55vmin;
    top: -5vmin;
  }

  .tape-section:first-of-type::before {
    left: -13vmin;
  }
`
