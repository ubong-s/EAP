import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../styles/theme"
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import SectionHeader from "./SectionHeader"

const Team = ({ whiteBG }) => {
  const data = useStaticQuery(graphql`
    {
      team: allStrapiTeams(filter: {}, sort: { fields: position }, limit: 4) {
        nodes {
          strapiId
          name
          position
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, height: 600)
              }
            }
          }
          facebook
          twitter
          linkedIn
        }
      }
    }
  `)

  return (
    <TeamWrap whiteBG={whiteBG}>
      <div className="container">
        <SectionHeader
          title="Our Expert Team"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            natus blanditiis rerum similique assumenda magnam officiis
            reiciendis! Officia, aliquam consectetur!"
        />
        <TeamMembers>
          {data.team.nodes.map(item => {
            const {
              name,
              position,
              strapiId,
              image,
              facebook,
              twitter,
              linkedIn,
            } = item
            return (
              <article
                key={strapiId}
                data-sal="fade"
                data-sal-duration="2000ms"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <div className="img">
                  <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                  />
                  <div className="info">
                    <h4>{name}</h4>
                    <h5>{position}</h5>
                  </div>
                  <ul className="social-links">
                    <li>
                      <a href={facebook} target="_blank" rel="noreferrer">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href={twitter} target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href={linkedIn} target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            )
          })}
        </TeamMembers>
      </div>
    </TeamWrap>
  )
}

export default Team

const TeamWrap = styled.section`
  background-color: ${({ whiteBG }) => (whiteBG ? `${theme.themeWhite}` : "")};
`
const TeamMembers = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
  text-align: left;

  article {
    background: ${theme.themeWhite};
    padding: 1.25rem;
    box-shadow: ${theme.shadow};

    .img {
      position: relative;

      cursor: pointer;
      z-index: 1;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0),
          rgba(0, 0, 0, 1)
        );
        transition: ${theme.transitionEase};
        z-index: 2;
      }

      .info {
        position: absolute;
        left: 1.25rem;
        right: 1.25rem;
        bottom: 1rem;
        text-align: center;
        z-index: 3;
        transition: ${theme.transitionEase1};

        h4 {
          color: ${theme.themeWhite};
          margin-bottom: 0.25rem;
          font-size: 1.25rem;
        }

        h5 {
          color: ${theme.accentColor};
          margin-bottom: 0;
          font-size: 1rem;
        }
      }

      .social-links {
        position: absolute;
        left: 1.25rem;
        top: 1rem;
        z-index: 0;
        transform: translateX(-100px);
        opacity: 0;
        transition: ${theme.transitionEase};

        li {
          margin-bottom: 0.5rem;

          a {
            font-size: 1.25rem;
            color: ${theme.themeWhite};
            transition: ${theme.transitionEase};

            &:hover {
              color: ${theme.accentColor};
            }
          }
        }
      }

      &:hover {
        &::after {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8),
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.8)
          );
        }

        .social-links {
          opacity: 1;
          transform: translateX(0);
          z-index: 3;
        }

        .info {
          bottom: 2rem;
          transition: ${theme.transitionEase1};
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
