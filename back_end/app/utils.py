# app/utils.py

import PyPDF2
import json
import re
from groq import Groq
import torch
from transformers import BertTokenizer, BertModel

# Initialize Groq client
llama_70B = "llama-3.1-70b-versatile"
client = Groq(api_key="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")

# Load BERT model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

def encode_text(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    # Utiliser le vecteur [CLS]
    return outputs.last_hidden_state[:, 0, :].detach().numpy()[0]

def parse_resume(resume_text):
    prompt = f"""
    Parse the following resume and extract only the specified information in the exact JSON format provided...
    {resume_text}
     Required JSON format:
    {{
      "Name": "",
      "Email": "",
      "Phone-Number": "",
      "Summary": "",
      "Current-Location": "",
      "Current-Company": "",
      "Skills": [],
      "Linkedin-Id": "",
      "Github-Id": "",
      "Total-Experience": 0,
      "Education": [
        {{
          "Degree": "",
          "Specialization": "",
          "Institute": "",
          "Start": 0,
          "End": 0
        }}
      ],
      "Education-Year": [],
      "Experiences": [
        {{
          "Company Name": "",
          "Designation": "",
          "Start": "",
          "End": "",
          "Description": ""
        }}
      ],
      "Projects": [
        {{
          "Project": "",
          "Project-Description": ""
        }}
      ],
      "Roles-Responsibility": [],
      "Certifications": []
    }}
    """
    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": prompt}],
        model=llama_70B,
        temperature=0
    )
    response = chat_completion.choices[0].message.content
    json_match = re.search(r'```json\n(.*?)\n```', response, re.DOTALL)
    if json_match:
        json_str = json_match.group(1)
        return json.loads(json_str)
    return None

def extract_text_from_pdf(pdf_file):
    try:
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text() or ""
        return text
    except Exception as e:
        return ""

def extract_features_from_json(cv_json):
    cv_text = ""
    cv_text += " ".join(cv_json["Skills"]) + " "
    
    for edu in cv_json["Education"]:
        cv_text += edu["Degree"] + " " + edu["Specialization"] + " " 

    return cv_text
