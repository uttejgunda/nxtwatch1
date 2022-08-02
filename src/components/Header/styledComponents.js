import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const HeaderLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderLargeIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImageIcon = styled.img`
  width: 30px;
`

export const LogoutButton = styled.button`
  border: 1px solid #3b82f6;
  border-radius: 2px;
  color: #3b82f6;
  font-family: 'roboto';
  font-size: 14px;
  background-color: transparent;
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`