// import css from './Stats.module.css';
import { Stats, StatsTitle, StatsList, StatItem, StatLabel, StatValue } from './Stats.styled';

const Statistics = ({ title, statsList = [] }) => (
  <Stats>
    {title && <StatsTitle>{title}</StatsTitle>}

    <StatsList>
      {statsList.map(({ id, label, percentage }) => (
        <Stat key={id} label={label} percentage={percentage} />
      ))}
    </StatsList>
  </Stats>
);

const Stat = ({ id, label, percentage }) => (
  <StatItem key={id}>
    <StatLabel>{label}</StatLabel>
    <StatValue>{percentage}%</StatValue>
  </StatItem>
);

export { Statistics };
