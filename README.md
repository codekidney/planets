# List of Planets

Write an application that presents a list of planets. Data should be requested from an external server. Use this service - https://swapi.co/api/planets/. You may choose in what way you wish to present the list, as long as it is pleasing to the user’s eye.

The application should have a search bar located at the top of the list. A user should be able to type a string phrase into the search input and the planet list should be filtered by their names.

The list presented should also contain pagination with an option to navigate to different
pages in addition to another option in order to select the page size (possible values should be 5, 10, 25, 100).

A user should also have an option to view the details of their selected planet. Clicking on a planet should navigate the user to a page where the details of the planet are presented. At the top of that page should be a ‘back’ button that navigates back to the list. Navigation should be possible by changing only the URL.

Prepare your own design for the application, not forgetting to make it as user friendly as
possible.

In case of problems with availability of API, prepare a JSON file populated with mock/dummy
data (architecture has to be written to easy switch to API)

## Technical requirements:

1. HTML5, CSS (SASS or LESS)
2. Latest Angular & Typescript.
3. You may use any angular library like material, ngrx, rxjs
4. Npm, yarn
5. Webpack / Bazel / Rollup / SystemJs for building application
6. Application should run

## Verification criteria:

* HTML/CSS code quality
* Typescript & Angular - code quality
* Validity and esthetic aspect of requesting/querying the data.
* Performance (initial load time, number of requests, caching)
* Architecture design
* Use of API capabilities