git config --global user.name 'fathulfahmy'
git config --global user.email 'fathulfmy@gmail.com'
git config --global init.defaultBranch main
git config --global pull.rebase false
# configure user name,email,branch name and rebase behavior

git config --get user.name
git config --get user.email
# display user name and email 

ls ~/.ssh/id_ed25519.pub
# display if ed25519 ssh key is installed 

ssh-keygen -t ed25519 -C 'fathulfmy@gmail.com'
# generate ssh with email as description comment 

cat ~/.ssh/id_ed25519.pub
# copy ed25519 ssh key 

ssh -T git@github.com
# ssh to github to verify authentication