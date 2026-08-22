-- ==========================================
-- SHREE GANGA MEDICAL AND GENERAL STORE
-- Database
-- ==========================================

CREATE TABLE medicines (

    id SERIAL PRIMARY KEY,

    medicine_name VARCHAR(150) NOT NULL,

    manufacturer VARCHAR(150),

    category VARCHAR(100),

    stock_status VARCHAR(30),

    prescription_required VARCHAR(10)

);

INSERT INTO medicines
(medicine_name, manufacturer, category, stock_status, prescription_required)

VALUES

('Dolo 650','Micro Labs','Tablet','In Stock','No'),

('Paracetamol 500','Cipla','Tablet','In Stock','No'),

('Cetirizine','Dr. Reddy''s','Tablet','In Stock','No'),

('Azithromycin 500','Sun Pharma','Antibiotic','In Stock','Yes'),

('Amoxicillin','Mankind','Capsule','Out of Stock','Yes'),

('ORS Powder','Dabur','Powder','In Stock','No'),

('Digene','Abbott','Syrup','In Stock','No'),

('Crocin Advance','GSK','Tablet','In Stock','No'),

('Insulin','Novo Nordisk','Injection','Out of Stock','Yes'),

('Pantoprazole','Sun Pharma','Tablet','In Stock','Yes'),

('Vitamin C','Himalaya','Tablet','In Stock','No'),

('Zincovit','Apex','Tablet','In Stock','No');



CREATE TABLE prescriptions (

    id SERIAL PRIMARY KEY,

    customer_name VARCHAR(150),

    phone VARCHAR(20),

    email VARCHAR(150),

    prescription_file TEXT,

    notes TEXT,

    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



CREATE TABLE contact_messages (

    id SERIAL PRIMARY KEY,

    customer_name VARCHAR(150),

    email VARCHAR(150),

    phone VARCHAR(20),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



CREATE TABLE health_tips (

    id SERIAL PRIMARY KEY,

    title VARCHAR(200),

    description TEXT

);

INSERT INTO health_tips(title,description)

VALUES

('Drink Water','Drink at least 2-3 litres of water daily.'),

('Healthy Diet','Eat fresh fruits and vegetables every day.'),

('Exercise','Walk at least 30 minutes daily.'),

('Proper Sleep','Sleep for 7-8 hours every night.'),

('Medicine Safety','Take medicines only as prescribed by your doctor.');