import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  border-radius: 0 10px 10px 0;
  background: #373737;
  height: 80%;
  padding: 25px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 100px;
    /* line-height: 28px;
    font-style: normal; */
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin-top: 28px;
  margin-bottom: 3px;
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  width: 391.416px;
  height: 38.319px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SingInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMensage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  margin-top: 2px;
`
