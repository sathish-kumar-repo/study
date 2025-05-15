<img src={`${process.env.PUBLIC_URL}/web-images/bg.jpg`} alt="background" />

🥣 Breakfast

- Strawberry 50g
- Whey Protein 1 scoop
- Curd 100g
- Egg white 10
- Whole egg 2
- Beetroot 200g

🍎 Snack

- Ginger 10g
- orange 100g
- Apple 100g
- Carrot 100g

🍽️ Lunch

- Grapes 200g
- Egg white 15
- Chicken 150g
- Chappati 100g

🍫Snack

- Whey Protein 1 Scoop

🍽️ Dinner

- Cucumeber 350g
- Oats 50g
- Milk, 3.7 % Milk fat 150ml
- Whey Protein 1 Scoop
- Banana 50g
- Strawberry 50g
- Fresh watermelon juice 350ml

To access translations in your React components using react-i18next, you use the useTranslation hook.

✅ Step-by-Step Usage

1. Import and use the useTranslation hook:

import { useTranslation } from "react-i18next";

1. Call the hook and use the t function:

const { t } = useTranslation();

return (

  <h1>{t("coursesTitle")}</h1> // This will translate the key
);
✅ Example in your Course.tsx page
Replace hardcoded text like this:

<Helmet>
  <title>Courses - My Study Website</title>
  <meta
    name="description"
    content="Browse various courses and tutorials on different subjects."
  />
</Helmet>
With:

const { t } = useTranslation();

<Helmet>
  <title>{t("coursesTitle")}</title>
  <meta name="description" content={t("coursesDescription")} />
</Helmet>
✅ Translating Button & Placeholder

<h4>{t("filter")}</h4>

<SearchBar
placeholder={t("searchPlaceholder")}
/>

<button>{t("clearFilters")}</button>
✅ Conditional No Results

{Object.values(processedCourses).every((c) => c.length === 0) && (
<NoResultFound
searchTerm={searchQuery}
message={`${t("noResult")} "${searchQuery}"`}
/>
)}
🔄 Changing Languages (Optional)
Add a language switch somewhere in your UI:

import i18n from "i18next";

<button onClick={() => i18n.changeLanguage("en")}>English</button>
<button onClick={() => i18n.changeLanguage("ta")}>தமிழ்</button>

git count-objects -vH
git count-objects -vH | grep 'size-pack'
git gc
