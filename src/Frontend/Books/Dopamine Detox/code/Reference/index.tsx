import { domain } from "../../..";
import {
  H1,
  H3,
  List,
  Media,
  Para,
  Quote,
  Space,
  Title,
} from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <Title>Dopamine Detox Challenge</Title>

      <H1>Step 1: Identify Your Biggest Distractions</H1>
      <Para>
        Begin by recognizing the top distractions that consume your time and
        attention.
      </Para>
      <H3>Examples:</H3>
      <List
        items={[
          "Binge-watching web series",
          "Anime marathons",
          "Endless scrolling on social media",
          "Excessive chatting with friends",
          "Pornography consumption",
        ]}
      />
      <Quote>
        Take a diary and list all your distractions. Estimate how much time you
        spend on each one daily.
      </Quote>

      <H1>Step 2: Create Friction for Every Distraction</H1>
      <Para>
        Ask yourself: “What can I do instead of giving in to this distraction?”
      </Para>
      <Para>
        Introduce deliberate obstacles that make engaging with distractions more
        difficult.
      </Para>
      <H3>Examples:</H3>
      <List
        items={[
          "Phone – Turn off notifications, use airplane mode, or switch it off completely",
          "Social Media – Install extensions like News Feed Eradicator on Chrome",
          "Remove access or hide apps from the home screen",
          "Avoid unnecessary chatting during focus hours",
          "Block adult content using parental control tools",
        ]}
      />

      <H1>Step 3: Embrace Boredom and Reset</H1>
      <Para>Start your most productive task immediately after waking up.</Para>
      <Para>
        Take a full 2–3 day break from your main distractions. Embrace the
        feeling of boredom—it’s part of the reset.
      </Para>
      <Para>
        Avoid easy dopamine triggers such as checking social media, stock
        portfolios, or messages. These micro-hits can quickly become unconscious
        habits.
      </Para>
      <Quote>
        Simple actions repeated daily become your routine. Guard your attention
        carefully.
      </Quote>

      <H1>How Your Brain Tricks You</H1>
      <Para>
        Your brain convinces you that returning to work is easy—but it’s often a
        trap to relapse into distractions.
      </Para>
      <Media
        sequence={{
          start: 1,
          end: 2,
          base: "Dopamine Detox/",
          ext: "png",
        }}
        customDomain={domain}
      />

      <H1>The Illusion of Missing Out</H1>
      <Para>
        When detoxing, your mind might make you feel like you’re missing out on
        something important.
      </Para>
      <Media
        sequence={{
          start: 3,
          end: 4,
          base: "Dopamine Detox/",
          ext: "png",
        }}
        customDomain={domain}
      />
      <Quote>Be alert. Cravings are just mental noise—let them pass.</Quote>

      <H1>Plan Your Day with Intention</H1>
      <Media
        sequence={{
          start: 5,
          end: 6,
          base: "Dopamine Detox/",
          ext: "png",
        }}
        customDomain={domain}
      />
      <Quote>
        “Change is hard at first, messy in the middle, and gorgeous at the end.”
      </Quote>

      <Media
        sequence={{
          start: 7,
          end: 8,
          base: "Dopamine Detox/",
          ext: "png",
        }}
        customDomain={domain}
      />

      <H1>The World is Not on Your Side</H1>
      <Para>
        Modern digital systems are designed to hijack your attention and profit
        from your focus.
      </Para>
      <Media
        sequence={{
          start: 9,
          end: 11,
          base: "Dopamine Detox/",
          ext: "png",
        }}
        customDomain={domain}
      />
      <Quote>
        Your attention is the currency of the internet. Spend it wisely.
      </Quote>
      <Space sT={20} />
      <Para link="https://youtu.be/KLo4oV9r5dY?si=2Y4b8RKDB7i7yR36" />
    </>
  );
};

export default Reference;
