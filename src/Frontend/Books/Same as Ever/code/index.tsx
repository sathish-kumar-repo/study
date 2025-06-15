import { H1, H2, List, Para, Title } from "../../../../Backend/UI";

const Summary = () => {
  return (
    <>
      <Title>Same As Ever – Full Detailed Summary</Title>

      <Para>
        Morgan Housel’s <em>Same as Ever</em> explores timeless truths about
        human behavior. Instead of focusing on what will change, it teaches us
        the value of understanding what stays the same. This book is a roadmap
        to clearer thinking in finance, decision-making, and life.
      </Para>

      <H1>🌟 Core Premise</H1>
      <Para>
        People obsess about the future — AI, markets, tech revolutions — but
        Morgan argues the best insights come from what never changes: human
        nature. Fear, greed, envy, tribalism, storytelling — they repeat
        endlessly through time.
      </Para>

      <H1>🧠 Part 1: The Human Constant</H1>

      <H2>1. The Illusion of Control</H2>
      <Para>
        Humans want control, but randomness and chance play a huge role. Even
        with more data, predictions often fail.
      </Para>
      <List
        items={[
          "People crave certainty but overestimate their forecasting skills.",
          "Black swan events will always occur.",
          "We prepare for the past, not future surprises.",
        ]}
      />

      <H2>2. Greed and Fear</H2>
      <Para>
        Emotional extremes drive decisions. Every market cycle is powered by the
        same behaviors with different headlines.
      </Para>
      <List
        items={[
          "Greed fuels bubbles; fear causes crashes.",
          "These patterns are timeless — only the names change.",
          "People repeat mistakes because emotions override logic.",
        ]}
      />

      <H2>3. Desire for Belonging</H2>
      <Para>
        Humans are social creatures. We follow groups, sometimes at the cost of
        truth or personal judgment.
      </Para>
      <List
        items={[
          "People want to fit in more than they want to be right.",
          "Tribal loyalty can cloud decision-making.",
          "During crises, tribal thinking intensifies.",
        ]}
      />

      <H2>4. Envy Over Contentment</H2>
      <Para>
        People care more about how they compare than how much they have.
      </Para>
      <List
        items={[
          "Envy drives consumption and risk-taking.",
          "Social media amplifies this by showing curated success.",
          "People rarely feel 'rich enough' because they compare upward.",
        ]}
      />

      <H2>5. Stories Beat Statistics</H2>
      <Para>
        Humans are wired for storytelling. Narratives persuade more than facts.
      </Para>
      <List
        items={[
          "People remember stories, not numbers.",
          "Even in finance or science, good storytelling often wins.",
          "Conspiracies and false beliefs spread through compelling narratives.",
        ]}
      />

      <H1>📈 Part 2: Timeless Financial Wisdom</H1>

      <H2>6. Save Like a Pessimist, Invest Like an Optimist</H2>
      <Para>
        Smart investors prepare for the worst (short-term), but bet on progress
        (long-term).
      </Para>
      <List
        items={[
          "Saving builds a margin of safety.",
          "Investing works because of human progress.",
          "Balance both views: protect downside, chase upside.",
        ]}
      />

      <H2>7. The Seduction of Complexity</H2>
      <Para>
        We love complexity because it feels intelligent — but it often hides
        fragility.
      </Para>
      <List
        items={[
          "Simple strategies (like index investing) work best.",
          "Complex models often fail in real-world conditions.",
          "People underestimate the power of boring consistency.",
        ]}
      />

      <H2>8. Money Is a Personal Story</H2>
      <Para>
        Everyone has a different money script based on their life experience.
      </Para>
      <List
        items={[
          "Two people can see the same data and act differently.",
          "Upbringing, trauma, and values shape financial choices.",
          "Finance is emotional before it's rational.",
        ]}
      />

      <H1>⏳ Part 3: Time and Behavior</H1>

      <H2>9. Patience Is a Superpower</H2>
      <Para>
        Most people can't delay gratification — which is why compounding rewards
        the few who can.
      </Para>
      <List
        items={[
          "Compounding takes time, not brilliance.",
          "Endurance and consistency outperform skill.",
          "Few people are willing to be boring long enough.",
        ]}
      />

      <H2>10. Overreaction in the Short-Term</H2>
      <Para>
        Daily news and market moves cause panic or euphoria. Most of it won’t
        matter in a decade.
      </Para>
      <List
        items={[
          "Short-term thinking leads to poor decisions.",
          "Big headlines often fade with time.",
          "The long view always looks more rational.",
        ]}
      />

      <H2>11. Uncertainty Is Permanent</H2>
      <Para>
        Humans hate not knowing — but uncertainty is the only constant.
      </Para>
      <List
        items={[
          "Crisis and volatility are normal, not rare.",
          "No one has ever predicted the future accurately over time.",
          "Resilience beats prediction.",
        ]}
      />

      <H2>12. Survival {`>`} Optimization</H2>
      <Para>
        It’s better to be “pretty good” consistently than to be “great”
        occasionally but fragile.
      </Para>
      <List
        items={[
          "Don't blow up — stay in the game.",
          "Survivors capture compounding gains.",
          "Avoiding ruin is underrated wisdom.",
        ]}
      />

      <H1>👥 Part 4: Life Lessons Beyond Finance</H1>

      <H2>13. Kindness Pays Off</H2>
      <Para>
        People remember how you make them feel. Being decent compounds in
        career, trust, and relationships.
      </Para>
      <List
        items={[
          "Trust builds slowly and breaks quickly.",
          "Reputation is long-term leverage.",
          "Kindness is underestimated as a strategy.",
        ]}
      />

      <H2>14. The Myth of Normal</H2>
      <Para>
        There’s no universal experience. “Normal” depends on where and how you
        grow up.
      </Para>
      <List
        items={[
          "Everyone thinks their life is the baseline.",
          "Different backgrounds lead to different beliefs.",
          "Understanding this reduces judgment and increases empathy.",
        ]}
      />

      <H2>15. Everyone Is Winging It</H2>
      <Para>
        Most people are figuring things out as they go — even the successful
        ones.
      </Para>
      <List
        items={[
          "There is no master plan behind most success.",
          "Progress comes from iteration, not certainty.",
          "You don’t need all the answers to start.",
        ]}
      />

      <H1>🧭 Final Takeaway</H1>
      <Para>
        The world constantly changes. But human behavior — our fears, hopes,
        biases — stays the same. And understanding these patterns gives you a
        timeless edge in money, business, and life.
      </Para>
      <List
        items={[
          "Don’t just chase trends — study patterns.",
          "Behavior > Intelligence.",
          "Timeless truths are more powerful than predictions.",
        ]}
      />
    </>
  );
};

export default Summary;
