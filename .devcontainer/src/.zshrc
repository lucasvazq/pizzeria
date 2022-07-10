# Add local bin path.
export PATH="$HOME"/.local/bin:"$PATH"

# Config terminal.
export LANG=en_US.UTF-8
export LANGUAGE=en_US:en
export LC_ALL=en_US.UTF-8
export TERM=xterm

# Config Zsh, Oh My Zsh and Powerlevel10k.
export ZSH="$HOME"/.oh-my-zsh
export DISABLE_AUTO_UPDATE=true
export ZSH_THEME=powerlevel10k/powerlevel10k
source "$ZSH"/oh-my-zsh.sh
source "$HOME"/.p10k.zsh
