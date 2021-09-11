# How to contribute questions?

1. Fork this repository (Click the Fork button in the top right of this page).

2. Clone **your fork** down to your local machine.

```
git clone https://github.com/your-username/frontend-interviews.git
```
3. Create a branch

```
git checkout -b your-branch-name
```
4. Create your question file

Questions are stored as `.md` (*markdown*) files in the `/questions` directory. To add your question, create a new markdown file in the `/questions` directory, and give it an appropriate filename that suits the content. 

Use the following format to create your question file.
```
---
title: "Define anonymous function"
level : 1
category: "JS"
---
It is a function that has no name. These functions are declared dynamically at runtime using the function operator instead of the function declaration. 
```
The section between the two **`---`** contains the metadata of the page. The metadata contains the title, difficulty level, and frontend tech category information. 

Look at the table below for available options. 

| Key   | Value    |
| ------|--------- |
|   title     |"Your question title goes here" |
|   level     | Enter any one number from **1** (*Easy*), **2** (*intermediate*), **3** (*advanced*) | 
|   category  | Enter any one from "CSS", "HTML", "JS", "ReactJS". *This is case sensitive* |

Any content that follows the metadata section is considered as the **answer** for your question. 


5. Commit and Push your changes

```
git add .
git commit -m 'Commit message'
git push -u origin your-branch-name
```
6. Create a new pull request from your forked repository (Click the New Pull Request button located at the top of your repo)

7. Wait for your PR to be reviewed and approved for merge :sparkles: 