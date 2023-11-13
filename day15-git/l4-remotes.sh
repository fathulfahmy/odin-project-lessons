git push --force
# DANGER: this overwrite working directory

git push --force-with-lease
# fetch updated repo and push if no conflict

git revert HEAD
git push origin main
# revert changes to HEAD and push new commit

git amend
git reset
# only use for staged commit and not pushed commit

git rebase
# only use for branch with no other users