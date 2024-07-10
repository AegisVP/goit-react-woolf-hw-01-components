import { ProfileCard, Avatar, Name, Info, StatList, StatItem, StatLabel, StatValue } from './Profile.styled';
import { Box } from '../Common/Box';

export const Profile = ({ avatarURL = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', userName, userTag, location, followers = '-', views = '-', likes = '-' }) => {
  const stats = [
    {
      label: 'Followers',
      value: followers,
    },
    {
      label: 'Views',
      value: views,
    },
    {
      label: 'Likes',
      value: likes,
    },
  ];

  return (
    <ProfileCard>
      <Box padding="10px" background-color="ffffff">
        <Avatar src={avatarURL} alt="User avatar" />
        <Name>{userName}</Name>
        <Info>{userTag}</Info>
        <Info>{location}</Info>
      </Box>

      <StatList>{stats.map(sMap)}</StatList>
    </ProfileCard>
  );
};

function sMap(stat) {
  return (
    <StatItem key={stat.label}>
      <StatLabel>{stat.label}</StatLabel>
      <StatValue>{stat.value}</StatValue>
    </StatItem>
  );
}
