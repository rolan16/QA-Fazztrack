PGDMP     ;    4            
    z            db_latihan001    15.0    15.0 	    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16401    db_latihan001    DATABASE     ?   CREATE DATABASE db_latihan001 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE db_latihan001;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            ?            1259    16424 	   tbl_users    TABLE     ?   CREATE TABLE public.tbl_users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    address text
);
    DROP TABLE public.tbl_users;
       public         heap    postgres    false    4            ?          0    16424 	   tbl_users 
   TABLE DATA           K   COPY public.tbl_users (id, username, email, password, address) FROM stdin;
    public          postgres    false    215   7       h           2606    16430    tbl_users tbl_users_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.tbl_users
    ADD CONSTRAINT tbl_users_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.tbl_users DROP CONSTRAINT tbl_users_pkey;
       public            postgres    false    215            ?   ?   x?M??n? ?sx?<A??????Iմ?????*>{?9M*?????&=?c?w?*???????^??~~oUB??#,?z?G??K,?n?&????c5!??D[????"gk???????z?w?????l?Y?????!?F?l?	?*?J?D??&>;Mx?	?"}????>>K??!tG???;?????X?vB?	Nn?[xs>L??C???A)?M?o?     