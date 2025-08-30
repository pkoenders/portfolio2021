import React, { useEffect, useRef } from 'react'

// Helpers
import { gsap, Bounce } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Page components
// import Button from '/src/components/common/buttons/linkButton'
//import Icon from '/src/components/common/icons/material'

import styled from 'styled-components'

const IntroSection = styled.section`
  // background: rgb(7, 8, 9);
  //background: linear-gradient(180deg, rgba(7, 8, 9, 1) 0%, rgba(10, 3, 31, 1) 100%);
  padding: ${({ theme }) => theme.padding['4xl']} 0 ${({ theme }) => theme.padding['4xl']};
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['2xl']};
  z-index: 999;
  height: 100%;

  .title {
    display: flex;
    margin: auto;
    padding: 0 ${({ theme }) => theme.padding['1/2']};
    text-align: center;
    /* color: ${({ theme }) => theme.colors.pageHold[100]}; */
    color: ${({ theme }) => theme.colors.page.default};
    span {
      display: contents;
    }
  }

  .professionalSummary {
    padding: 0 ${({ theme }) => theme.padding['1/2']};
    width: 66%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    grid-row-gap: ${({ theme }) => theme.padding['1/2']};
    /* align-items: stretch; */
    overflow: hidden;
    /* color: ${({ theme }) => theme.colors.pageHold[100]}; */
    color: ${({ theme }) => theme.colors.page.default};
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      width: 100%;
      //padding: 0 ${({ theme }) => theme.padding['1/2']};
    }
    p.intro,
    li {
      color: ${({ theme }) => theme.colors.page.default};

      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
  }
  .intro {
    padding: 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    grid-row-gap: ${({ theme }) => theme.padding['4xl']};
    align-items: stretch;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.pageHold[100]};

    div {
      /* padding: ${({ theme }) => theme.padding.default}; */
      /* width: calc(50% - 1px); */
      width: 50%;
      padding: 0 ${({ theme }) => theme.padding.default};
      align-items: stretch;
      display: flex;
      flex-direction: column;
      /* grid-gap: ; */
      position: relative;

      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
        padding: 0 ${({ theme }) => theme.padding['1/2']};
      }

      span {
        display: flex;
        flex-direction: column;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        width: 100%;

        i {
          color: ${({ theme }) => theme.colors.pageHold.default};
          display: flex;
          align-self: flex-start;
          font-size: 28px;
          border-radius: 999rem;
          padding: ${({ theme }) => theme.padding['1/4']};
          /* height: auto; */
        }

        p,
        ul,
        li {
          color: ${({ theme }) => theme.colors.pageHold[100]};
          margin-bottom: 0;
          text-align: left;
        }

        ul {
          text-align: left;

          li {
            list-style-type: square;
            margin: 0 0 0px 0;
            padding-left: 8px;
          }
        }

        svg {
          width: 45%;
          height: auto;
          display: block;
          margin: 0px auto 32px auto;
        }
      }
    }

    .part1 {
      span {
        i {
          background-color: ${({ theme }) => theme.colors.primary[200]};
        }
      }
    }

    .part2 {
      span {
        i {
          background-color: ${({ theme }) => theme.colors.secondary[600]};
        }
      }
    }

    .part3 {
      span {
        i {
          background-color: ${({ theme }) => theme.colors.accent[400]};
        }
      }
    }

    .part4 {
      span {
        i {
          background-color: ${({ theme }) => theme.colors.tertiary[500]};
        }
      }
    }
  }

  .resume {
    width: 100%;
    font-size: 110%;
    display: flex;
    span {
      margin-top: 0;
      a {
        /* border: 1px solid ${({ theme }) => theme.colors.tertiary[400]} !important; */
        font-weight: 500;
        // Overide  default styles
        padding: ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding['2xl']} !important;
        border: 1px solid ${({ theme }) => theme.colors.tertiary[900]} !important;
        color: ${({ theme }) => theme.colors.pageHold.default};
        background-color: ${({ theme }) => theme.colors.tertiary[300]};
        i {
          color: ${({ theme }) => theme.colors.tertiary[600]} !important;
        }
      }
    }
  }

  svg {
    display: block;
    width: 160px;
    height: auto;
    margin: 32px auto;
    pointer-events: none;
    animation: fadein 4s;
  }
`

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const iconRefs = useRef([])
  iconRefs.current = []

  const iconRef = (item) => {
    if (item && !iconRefs.current.includes(item)) {
      iconRefs.current.push(item)
    }
  }

  useEffect(() => {
    iconRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          scale: 0.66,
          opacity: 0,
        },
        {
          opacity: 1,
          scale: 1,
          ease: Bounce.easeOut,
          duration: 1,
          stagger: 0.75,
          scrollTrigger: {
            trigger: item,
            stagger: 0.75,
            start: 'top bottom-=32px',
            // end: 'bottom bottom+=124px',
            toggleActions: 'play none none reset',
            // markers: true
          },
        }
      )

      return () => {
        iconRefs.current.kill()
      }
    })
  }, [])

  return (
    <IntroSection className="sectionIntro section-layout wide" aria-label="Homepage intro">
      {/* <h2 className="title">
        <span lang="mi">Tēnā koe</span>, welcome to my portfolio.
      </h2> */}
      <div>
        <div className="professionalSummary">
          <p className="intro">
            I’m a UX/UI Designer with over 20 years of experience creating user-centred, accessible,
            and scalable digital products. My work spans government, corporate, and non-profit
            sectors, where I specialise in building design systems, simplifying complex experiences,
            and embedding accessibility into every stage of the design process.
          </p>

          <p>
            I bring together strong UX/UI design expertise with front-end development knowledge,
            helping teams deliver solutions that are not only visually consistent but also inclusive
            and practical to implement. From leading design system adoption in large organisations
            to designing intuitive interfaces for services with diverse user needs, I focus on
            creating digital experiences that are clear, accessible, and meaningful.
          </p>

          <p>
            This portfolio highlights some of the projects where I’ve applied design thinking,
            collaboration, and accessibility-first practices to deliver outcomes that improve both
            user and organisational experiences.
          </p>
        </div>
        {/* <article className="intro">
          <div className="part1">
            <span>
              <Icon icon={'follow_the_signs'} useRef={iconRef} />
              <p>
                I’m a UI/UX designer. I originally came from a traditional graphic design background
                and transitioned into digital UI design.
              </p>
            </span>
          </div>

          <div className="part2">
            <span>
              <Icon icon={'accessibility_new'} useRef={iconRef} />
              <p>I ensure digital accessibility is baked into design.</p>
            </span>
          </div>

          <div className="part3">
            <span>
              <Icon icon={'favorite_border'} useRef={iconRef} />
              <p>
                I take pride in my craft. I collaboratively plan, design, and deliver optimised
                digital solutions with best practices, professionalism, integrity and care.
              </p>
            </span>
          </div>

          <div className="part4">
            <span>
              <Icon icon={'design_services'} useRef={iconRef} />
              <ul>
                <li>UI design & prototyping</li>
                <li>Build & manage design systems</li>
              </ul>
            </span>
          </div>
        </article> */}
      </div>
      {/* <div className="resume">
        <Button
          buttonLabel={'My resumé'}
          buttonType={'Static'}
          buttonLink={'/peter-koenders-resume.pdf'}
          // buttonStyle={'transparent'}
          // buttonIcon={'article'}
          // buttonIconAlign={'right'}
        />
      </div> */}
    </IntroSection>
  )
}

export default Intro
