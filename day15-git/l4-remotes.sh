git push --force
# DANGER: this overwrite working directory

git push --force-with-lease
# fetch updated repo and push if no conflict

git revert HEAD
git push origin main
# revert changes to HEAD and push new commit