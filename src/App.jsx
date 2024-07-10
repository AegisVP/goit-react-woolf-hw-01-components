import { Section } from './components/Section/Section';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Stats/Stats';
import { Friends } from './components/Friends/Friends';
import { Transactions } from './components/Transactions/Transactions';
// import { Box } from './components/Box';

import userProfile from './data/user.json';
import statsData from './data/data.json';
import friendsList from './data/friends.json';
import transactionHistory from './data/transactions.json';

function App() {
  return (
    <>
      <Section title="User profile">
        <Profile
          avatarURL={userProfile.avatar}
          userName={userProfile.username}
          userTag={userProfile.tag}
          location={userProfile.location}
          followers={userProfile.stats.followers}
          views={userProfile.stats.views}
          likes={userProfile.stats.likes}
        />
      </Section>

      <Section title="Statistics">
        <Statistics statsList={statsData} />
      </Section>

      <Section title="Friends">
        <Friends friendsList={friendsList} />
      </Section>

      <Section title="Transactions">
        <Transactions transactionHistory={transactionHistory} />
      </Section>
    </>
  );
}

export { App };
