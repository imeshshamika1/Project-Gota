FROM fusuf/whatsasena:latest

RUN git clone https://github.com/imeshshamika1/Project-Gota /root/Project-Gota
WORKDIR /root/Project-Gota/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
