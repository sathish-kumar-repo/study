import {
  Title,
  H1,
  Para,
  Quote,
  H3,
  List,
  Table,
} from "../../../../Backend/UI";

const Summary = () => {
  return (
    <>
      <Title>Rich Dad Poor Dad: Complete Book Summary</Title>
      <H1>Introduction</H1>
      <Para>
        "Rich Dad Poor Dad" is not just a personal finance book; it's a
        mindset-shifting guide that compares two different approaches to money.
        One dad (Poor Dad) is Kiyosaki’s biological father, a well-educated man
        who believes in working for money. The other (Rich Dad) is his friend’s
        father, a wealthy entrepreneur who teaches the importance of financial
        education and making money work for you.
      </Para>
      <Quote>
        "The poor and the middle-class work for money. The rich have money work
        for them." – Robert Kiyosaki
      </Quote>
      <H1>Lesson 1: The Rich Don’t Work for Money</H1>
      <Para>
        Poor Dad believed in getting a secure job with benefits. Rich Dad taught
        that working just for a paycheck limits your potential. Instead, focus
        on learning and acquiring assets that generate income, like investments,
        real estate, or businesses.
      </Para>
      <List
        items={[
          "Don’t chase jobs just for money",
          "Use your job to learn skills",
          "Develop financial intelligence",
        ]}
      />
      <H1>Lesson 2: Why Teach Financial Literacy?</H1>
      <Para>
        Understanding money is more important than earning a lot. Most people
        are financially illiterate and spend all their income. The rich focus on
        building and keeping assets.
      </Para>
      <H3>Assets vs. Liabilities</H3>
      <List
        items={[
          "Assets: Things that put money in your pocket (e.g., stocks, real estate)",
          "Liabilities: Things that take money out (e.g., loans, car EMI)",
        ]}
      />
      <Para>
        Poor people acquire liabilities thinking they are assets (like buying a
        big house). Rich people invest in assets first.
      </Para>
      <H1>Lesson 3: Mind Your Own Business</H1>
      <Para>
        Don’t confuse your profession with your business. Your job is your
        profession. Your business is your investments or income-generating
        assets. Build a portfolio that earns income regardless of your job.
      </Para>
      <List
        items={[
          "Keep your day job, but start investing early",
          "Track your net worth and asset column",
          "Start small—books, courses, side hustles",
        ]}
      />
      <H1>Lesson 4: The History of Taxes and the Power of Corporations</H1>
      <Para>
        The rich use corporations to legally protect and reduce taxes.
        Corporations earn, spend, and pay taxes last. Individuals earn, get
        taxed, and then spend. Learn the rules of money to use them to your
        advantage.
      </Para>
      <List
        items={[
          "Understand tax laws and business structures",
          "Use legal entities to grow wealth",
          "Learn how to deduct expenses smartly",
        ]}
      />
      <H1>Lesson 5: The Rich Invent Money</H1>
      <Para>
        Opportunities are everywhere, but only the financially educated can see
        and act on them. Most people wait for a ‘safe’ path. The rich create
        money through investments, entrepreneurship, and risk management.
      </Para>
      <List
        items={[
          "Build your confidence through knowledge",
          "Don’t fear losing—learn from mistakes",
          "Invest time learning about investing",
        ]}
      />
      <H1>Lesson 6: Work to Learn—Don’t Work for Money</H1>
      <Para>
        Focus on learning skills, not just earning. Sales, marketing,
        communication, investing, and management are key areas. A diverse
        skillset is more valuable than a single job title.
      </Para>
      <List
        items={[
          "Work in different industries to learn different skills",
          "Learn sales and negotiation",
          "Public speaking and leadership improve financial success",
        ]}
      />
      <H1>Overcoming Obstacles</H1>
      <Para> There are 5 main reasons people struggle financially: </Para>
      <List
        items={[
          "Fear – of losing money",
          "Cynicism – listening to others’ doubts",
          "Laziness – hiding behind being busy",
          "Bad habits – like spending before saving",
          "Arrogance – thinking you already know",
        ]}
      />
      <Quote>
        “The primary difference between a rich person and a poor person is how
        they manage fear.”
      </Quote>
      <H1>10 Steps to Awaken Your Financial Genius</H1>
      <Para>These are Rich Dad's action steps:</Para>
      <List
        type="ordered"
        items={[
          "Have a strong reason for financial freedom",
          "Feed your mind with financial education",
          "Choose your friends wisely (influence matters)",
          "Master one formula, then learn new ones",
          "Pay yourself first (invest before spending)",
          "Pay your brokers/investment mentors well",
          "Be an ‘Indian giver’ – expect returns",
          "Use assets to buy luxuries",
          "Choose heroes to emulate",
          "Teach and you shall receive more",
        ]}
      />
      <H1>Final Thoughts</H1>
      <Para>
        The central idea of "Rich Dad Poor Dad" is **mindset**—rich people think
        differently. They learn, grow, take calculated risks, and build assets.
        Education and action are the real keys to becoming financially free.
      </Para>
      <Quote>
        “You’re only poor if you give up. The most important thing is that you
        did something.”
      </Quote>
      <H1>Rich Dad's Philosophy in a Nutshell</H1>
      <Table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Poor Dad</th>
            <th>Rich Dad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mindset</td>
            <td>Job security</td>
            <td>Financial independence</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>Academic</td>
            <td>Financial</td>
          </tr>
          <tr>
            <td>Money</td>
            <td>Earn to spend</td>
            <td>Earn to invest</td>
          </tr>
          <tr>
            <td>Assets</td>
            <td>Don’t know/don’t care</td>
            <td>Build constantly</td>
          </tr>
          <tr>
            <td>Risk</td>
            <td>Avoid</td>
            <td>Learn and manage</td>
          </tr>
          <tr>
            <td>Income</td>
            <td>Work for money</td>
            <td>Money works for them</td>
          </tr>
        </tbody>
      </Table>

      <Para>
        This book is not about becoming rich overnight. It’s about building a
        solid foundation of **financial knowledge** and **taking
        responsibility** for your financial future. Whether you're a student,
        employee, or entrepreneur, this book can transform how you think about
        work, money, and success.
      </Para>
    </>
  );
};

export default Summary;
