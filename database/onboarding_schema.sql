-- Drop tables if they exist to avoid duplication
DROP TABLE IF EXISTS melanoma_incidence CASCADE;
DROP TABLE IF EXISTS melanoma_mortality CASCADE;
DROP TABLE IF EXISTS vic_suburbs CASCADE;
DROP TABLE IF EXISTS heat_recorded CASCADE;

-- Create Melanoma Incidence Table
CREATE TABLE melanoma_incidence (
    year INT PRIMARY KEY,
    incidence_count INT NOT NULL
);

-- Create Melanoma Mortality Table
CREATE TABLE melanoma_mortality (
    year INT PRIMARY KEY,
    mortality_count INT NOT NULL
);

-- Create Victorian Suburbs Table
CREATE TABLE vic_suburbs (
    suburb VARCHAR(255) PRIMARY KEY,
    postcode INT NOT NULL,
    longitude DECIMAL(10, 6),
    latitude DECIMAL(10, 6)
);

-- Create Heat Recorded Table
CREATE TABLE heat_recorded (
    record_date DATE PRIMARY KEY,
    maximum_temperature DECIMAL(5, 2) NOT NULL
);
