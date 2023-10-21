import {
  Points,
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import article from 'data/article.json';
import data from 'data/data.json';
import forbes from 'data/forbes.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard {...article} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList forbes={forbes} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory transactions={transactions} />

        <Heading
          marginTop="50px"
          marginBottom="50px"
          textAlign="center"
          title="Points"
        >
          Task 5
        </Heading>
        <Points />
      </Container>
    </Section>
  );
};
