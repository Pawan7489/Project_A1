from flask import Flask, render_template

app = Flask(__name__)

# Main Homepage
@app.route('/')
def home():
    return render_template('index.html')

# System Dashboard (Animated Neon Borders)
@app.route('/animated')
def animated_admin_panel():
    return render_template('animated_admin.html')

# NEW Route: Hi-Tech Settings Page (NASA/ISRO Style)
@app.route('/hitech-settings')
def hitech_settings_page():
    return render_template('hitech_settings.html')

if __name__ == '__main__':
    app.run(debug=True)
