# Meal Roulette App Mobile Pagination - Level 2

Your task is to build a meal roulette app that integrates with the Meal Roulette API and presents the retrieved data. Please agree with your hiring team regarding the tech stack choice.

The app should have a meal selection view and a meal details view.

Tapping on the refresh button should present a selection of the next 4 meals.

Tapping on a meal on the list should open the details view for that meal. 

There should also be a way to navigate back to the list view from the details view.

When finished developing make sure to add a screen recording + executable (`.apk` or `.app` depending on the platform choice) to the repo. 

## Mockup

![meal-roulette](https://user-images.githubusercontent.com/1162212/114553140-9fb4fa80-9c65-11eb-91ae-ce30dc3522b7.png)

## API
Make sure to check with your hiring team whether you need to integrate with the GraphQL API or the REST API.

### REST 

<details>
 	<summary>Click to expand the request examples.</summary>

#### Get all meals

https://playground.devskills.co/api/rest/meal-roulette-app/meals

#### Get 4 meals starting from index 4

https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/4

#### Get the meal with id 4

https://playground.devskills.co/api/rest/meal-roulette-app/meals/4

</details>

### GraphQL

 <details>
 	<summary>Click to expand the request examples.</summary>

 	Endpoint: https://playground.devskills.co/v1/graphql

#### Get all meals

```
query GetAllMeals {
  meal_roulette_app_meals {
    id
    title
    picture
    description
    ingredients
  }
}
```

#### Get 4 meals starting from index 4

```
query MealsWithOffset {
  meal_roulette_app_meals_aggregate(limit: 4, offset: 4) {
    nodes {
      id
      title
      picture
      description
      ingredients
    }
  }
}
```

#### Get the meal with id 5

```
query SingleMeal {
  meal_roulette_app_meals_by_pk(id: 5) {
    id
    title
    picture
    description
    ingredients
  }
}
```

### GraphiQL Sandbox

[Here](https://meal-roulette-app.web.app/) you can play with the Meal Roulette GraphQL API. Start by copy-pasting an example from above.

</details>

## Before you get started

### If you run into a problem

Need help? Head over to [our community on GitHub](https://github.com/orgs/DevSkillsHQ/discussions/categories/help) to get assistance.

### Import boilerplate

[Import a project boilerplate](https://docs.devskills.co/collections/85-the-interview-process/articles/466-importing-boilerplate-for-mobile-challenges) for your selected tech stack.

## What we expect from you

1. Ensure that the app remains responsive (i.e. doesn't block the UI) while the data is being loaded.
2. Avoid duplication and extract re-usable components where it makes sense. We want to see your approach to creating a codebase that is easy to maintain.
3. Unit test one component of choice. There is no need to test the whole app, as we only want to understand what you take into consideration when writing unit tests.
4. Add instructions describing how to run your app locally.
5. Make a screen recording of your working app and add the recorded screencast to the repo ([see how](https://devskills.notion.site/Instructions-screencast-5fe8be16a4124da7a2809b74ab7162e5)).
6. Upload a compiled version of the app (debug mode) to the repo. For iOS this needs to be a `.app` file that is build for the simulator and for Android it needs to be an `apk` debug file. For projects created in Flutter or React Native you can choose which platform is most convenient for you. [Click here](https://devskills.notion.site/Building-the-app-0ff6722aa7fc46f9a8121215809ed546) for more detailed instructions.
7. Push your code to the `implementation` branch. We encourage you to commit and push your changes regularly as it's a way for us to understand your thinking process.
8. Create a new pull request, but please **do not merge it**.
9. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)). In particular, document how you've made your app responsive.
10. Answer the questions you get on your Pull Request.

## Time estimate

About 2-3 hours depending on your experience level + the time to set up the project/environment (go with one of the provided boilerplates to move faster).

Also, there is no countdown. The estimate is for you to plan your time.

---

Authored by [Rémon Helmond](https://devskills.co/authors/remon-helmond) via [DevSkills](https://devskills.co).

How was your experience? **[Don't hesitate to give us a shout](https://github.com/orgs/DevSkillsHQ/discussions/categories/feedback)**.
