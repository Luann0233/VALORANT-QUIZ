import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import NewLogo from '../src/components/NewLogo'


export default function Home() {

  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>{db.title}</title>

        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />

        <meta property="card" content="summary_large_image" />
        <meta property="title" content={db.title} />
        <meta property="url" content="https://quiz-base-f8uz8mjre.vercel.app/" />
        <meta property="description" content={db.description} />
        <meta property="image" content="https://valorantstrike.com/wp-content/uploads/2020/08/Valorant-Wallpaper-Girls-Dark-Display.jpg" />
        <meta property="image:type" content="image/jpg" />
        <meta property="image:width" content="1920" />
        <meta property="image:height" content="1080" />
      </Head>

      <QuizContainer>
        <NewLogo />

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={function (e) {
              e.preventDefault()
              router.push(`/quiz?name=${name}`)
            }}>

              {/* <input
                onChange={function (e) {
                  setName(e.target.value)
                }}
                placeholder="Diz aí seu nome pra jogar :)"
              /> */}

              <Input
                name="usuerName"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome pra jogar :)"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {` Vamos Jogar ${name}`}
              </Button>

            </form>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React estão fazendo:</p>

            <Input disabled="true" value="QUIZ 1" />
            <Input disabled="true" value="QUIZ 2" />
            <Input disabled="true" value="QUIZ 3" />

          </Widget.Content>
        </Widget>

          {/* <Footer /> */}

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Luann0233/quiz-base" />
    </QuizBackground>

  )
}
