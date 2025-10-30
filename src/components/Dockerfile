FROM node:alpine AS base
COPY package*.json ./
WORKDIR /frontend_react
RUN npm run build

FROM nginx:alpine
COPY --from=base /frontend_react/base   /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]