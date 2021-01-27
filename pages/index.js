import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>VALORANT Quiz</title>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The QUIZ — VALORANT QUIZ" />
        <meta property="twitter:url" content="https://quiz-base-f8uz8mjre.vercel.app/" />
        <meta property="twitter:description" content="Teste os seus conhecimentos sobre o universo do VALORANT! Vamos ver o quanto você sabe sobre esse jogo. Divirta-se!" />
        <meta property="twitter:image" content="blob:https://vercel.com/f7edc526-c5d6-4e2c-9117-b9d430d3c52e" />
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Riot Games</h1>
          </Widget.Header>
          <Widget.Content>
            <h3>Teste os seus conhecimentos sobre o universo do VALORANT!</h3>

            <form onSubmit={function (e) {
              e.preventDefault()
              router.push(`/quiz?name=${name}`)
            }}>

              <input
                onChange={function (e) {
                  setName(e.target.value)
                }}
                placeholder="Diz aí seu nome pra jogar :)"
              />

              <button type="submit" disabled={name.length === 0}>
                JOGAR {name}
              </button>


            </form>

          </Widget.Content>
        </Widget>


        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Veja alguns quizes, que a galera fez...</p>
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Luann0233/quiz-base" />
    </QuizBackground>

  )
}
