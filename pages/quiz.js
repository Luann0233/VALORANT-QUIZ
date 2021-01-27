import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'

export default function QuizPage () {
    return (
        <QuizBackground backgroundImage={db.bg}>
            
        </QuizBackground>
    )
}