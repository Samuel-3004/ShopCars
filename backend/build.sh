// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npx prisma migrate dev
npm run start:dev