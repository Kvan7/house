FROM mcr.microsoft.com/devcontainers/typescript-node:0-20

# Default powerline10k theme, no plugins installed
# RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)"

# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
# 	&& apt-get -y install --no-install-recommends \
# 	zsh \
# 	fonts-powerline \
# 	&& apt-get clean && rm -rf /var/lib/apt/lists/*

COPY $HOSTDIR $CONTAINERDIR


COPY .zshrc /root/.zshrc
COPY .zshrc /home/node/.zshrc

COPY .p10k.zsh /root/.p10k.zsh
COPY .p10k.zsh /home/node/.p10k.zsh

COPY .zsh /root/.zsh
COPY .zsh /home/node/.zsh

RUN chmod a+x ~/.zshrc
RUN chsh -s ~/.zshrc

RUN sudo apt-get update && sudo apt-get install gnupg2 -y

CMD ["zsh"]