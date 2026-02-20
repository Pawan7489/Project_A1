from flask import Flask, render_template

app = Flask(__name__)

# 1. Main Homepage
@app.route('/')
def home():
    return render_template('index.html')

# 2. Old Simple Responsive Admin Panel
@app.route('/admin')
def admin_panel():
    return render_template('admin.html')

# 3. NEW Animated Admin Panel
@app.route('/animated')
def animated_admin_panel():
    return render_template('animated_admin.html')

if __name__ == '__main__':
    app.run(debug=True)
    
