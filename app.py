# python3 -m venv C:\Users\simon\Documents\Projects\tableTest\env
# source env/bin/activate
from flask import Flask, render_template, url_for, request
from random import randint

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)