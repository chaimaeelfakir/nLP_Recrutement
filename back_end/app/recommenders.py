# app/recommender.py

from sklearn.metrics.pairwise import cosine_similarity
from utils import encode_text, extract_features_from_json

def recommend_jobs(cv_json, job_offers_json):
    # Encoder le texte du CV
    cv_text = extract_features_from_json(cv_json)
    cv_vector = encode_text(cv_text)
    job_vectors = []
    for job in job_offers_json:
        job_text = job['Title'] + " " + " ".join(job['Skills'])
        job_vector = encode_text(job_text)
        job_vectors.append((job, job_vector))

    # Calculer les similarités cosinus
    similarities = []
    for job, job_vector in job_vectors:
        similarity = cosine_similarity([cv_vector], [job_vector])[0][0]
        if similarity >0.80:  # Filtrer pour inclure seulement les similarités ≥ 0.80
            similarities.append((job, similarity))
    
    # Trier les offres par similarité décroissante
    sorted_jobs = sorted(similarities, key=lambda x: x[1], reverse=True)
    
    return sorted_jobs
