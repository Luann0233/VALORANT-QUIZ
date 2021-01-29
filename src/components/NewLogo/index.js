import styled from 'styled-components'
import { useRouter } from 'next/router'

const QuizLogoWrapper = styled.div`
  img {
    margin: auto;
    display: block;
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    img {
      margin: 0;
    }
  }
`

export default function NewLogo(props) {
    const router = useRouter()

    const toHome = (e) => {
        e.preventDefault()
        router.push('/')
    }
    return (
        <QuizLogoWrapper {...props}>
            <a onClick={toHome}>
                <img src='https://i.imgur.com/GvABsN1.png' />
            </a>
        </QuizLogoWrapper>
    )
}