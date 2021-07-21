FROM cypress/browsers:node14.16.0-chrome89-ff86
WORKDIR /app
RUN apt-get update -y
# Atualiza o chrome para versão mais recente. 
RUN curl -s https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list && apt-get update && apt-get install -y google-chrome-stable
RUN npm install
RUN npm install cypress 
COPY . /app
# Executa o teste no chrome
RUN npm run chrome
# Executa o teste no firefox
RUN npm run firefox