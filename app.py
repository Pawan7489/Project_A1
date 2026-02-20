from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Route 1: Main Homepage (आपकी मुख्य वेबसाइट)
@app.route('/')
def home():
    return render_template('index.html')

# Route 2: Old Simple Responsive Admin Panel
@app.route('/admin')
def admin_panel():
    return render_template('admin.html')

# Route 3: Dynamic Animated Dashboard (जिसमें JavaScript Timer लगा है)
@app.route('/animated')
def animated_admin_panel():
    return render_template('animated_admin.html')

# Route 4: Hi-Tech NASA/ISRO Style Settings Page
@app.route('/hitech-settings')
def hitech_settings_page():
    return render_template('hitech_settings.html')

# Run the server
if __name__ == '__main__':
    # debug=True automatically restarts the server when code changes
    app.run(debug=True)
    
