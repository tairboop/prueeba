# ---- Etapa 1: Build ----
FROM oven/bun:1 AS builder

# Directorio de trabajo
WORKDIR /app

# Copiamos archivos de dependencias primero para aprovechar cache
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copiamos el resto del código
COPY . .

# Recibir variable en build
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Construimos la app para producción
RUN bun run build

# ---- Etapa 2: Producción ----
FROM nginx:1.27-alpine AS runner

# Eliminamos archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiamos la build de Vite al directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos configuración personalizada de Nginx (si la tenemos)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]