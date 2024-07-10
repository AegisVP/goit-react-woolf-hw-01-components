import { Friend } from '../Friend/Friend';
import { FriendList } from './Friends.styled';

const Friends = ({ friendsList = [] }) => (
  <FriendList>
    {friendsList.map(({ id, avatar, name, isOnline }) => (
      <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </FriendList>
);

export { Friends };
