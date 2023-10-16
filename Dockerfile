# Build docker image.
# Sử dung node
FROM node:16 as node

# Khai báo tham số
ARG workdir=.
LABEL description="deploy react app"

# Khái báo workdir trong node.
WORKDIR /app

# Copy project vào trong workdir của node.
COPY ${workdir}/ /app/

# Cài đặt các thư viện node liên quan.
# RUN npm install

# Chạy lệnh build.
RUN npm run build

# Sử dụng nginx
FROM tomcat:jdk11
# Copy folder đã được build vào folder chạy của nginx.
COPY --from=node /app/build/ /usr/local/tomcat/webapps/ROOT/

# Copy file cấu hình chạy cho nginx (file nginx.conf sẽ tạo ở bước tiếp theo)
# COPY --from=node /app/nginx.conf /etc/nginx/nginx.conf

# Cài đặt curl cho câu lệnh check HEALTH
# RUN apt-get update && apt-get install -y curl

# Kiểm tra trạng thái của container sau khi chạy
HEALTHCHECK --interval=1m --timeout=3s \
  CMD curl -f http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]