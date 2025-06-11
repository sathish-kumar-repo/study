import { List, Media, Space, Title } from "../../../../../Backend/UI";

const HealthRules15ToChangeYourLife = () => {
  return (
    <>
      <Title>15 Health Rules to Change your Life</Title>
      <Media src="https://youtu.be/RIBfFFG9bsU?si=OpHpx_xFjcQ-zxSu" />
      <Space sT={20} />
      <List type="ordered" items={healthyHabits} />
    </>
  );
};

export default HealthRules15ToChangeYourLife;

const healthyHabits = [
  "Try to drink your food (Chew the food completely and then swallow it)",
  "Eat only 80% of your capacity (Don't fill your stomach fully with food, allow some space for churning the food)",
  "Eat only when you are hungry",
  "Drink a minimum of 3L of water per day",
  "Limit eating whatever was not available (Don't eat packed food items, eat natural home cooked food)",
  "Move after every 1hr of idle time",
  "Stretch everyday",
  "Never go more than 3 days without exercising (Never take more number of days to rest after an intense workout)",
  "Have a same wake up and sleeping time",
  "Do nothing to calm your mind (meditate 10 min)",
  "Don't drink lots of water immediately after you eat (30 min interval)",
  "Breathe only through your nose (To prevent health issues, to maintain facial structures, to improve sleeping quality)",
  "Practice any type of fasting (full-time fasting or liquid fasting or intermittent fasting)",
  "Be in calm places as much as possible",
  "Get some sunlight exposure everyday (To relieve from depressed mood, get some sunlight exposure for 10 mins in early morning and we can get vitamin D also)",
];
