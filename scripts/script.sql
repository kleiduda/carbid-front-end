-- Database: DB_CARBID

-- DROP DATABASE IF EXISTS "DB_CARBID";

CREATE DATABASE "DB_CARBID"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.TB_OFFER_VEHICLE

-- DROP TABLE IF EXISTS public."TB_OFFER_VEHICLE";

CREATE TABLE IF NOT EXISTS public."TB_OFFER_VEHICLE"
(
    id_offer uuid NOT NULL DEFAULT gen_random_uuid(),
    vehicle_year character varying(4) COLLATE pg_catalog."default" NOT NULL,
    vehicle_make character varying(50) COLLATE pg_catalog."default" NOT NULL,
    vehicle_model character varying(50) COLLATE pg_catalog."default" NOT NULL,
    vehicle_zip_code character varying(10) COLLATE pg_catalog."default" NOT NULL,
    vehicle_phone character varying(20) COLLATE pg_catalog."default" NOT NULL,
    mileage integer NOT NULL,
    does_it_drive character varying(5) COLLATE pg_catalog."default",
    tires_inflated character varying(5) COLLATE pg_catalog."default",
    wheels_attached character varying(5) COLLATE pg_catalog."default",
    front_condition character varying(30) COLLATE pg_catalog."default",
    rear_condition character varying(30) COLLATE pg_catalog."default",
    left_side_condition character varying(30) COLLATE pg_catalog."default",
    right_side_condition character varying(30) COLLATE pg_catalog."default",
    engine_condition character varying(30) COLLATE pg_catalog."default",
    flood_damage character varying(5) COLLATE pg_catalog."default",
    fire_damage character varying(5) COLLATE pg_catalog."default",
    glass_condition character varying(30) COLLATE pg_catalog."default",
    airbag_deployed character varying(5) COLLATE pg_catalog."default",
    has_title character varying(5) COLLATE pg_catalog."default",
    pickup_address text COLLATE pg_catalog."default",
    vehicle_color character varying(30) COLLATE pg_catalog."default",
    vin character varying(17) COLLATE pg_catalog."default",
    created_at timestamp with time zone DEFAULT now(),
    CONSTRAINT "TB_OFFER_VEHICLE_pkey" PRIMARY KEY (id_offer)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."TB_OFFER_VEHICLE"
    OWNER to postgres;