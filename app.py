from flask import Flask, render_template

app = Flask(__name__)

# Route 1: For the Main Homepage (आपका पुराना पेज)
@app.route('/')
def home():
    return render_template('index.html')

# Route 2: NEW Route for the Admin Panel
@app.route('/admin')
def admin_panel():
    return render_template('admin.html')

if __name__ == '__main__':
    app.run(debug=True)
