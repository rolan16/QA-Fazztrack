-- Active: 1668925988190@@127.0.0.1@5432@db_latihan001

CREATE DATABASE db_latihan001;

CREATE TABLE
    tbl_users (
        ID int PRIMARY KEY,
        Username VARCHAR (255),
        Email VARCHAR (255),
        Password VARCHAR (255),
        Address TEXT
    );

-- Query menambahkan data / INSERT data

INSERT INTO tbl_users
VALUES (
        1214235436,
        'sandika12',
        'sandhika@gmail.com',
        'rahasia12',
        'Jalan Merdeka 1'
    );

INSERT INTO tbl_users
VALUES (
        1216573549,
        'reyhan19',
        'reyhanbaik@gmail.com',
        'sangatrahasia',
        'Jalan Lurus 3'
    );

INSERT INTO tbl_users
VALUES (
        1227638279,
        'daniel22',
        'daniel@gmail.com',
        'kelabang22',
        'Jalan Teratai 2'
    );

INSERT INTO tbl_users
VALUES (
        1211458732,
        'radenaja',
        'radendimas@gmail.com',
        'ashiapman',
        'Jalan Panjang 2'
    );

INSERT INTO tbl_users
VALUES (
        1221544709,
        'ratih20',
        'ratih_junita@gmail.com',
        'junita00',
        'Jalan Panjang 2'
    );

INSERT INTO tbl_users
VALUES (
        1226572231,
        'andi_keren',
        'andisaputra@gmail.com',
        'latihan2',
        'Jalan Rusak 6'
    );

-- Query untuk menampilkan data / SELECT

SELECT * FROM tbl_users;

-- Query untuk updata data

UPDATE tbl_users
SET
    Username = 'sandikagalih',
    password = 'tidakdiketahui'
WHERE ID = 1214235436;

-- Query untuk menghapus data

DELETE FROM tbl_users WHERE username = 'radenaja';