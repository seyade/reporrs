FROM node:12

COPY . /opt/app

WORKDIR /opt/app

EXPOSE 27017

EXPOSE 7004

RUN yarn

# RUN chmod +x /opt/app/setupEnv.sh

RUN sh /opt/app/setupEnv.sh

ENTRYPOINT [ "/opt/app/setupEnv.sh" ] 

CMD yarn watch





