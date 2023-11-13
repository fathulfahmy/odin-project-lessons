git clone git@github.com:fathulfahmy/curriculum.git
# duplicate forked repo

git remote add upstream git@github.com:TheOdinProject/curriculum.git
# add remote original repo

git fetch upstream
# fetch latest original repo

git checkout main
git merge upstream/main
# change branch to main and merge with upstream/main branch

git fetch upstream
git merge upstream/main
# same as
git pull upstream main

git checkout feature
git merge main
# change branch to feature and merge with main branch

git push origin feature
# push feature branch to forked repo
