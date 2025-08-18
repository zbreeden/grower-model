import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from models.scorer import score_lead


from models.scorer import score_lead

def test_score_lead():
    leads = [
        {'organic': True, 'referral': False},
        {'organic': False, 'referral': True},
        {'organic': True, 'referral': True},
        {'organic': False, 'referral': False}
    ]

    signal_map = {'organic': 5, 'referral': 3}
    expected_scores = [5, 3, 8, 0]

    for i, lead in enumerate(leads):
        score = score_lead(lead, signal_map)
        assert score == expected_scores[i], f"Test {i+1} failed: got {score}, expected {expected_scores[i]}"

    print("All tests passed.")

if __name__ == "__main__":
    test_score_lead()



