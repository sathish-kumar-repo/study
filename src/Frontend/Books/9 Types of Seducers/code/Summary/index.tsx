import { domain } from "../../..";
import {
  H1,
  Media,
  Para,
  Quote,
  Space,
  Title,
} from "../../../../../Backend/UI";

const Summary = () => {
  return (
    <>
      <Title>The 9 Types of Seducers – The Art of Seduction Summary</Title>

      <H1>1. The Siren – Uses beauty and voice to attract</H1>
      <Para>
        A Siren is seductive because of physical beauty, charm, and a calm,
        soothing voice. They make others forget their stress and get pulled in
        by appearance and presence.
      </Para>
      <Quote>Example: Cleopatra, Marilyn Monroe</Quote>

      <H1>2. The Rake – Full of passion and desire</H1>
      <Para>
        The Rake is always obsessed with the person they want. They flatter,
        chase, and show strong desire, making others feel very wanted.
      </Para>
      <Quote>Example: Casanova</Quote>

      <H1>3. The Ideal Lover – Becomes what the other person dreams of</H1>
      <Para>
        They find out what others are missing emotionally (like adventure,
        comfort, or attention) and become that. They fulfill fantasies.
      </Para>
      <Quote>Example: Madame de Pompadour</Quote>

      <H1>4. The Dandy – Free, different, mysterious</H1>
      <Para>
        Dandies are stylish, unique, and a mix of masculine/feminine energy.
        They don’t follow rules, and that makes them attractive.
      </Para>
      <Quote>Example: Oscar Wilde, David Bowie</Quote>

      <H1>5. The Natural – Childlike and fun</H1>
      <Para>
        They are playful, innocent, and make people feel relaxed. Their charm is
        in being open, honest, and joyful like a child.
      </Para>
      <Quote>Example: Charlie Chaplin</Quote>

      <H1>6. The Coquette – Hot and cold</H1>
      <Para>
        They give you attention, then pull back. This creates suspense and keeps
        you chasing. Their power is in making you wait and wonder.
      </Para>
      <Quote>Example: Josephine Bonaparte</Quote>

      <H1>7. The Charmer – Friendly and smooth</H1>
      <Para>
        Charmers make you feel good about yourself. They avoid fights, speak
        nicely, and always try to make others comfortable and happy.
      </Para>
      <Quote>Example: Bill Clinton</Quote>

      <H1>8. The Charismatic – Confident and magnetic</H1>
      <Para>
        They have strong beliefs and energy. People admire them, follow them,
        and feel inspired. Their confidence makes them powerful.
      </Para>
      <Quote>Example: Oprah Winfrey, JFK</Quote>

      <H1>9. The Star – Shiny, glamorous, like a celebrity</H1>
      <Para>
        They get attention by being stylish, mysterious, and dramatic. People
        watch them like a movie — always interesting.
      </Para>
      <Quote>Example: Elvis Presley, Madonna</Quote>
      <Space sT={20} />
      <Media src="9 Types of Seducers/main/img.png" customDomain={domain} />
    </>
  );
};

export default Summary;
