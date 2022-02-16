CREATE DATABASE mm;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    mark VARCHAR(255),
    model VARCHAR(255) UNIQUE,
    description VARCHAR(500),
    img VARCHAR(500) UNIQUE,
    state VARCHAR(255),
    units INT 
);

CREATE TABLE users(
    u_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE users_task(
    id INT REFERENCES task(id) ON UPDATE CASCADE ON DELETE CASCADE,
    u_id INT REFERENCES users(u_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT task_users_pkey PRIMARY KEY (id, u_id)
);
