#!/bin/bash
echo "Entrypoint commands... "

echo "PGUSER: $PGUSER"
sed -i "s/<PGUSER>/$PGUSER/" flyway/flyway.conf
echo "PGPASSWORD: $PGPASSWORD"
sed -i "s/<PGPASSWORD>/$PGPASSWORD/" flyway/flyway.conf
echo "PGPORT: $PGPORT"
sed -i "s/<PGPORT>/$PGPORT/" flyway/flyway.conf
echo "PGDATABASE: $PGDATABASE"
sed -i "s/<PGDATABASE>/$PGDATABASE/" flyway/flyway.conf
echo "PGHOST: $PGHOST"
sed -i "s/<PGHOST>/$PGHOST/" flyway/flyway.conf

echo "'Running npm run migrate' and 'npm run start' ..."
npm run migrate
npm run start