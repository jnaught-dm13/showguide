INSERT INTO users
    (authid, name , picture)
VALUES
    ($2, $1, $3)

    RETURNING *