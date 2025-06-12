import { H1, HL, List, Para, Quote, Title } from "../../../../../Backend/UI";

const Summary = () => {
  return (
    <>
      <Title>Dopamine Detox: A Short Guide to Breaking Bad Habits</Title>
      <Para>
        This book introduces a powerful yet simple concept—
        <HL>Dopamine Detox</HL>—which helps you regain control over your mind,
        break free from addictive behaviors, and focus on meaningful goals. It's
        not about eliminating dopamine but rather{" "}
        <HL>reducing overstimulation</HL> that keeps you distracted, lazy, and
        dependent on short-term pleasure.{" "}
      </Para>
      <H1>What is Dopamine?</H1>
      <Para>
        Dopamine is a neurotransmitter—your brain’s{" "}
        <HL>“motivation molecule.”</HL> It rewards you with pleasure and
        motivates you to repeat behaviors. But in today’s world, we are{" "}
        <HL>overstimulated</HL>: social media, junk food, porn, video games,
        etc., all give us quick dopamine hits with little effort.{" "}
      </Para>
      <Quote>
        “The more you stimulate your brain with dopamine, the more it craves
        short-term pleasure and resists long-term growth.”
      </Quote>

      <H1>The Problem: Dopamine Overload</H1>
      <Para>
        When your brain constantly chases easy dopamine sources, it becomes{" "}
        <HL>numb to natural rewards</HL> like deep work, meaningful
        conversations, or physical activity. This creates a{" "}
        <HL>cycle of distraction and procrastination.</HL>{" "}
      </Para>
      <H1>Symptoms of Dopamine Addiction</H1>
      <List
        items={[
          <>
            <HL>Constant urge</HL> to check your phone or social media
          </>,
          <>
            <HL>Procrastination</HL> and lack of motivation
          </>,
          <>Difficulty focusing or completing tasks</>,
          <>
            Feeling <HL>tired or bored</HL> without entertainment
          </>,
          <>Compulsive behaviors (e.g., binge eating, porn)</>,
        ]}
      />

      <H1>The Solution: Dopamine Detox</H1>
      <Para>
        <HL>Dopamine detox</HL> is a temporary break from high-stimulation
        activities to help <HL>reset your brain’s reward system.</HL> The goal
        is to reduce reliance on instant gratification and retrain your brain to
        enjoy slow, meaningful work.{" "}
      </Para>
      <H1>Steps to Do a Dopamine Detox</H1>
      <List
        items={[
          <>
            <HL>Pick a day</HL> (start with 1–4 hours or a full day)
          </>,
          <>
            Avoid all <HL>high-dopamine activities</HL>: phone, internet, sugar,
            junk food, games, porn, etc.
          </>,
          <>
            Do <HL>boring but healthy</HL> things: walk, journal, meditate,
            clean your room, sit in silence
          </>,
          <>
            Reflect on your <HL>thoughts and urges</HL>
          </>,
          <>
            Repeat regularly to <HL>train your mind</HL>
          </>,
        ]}
      />

      <H1>Benefits of Dopamine Detox</H1>
      <List
        items={[
          <>
            <HL>Improved focus</HL> and mental clarity
          </>,
          <>
            Increased <HL>willpower and discipline</HL>
          </>,
          <>
            Reduced <HL>anxiety and stress</HL>
          </>,
          <>
            More <HL>motivation</HL> to do hard things
          </>,
          <>
            Better <HL>awareness of harmful habits</HL>
          </>,
        ]}
      />

      <H1>Final Message</H1>
      <Para>
        <HL>Dopamine Detox</HL> is not about suffering—it's about{" "}
        <HL>resetting your brain</HL> so you can find joy in meaningful work and
        long-term goals. By practicing this regularly, you’ll{" "}
        <HL>regain control of your habits</HL>, boost your productivity, and
        feel more in tune with life.{" "}
      </Para>
      <Quote>“You don’t need more motivation—you need less distraction.”</Quote>
    </>
  );
};

export default Summary;
