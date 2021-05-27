[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Pulls][pulls-shield]][pulls-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://user-images.githubusercontent.com/41434778/117974531-53c5a600-b336-11eb-8e7c-a9e15e41783f.png" alt="Logo" height="250">
  </a>

  <h1 style="color:#CDCDCD" align="center"><b>Saikai</b></h1>

  <p align="center">
    Manage Your Way To Work!
    <br />
    <a href="https://github.com/Saikai-oyo/Saikai/blob/dev/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://saikai.me">View Website</a>
    ·
    <a href="https://github.com/Saikai-oyo/Saikai/issues">Report Bug</a>
    ·
    <a href="mailto:contactus@saikai.me">Contact Us</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Dashboard][product-screenshot]](https://user-images.githubusercontent.com/41434778/118405125-e344bf00-b67e-11eb-9f7e-9f64ef50c67c.png)

400 job applications ➡ 100 interviews ➡ 10 home tasks ➡ 1 contract.

Pretty simple, right? Until you need to keep track of your job search!
And that's where <b>Saikai</b> comes in.

<b>Saikai</b> is a web platform, where job seekers can keep track of their job applications and organize their job search.

In <b>Saikai</b>, you can log any detail regarding the job applications and quickly get a clear vision of how your job search is going.

<b>Saikai</b> helps you to manage all the information you need in order to be right on ready once you get a call back from your dream company. Here you can organize all the position details including position description, status, applied date and many more!

### Built With

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Styled-Components](https://styled-components.com/)
- [Github-Pages](https://pages.github.com/)
- [Figma](https://www.figma.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Install Node.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Firebase](https://firebase.google.com) console.
2. Clone the repo
   ```sh
   git clone https://github.com/Saikai-oyo/Saikai.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env.local` file and enter your API in (you will get 7 keys)
   ```JS
   REACT_APP_FIREBASE_API_KEY= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_PROJECT_ID= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_STORAGE_BUCKET= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_APP_ID= THE_API_RELEVANT_KEY
   REACT_APP_FIREBASE_MEASUREMENT_ID= THE_API_RELEVANT_KEY
   ```
5. Start the application
   ```sh
   npm started
   ```

<!-- USAGE EXAMPLES -->

## Usage

1️⃣ Create your own Saikai profile, to keep track of your personal progress

2️⃣ Add new position you applied your CV to and log all the details you need (title, company, description, status, applied date, HR details, position link etc.)

3️⃣ Watch all the entered information of the position by clicking on it from the main board. Navigate between position details and position description

4️⃣ Edit position details, by clicking on the pencil of the "view position" modal

5️⃣ Watch all positions on the main board, and get a quick access to each position information.

6️⃣ Drag positions between different status bar as you progress with the process of the specific job, in order to update the position status (You can also change the status manually on "edit position" mode)

7️⃣ Order the positions in each status bar by preferred order: by date, alphabet and free-style

8️⃣ Search for a specific position in the search bar at the top - search by position title, company name or description key words (very useful once you get a call and need a quick reminder of this application 😉)

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should element DRY principles to the rest of your life.

<!-- ROADMAP -->

## Roadmap

See the [Next Milestones](https://github.com/Saikai-oyo/Saikai/milestones) for a list of proposed features (and known issues) for the next milestones.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

0. Speak with Idan at [LinkedIn](https://www.linkedin.com/in/idanlevian/) to be formal contributing
1. Fork the Project.
2. Create your Feature Branch.
3. Commit your Changes.
4. Push to the Branch.
5. Open a Pull Request.

<!-- LICENSE -->

## Convention

### Branch

Branch naming convention is as following:

```
TYPE-ISSUE_ID-DESCRIPTION

examples:
feat-45-add-new-button
fix-741-change-localstorage-get-function
```

### Pull Request (PR)

Pull Request (PR) title convention is as following:

```
[TYPE-ISSUE_ID]-DESCRIPTION

example:
[Feat-45] Add button to login component
[Fix-114] Change localstorage get function
```

### Commits

Commit information convention is as following:

```
[TYPE-ISSUE_ID]-DESCRIPTION

example:
[Feat-45] Add button to login component
[Fix-114] Change localstorage get function
```

### Type

When type can be:

    * feat - is a new feature
    * doc - documentation only changes
    * fix - a bug fix
    * refactor - code change that neither fixes a bug nor adds a feature

**All PRs must include commit message with the changes description!**

---

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/Saikai-oyo/Saikai/blob/dev/LICENSE) for more information.

<!-- CONTACT -->

## Contact

📧 Via email - ContactUs@Saikai.me

🔥 Project Github Link: https://github.com/Saikai-oyo/Saikai

🔗 Website : https://saikai.me

👨🏾‍💻 Open-source Manager (Idan) - [LinkedIn](https://www.linkedin.com/in/idanlevian/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Saikai-oyo/Saikai.svg?style=for-the-badge
[contributors-url]: https://github.com/Saikai-oyo/Saikai/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Saikai-oyo/Saikai.svg?style=for-the-badge
[forks-url]: https://github.com/Saikai-oyo/Saikai/network/members
[stars-shield]: https://img.shields.io/github/stars/Saikai-oyo/Saikai.svg?style=for-the-badge
[stars-url]: https://github.com/Saikai-oyo/Saikai/stargazers
[issues-shield]: https://img.shields.io/github/issues/Saikai-oyo/Saikai.svg?style=for-the-badge
[issues-url]: https://github.com/Saikai-oyo/Saikai/issues
[pulls-url]: https://github.com/Saikai-oyo/Saikai/pulls
[pulls-shield]: https://img.shields.io/github/issues-pr/Saikai-oyo/Saikai.svg?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/Saikai-oyo/Saikai.svg?style=for-the-badge
[license-url]: https://github.com/Saikai-oyo/Saikai/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/72704625
[product-screenshot]: https://user-images.githubusercontent.com/41434778/118405125-e344bf00-b67e-11eb-9f7e-9f64ef50c67c.png
