
## Here's some handy info about using git in your terminal:

#### Push to GitHub for the first time
* cd into project from terminal (need to be inside your project)
* `git init` (initialize an empty repo in your project)
* `git add .` (add everything that's been changed, staging it for pushing into github)
* `git commit -m "First commit"` (Give a descriptive name to what you're adding)
* `git branch -M main` (create the main branch, overwrites default master branch)
* `git remote add origin "your origin url here"` (connects you to the git repository)
* `git push -u origin main` (add everything you staged with git add to your repo)

#### Update an existing project
* cd into the project from terminal (need to be inside your project)
* `git add .` (adds all the files you changed, staging it for pushing into github)
* `git commit -m "Second commit or whatever"` (Give a descriptive name to what you're editing)
* `git push` (add everything you just committed to your repo)

#### Other handy git commands
* `git pull` downloads any updates made by yourself or other collaborators
* `git checkout nameOfBranch` if you have multiple branches, this will change the working branch