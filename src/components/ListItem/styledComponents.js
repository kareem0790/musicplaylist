import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  height: 70px;
  width: 100px;
  margin-right: 20px;
`
export const SongNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const SongName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 5px;
  color: #ffffff;
`
export const Genre = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  color: #3b82f6;
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  margin-right: 15px;
`
export const DeleteButton = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
