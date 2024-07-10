// import css from './Friends.module.css';
import { FriendCard, Status, Avatar, Name } from './Friend.styled';

const Friend = ({ avatar, name, isOnline }) => (
  <FriendCard>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendCard>
);

export { Friend };
