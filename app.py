from flask import Flask, render_template, request, redirect, flash
import os
import sqlite3
from werkzeug.utils import secure_filename

app = Flask(__name__)

app.secret_key = "shree_ganga_medical"

UPLOAD_FOLDER = "static/uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "pdf"}

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


# ---------------- Home ----------------

@app.route("/")
def home():
    return render_template("index.html")


# ---------------- About ----------------

@app.route("/about")
def about():
    return render_template("about.html")


# ---------------- Services ----------------

@app.route("/services")
def services():
    return render_template("services.html")


# ---------------- Medicines ----------------




# ---------------- Prescription ----------------




# ---------------- Health Tips ----------------

@app.route("/healthtips")
def healthtips():
    return render_template("healthtips.html")


# ---------------- Gallery ----------------

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")



# ---------------- Contact ----------------

@app.route("/contact", methods=["GET", "POST"])

def contact():

    if request.method == "POST":

        name = request.form["name"]

        email = request.form["email"]

        phone = request.form["phone"]

        message = request.form["message"]

        print(name)

        print(email)

        print(phone)

        print(message)

        flash("Message sent successfully!")

        return redirect("/contact")

    return render_template("contact.html")


# ---------------- Run ----------------

if __name__ == "__main__":

    app.run(debug=True)