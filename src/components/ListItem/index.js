import {AiOutlineDelete} from 'react-icons/ai'

import {
  List,
  ImageContainer,
  Image,
  SongNameContainer,
  SongName,
  Genre,
  DurationContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const ListItem = props => {
  const {playDetails, onDeletePlaylist} = props
  const {id, imageUrl, name, genre, duration} = playDetails

  const onDelete = () => {
    onDeletePlaylist(id)
  }
  return (
    <List>
      <ImageContainer>
        <Image src={imageUrl} alt="track" />
        <SongNameContainer>
          <SongName>{name}</SongName>
          <Genre>{genre}</Genre>
        </SongNameContainer>
      </ImageContainer>
      <DurationContainer>
        <Duration>{duration}</Duration>
        <DeleteButton onClick={onDelete} type="button" data-testid="delete">
          <AiOutlineDelete size={20} color="#ffffff" />
        </DeleteButton>
      </DurationContainer>
    </List>
  )
}

export default ListItem
