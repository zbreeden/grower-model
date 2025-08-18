def score_lead(lead, signal_map):
    score = 0
    for signal, weight in signal_map.items():
        if lead.get(signal):
            score += weight
    return score