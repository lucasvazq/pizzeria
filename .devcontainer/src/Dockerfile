FROM python:3.10.5-bullseye

ARG GITHUB_USER
ARG GITHUB_EMAIL

WORKDIR /workspace/src

COPY ./src .

RUN apt update \
    && apt install -y --no-install-recommends \
        sudo \
        git \
        less

# Add a new default user for VS Code.
RUN useradd --no-log-init -r -m -u 1000 -g src src \
    && echo "src ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers \
    && chown -R src /workspace/src
USER src

# Install Zsh, Oh My Zsh and Powerlevel10k.
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" \
    && echo "source /workspace/.devcontainer/src/.zshrc" > "$HOME"/.zshrc \
    && echo "source /workspace/.devcontainer/src/.p10k.zsh" > "$HOME"/.p10k.zsh \
    && sudo chsh -s $(which zsh) $(whoami)
ENV SHELL /bin/zsh

# General Git config.
RUN git config --global pull.rebase false \
    && git config --global user.name ${GITHUB_USER} \
    && git config --global user.email ${GITHUB_EMAIL}

# Install and config diff-so-fancy.
RUN mkdir "$HOME"/.bin \
    && git clone https://github.com/so-fancy/diff-so-fancy "$HOME"/.bin/diffsofancy \
    && chmod +x "$HOME"/.bin/diffsofancy/diff-so-fancy \
    && sudo ln -s "$HOME"/.bin/diffsofancy/diff-so-fancy /bin/diff-so-fancy \
    && git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX" \
    && git config --global color.ui true \
    && git config --global color.diff-highlight.oldNormal "red bold" \
    && git config --global color.diff-highlight.oldHighlight "red bold 52" \
    && git config --global color.diff-highlight.newNormal "green bold" \
    && git config --global color.diff-highlight.newHighlight "green bold 22" \
    && git config --global color.diff.meta "11" \
    && git config --global color.diff.frag "magenta bold" \
    && git config --global color.diff.commit "yellow bold" \
    && git config --global color.diff.old "red bold" \
    && git config --global color.diff.new "green bold" \
    && git config --global color.diff.whitespace "red reverse"

# Config Python and install Poetry.
ENV PYTHONUNBUFFERED 1
ENV PYTHONPYCACHEPREFIX /tmp
RUN pip install poetry \
    && "$HOME"/.local/bin/poetry config virtualenvs.in-project true

# Install Node.js and npm.
ENV NODE_VERSION 18.5.0
RUN DPKG_ARCHITECTURE="$(dpkg --print-architecture)" \
    && case "${DPKG_ARCHITECTURE##*-}" in \
        amd64) ARCH="x64";; \
        arm64) ARCH="arm64";; \
        i386) ARCH="x86";; \
        *) echo "unsupported architecture" && exit 1 ;; \
    esac \
    && sudo curl -sSO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
    && sudo tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 \
    && sudo npm install -g yarn

# Install requirements.
RUN cd /workspace/src/backend/users \
    && rm -rf ./.venv \
    && "$HOME"/.local/bin/poetry install
RUN cd /workspace/src/backend/pizzas \
    && rm -rf ./.venv \
    && "$HOME"/.local/bin/poetry install
RUN cd /workspace/src/frontend/web \
    && rm -rf ./node_modules \
    && sudo yarn install

CMD ["sleep", "infinity"]
