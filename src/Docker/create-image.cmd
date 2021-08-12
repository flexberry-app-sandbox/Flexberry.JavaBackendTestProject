docker build --no-cache -f SQL\Dockerfile.PostgreSql -t javabackendtestproject/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t javabackendtestproject/app ../..
