from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.secret_key = 'chaimae_chocho'
    
    with app.app_context():
        from . import main
        
    return app

