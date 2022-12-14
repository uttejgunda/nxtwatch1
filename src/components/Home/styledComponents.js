import styled from 'styled-components'

export const HomeResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: fit-content;
  width: 100%;
`
export const HomeWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const LogoAndCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const BannerLogo = styled.img`
  width: 200px;
`
export const BannerHeader = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 400;
  width: 65%;
  align-self: flex-start;
  margin-top: 20px;
`

export const BannerButton = styled.button`
  border: 1px solid #000000;
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 400;
  background-color: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  align-self: flex-start;
  margin-top: 30px;
`
export const CloseButton = styled.button`
  font-size: 24px;
  align-self: flex-start;
  background-color: transparent;
  outline: none;
  border: none;
`
export const HomePageContainer = styled.div`
  background-color: ${props => props.bgcolor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  border-style: none;
`
export const SearchBox = styled.input`
  padding: 8px;
  font-family: 'roboto';
  font-size: 18px;
  border: 1px solid #7e858e;
  outline: none;
  max-width: 600px;
  width: 80%;
  background-color: ${props => props.bgcolor};
`

export const SearchButton = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 35px;
  padding-right: 35px;
  font-size: 18px;
  background-color: ${props => props.bgcolor};
  border: 1px solid #7e858e;
  outline: none;
`

export const HomeVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeVideosGroup = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 30%;
`
export const NoVideosHeader = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
`
export const NoVideosSubtitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
`
export const RetryButton = styled.button`
  border-radius: 10px;
  background-color: #4f46e5;
  border: none;
  outline: none;
  font-family: 'roboto';
  font-size: 18px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  color: #ffffff;
`
export const FailureViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
