from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import json
from utils import extract_text_from_pdf, parse_resume
from recommenders import recommend_jobs
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limit file size to 16MB

# Ensure the upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'cv' not in request.files:
            return jsonify({'error': 'No file selected'}), 400

        file = request.files['cv']

        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400

        if file and file.filename.endswith('.pdf'):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            print(f"File {filename} uploaded successfully.")  # Log file upload success

            # Extract text from PDF
            resume_text = extract_text_from_pdf(file_path)
            print(f"Extracted text from resume: {resume_text[:100]}...")  # Log a snippet of extracted text

            cv_json = parse_resume(resume_text)
            print(f"Parsed CV data: {cv_json}")  # Log parsed CV data

            # Load job offers from JSON file
            with open('C:/Users/LENOVO/Desktop/NLP_recrute/nlp-test/app/job_offers.json', 'r', encoding='utf-8') as f:
                job_offers_json = json.load(f)

            # Get job recommendations
            recommended_jobs = recommend_jobs(cv_json, job_offers_json)
            print(f"Recommended jobs: {recommended_jobs}")  # Log job recommendations
            
            # Prepare recommended jobs for JSON response
            recommended_jobs_list = []
            for job, score in recommended_jobs:
                job_data = job.copy()  # Avoid modifying the original job data
                job_data['Score'] = float(score)
                recommended_jobs_list.append(job_data)

            # Return the results as JSON
            return jsonify({"cv_data": cv_json, "jobs": recommended_jobs_list}), 200

        else:
            return jsonify({'error': 'Invalid file format. Only PDF files are allowed.'}), 400

    except Exception as e:
        print(f"Error: {str(e)}")  # Log the exception
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == "__main__":
    app.run(debug=True)
