git rebase -i HEAD~2
# rebase from HEAD to next 2 commits

edit
# change any pick to edit

git commit --amend
# edit commit message

git rebase --continue
# confirms changes

squash
# merge 2 commits

git reset
# reset staging area and point HEAD to one commit before

git reset --soft
# only point HEAD and leave staging area as is

git reset --hard
# update working directory to match pointed commit DANGER:this overwrite files