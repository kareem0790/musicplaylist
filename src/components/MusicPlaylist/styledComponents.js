import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #152850;
`
export const HeadingContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 50vh;
  background-size: cover;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  justify-content: flex-end;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  margin: 0px;
  font-size: 34px;
  font-weight: 600;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  padding: 0px;
  font-size: 20px;
`
export const BottomContainer = styled.div`
  background-color: #152850;
  padding: 40px;
`
export const SongsListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SongsPlaylistHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  padding-right: 10px;
  border: 1px solid #ffffff;
  border-radius: 8px;
`
export const Input = styled.input`
  height: 40px;
  border: none;
  outline: none;
  padding-left: 10px;
  background: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  color: #cbd5e1;
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
export const NoSongsFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundHeading = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`
