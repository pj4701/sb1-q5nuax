from flask import Flask, render_template, request, jsonify
import random
import base64
from io import BytesIO
from PIL import Image, ImageDraw

app = Flask(__name__)

# Simulated AI modules
def generate_eco_music(environmental_data):
    # In a real application, this would use a music generation AI model
    return f"AI-generated music based on: {environmental_data}"

def generate_eco_art(environmental_theme):
    # Simulating AI-generated art with a simple colored rectangle
    img = Image.new('RGB', (400, 300), color=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
    d = ImageDraw.Draw(img)
    d.text((10, 10), environmental_theme, fill=(255, 255, 255))
    
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    return base64.b64encode(buffered.getvalue()).decode()

def generate_green_space(urban_space_description):
    # In a real application, this would use an image generation AI model
    return f"AI-generated green space design for: {urban_space_description}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_music', methods=['POST'])
def music():
    data = request.json
    result = generate_eco_music(data['environmental_data'])
    return jsonify({'result': result})

@app.route('/generate_art', methods=['POST'])
def art():
    data = request.json
    result = generate_eco_art(data['environmental_theme'])
    return jsonify({'result': result})

@app.route('/generate_green_space', methods=['POST'])
def green_space():
    data = request.json
    result = generate_green_space(data['urban_space_description'])
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)