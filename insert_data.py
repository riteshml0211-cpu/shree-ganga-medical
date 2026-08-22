import sqlite3

conn = sqlite3.connect("medical_store.db")

cursor = conn.cursor()

medicines = [

("Dolo 650","Micro Labs","Tablet","In Stock","No"),

("Paracetamol","Cipla","Tablet","In Stock","No"),

("Cetirizine","Dr. Reddy's","Tablet","In Stock","No"),

("Azithromycin","Sun Pharma","Antibiotic","In Stock","Yes"),

("Amoxicillin","Mankind","Capsule","Out of Stock","Yes"),

("ORS Powder","Dabur","Powder","In Stock","No"),

("Digene","Abbott","Syrup","In Stock","No"),

("Vitamin C","Himalaya","Tablet","In Stock","No")

]

cursor.executemany("""

INSERT INTO medicines

(name,manufacturer,category,stock,prescription)

VALUES(?,?,?,?,?)

""", medicines)

conn.commit()

conn.close()

print("Medicines Added Successfully.") 