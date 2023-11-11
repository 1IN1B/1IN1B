---
title: "WSL Setup"
date: 2023-010-29T15:37:27+05:30
authors: ["Vikki"]
description: ""
tags: ["wsl","ubuntu","linux"]
categories: [""]
series: [""]
url: ""
externalLink: ""
featuredImage: ""
disableComments: true
draft: false
---

## My quick devy WSL setup

[Note] - Make sure you have an WSL and Ubuntu installed on WSL.

[How to install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)


### Install basic utils

```
sudo apt update -y && sudo apt install git wget curl zip unzip gzip p7zip tar neofetch vim neovim golang python3 python3-pip rustc cargo nodejs npm gcc gdb g++ make cmake build-essential zsh -y
```
Install OhMyZsh

[Oh My ZSH Website](https://ohmyz.sh/)


```
sh -c '$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)'
```

Some plugins that I just love

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)
[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)

Clone both zsh-autosuggestions and zsh-syntax-highlighting plugins

```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Add them to .zshrc

```
sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc && source .zshrc
```

OR just copy paste this in your .zshrc

```
export ZSH="$HOME/.oh-my-zsh"
# More themes on: https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"
# true/false
CASE_SENSITIVE="false"
# zstyle ':omz:update' mode disabled
# disable automatic updates
# zstyle ':omz:update' mode auto
# update automatically without asking
# zstyle ':omz:update' mode reminder
# just remind me to update when it's time
plugins = (
	git
	zsh-autosuggestions
	zsh-syntax-highlighting
)
source $ZSH/oh-my-zsh.sh
# User configuration
export LANG=en_US.UTF-8
# Preferred editor for local or remote session
if [[ -n $SSH_CONNECTION ]]; then
	export EDITOR='vim'
else
	export EDITOR='nvim'
fi
# aliases
alias zshconf="nvim ~/.zshrc"
alias ohmyzsh="nvim ~/.oh-my-zsh"
```