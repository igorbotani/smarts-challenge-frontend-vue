FROM nginx

COPY html/smart-vue/dist /usr/share/nginx/html

VOLUME /usr/share/nginx/html

EXPOSE 80

