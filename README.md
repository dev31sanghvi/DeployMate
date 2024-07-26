simple git = lightweight interface for running git commands in any node js application.

Tech Stack : react js , node js , express js , aws , simple git , redis , pubsubs, queues,typescript, DB(postgress sql) and Prisma ( both optional)

steps to run :-

add your secrets in env file:-
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY= ""

first install typescrript it not already install
go to tsconfig.json -> then change ( "rootDir": "./src", ) amd outdir to "./dist"
then run (tsc -b ) to compile your ts code
then run node dist/index.js
