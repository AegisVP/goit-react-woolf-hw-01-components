import { ProfileCard, Avatar, Name, Info, StatList, StatItem, StatLabel, StatValue } from './Profile.styled';

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
      <Avatar src={avatarURL} alt="User avatar" />
      <Name>{userName}</Name>
      <Info>@{userTag}</Info>
      <Info>{location}</Info>

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
