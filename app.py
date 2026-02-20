from flask import Flask, render_template

app = Flask(__name__)

# Main Homepage
@app.route('/')
def home():
    return render_template('index.html')

# Animated Admin Panel Dashboard
@app.route('/animated')
def animated_admin_panel():
    return render_template('animated_admin.html')

# NEW Route: Settings Page
@app.route('/settings')
def settings_page():
    return render_template('settings.html')

if __name__ == '__main__':
    app.run(debug=True)
    
