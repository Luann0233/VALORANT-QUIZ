import styled from 'styled-components'

export const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: ${({ theme }) => theme.colors.primary} solid 1px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 5px black;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-align: justify;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  text-align: center;

  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;