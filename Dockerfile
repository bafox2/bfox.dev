
# Install dependencies only when needed
FROM node:16-alpine AS deps

ENV NODE_ENV=production

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

ENV NODE_ENV=production
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY next.config.js ./
COPY package.json package-lock.json ./
COPY --from=deps /app/node_modules ./node_modules

COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY posts ./posts
COPY Components ./Components
COPY utils ./utils
COPY skills.ts ./skills.ts
COPY projects.ts ./projects.ts

RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]

# FROM node:16-alpine
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY next.config.js ./next.config.js
# COPY . .

# # Stage 1: install dependencies
# FROM node:17-alpine AS deps
# WORKDIR /app
# COPY package*.json ./
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
# RUN npm install

# # Stage 2: build
# FROM node:17-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# #failed here 
# RUN ls -la
# COPY ./ ./src
# COPY public ./public
# COPY package.json next.config.js jsconfig.json ./
# RUN npm run build

# # Stage 3: run
# FROM node:17-alpine
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./
# CMD ["npm", "run", "start"]

# FROM node:16

# ADD package.json /tmp/package.json
# ADD package-lock.json /tmp/package-lock.json
# RUN rm -rf build
# RUN cd /tmp && npm install

# ADD ./ /src
# RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# WORKDIR /src
# RUN npm run build

# # run the nextjs app after it has built, not sure if it's running
# CMD ["npm", "run", "start"]