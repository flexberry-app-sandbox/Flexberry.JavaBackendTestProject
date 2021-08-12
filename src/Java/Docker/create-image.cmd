docker build --no-cache -f SQL\Dockerfile.PostgreSql -t javabackendtestproject-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t javabackendtestproject-java/app ../../..

