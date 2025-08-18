# 🌱 The Grower Model

**Synthetic decision model for portfolio targeting and strategic growth.**  
Tracks thread viability, resilience, yield, lock, and preservation across a symbolic lifecycle.

---

## 🔁 Lifecycle Stages

| Stage         | Description                                                                 | Sub-Model File             |
|---------------|-----------------------------------------------------------------------------|----------------------------|
| **Viability** | Evaluates initial thread potential (depth, feedback, symbolic weight)       | `viability_model.py`       |
| **Resilience**| Tests thread endurance across time, distraction, and competing priorities   | `resilience_model.py`      |
| **Yield**     | Measures strategic output and alignment with portfolio goals                | `yield_model.py`           |
| **Lock**      | Confirms thread closure, symbolic naming, and archival readiness            | `lock_model.py`            |
| **Preservation**| Ensures long-term value, reuse potential, and sovereign integration       | `preservation_model.py`    |

---

## 🧠 Architecture

- **Master Orchestrator:** `grower_master.py`  
  Coordinates lifecycle progression and scoring logic

- **Data Inputs:**  
  - `Grower_Data_Inputs.csv` ← strategic thread metadata  
  - `Thread_Scores.csv` ← scoring snapshots  
  - `Symbolic_Events.json` ← naming rituals, barycenter locks

- **Scripts:**  
  - `advance_stage.py` ← moves threads forward  
  - `score_thread.py` ← calculates stage scores  
  - `archive_model.py` ← locks and stores completed threads

- **Notebooks:**  
  - `Grower_Lifecycle_Tracker.ipynb` ← visual dashboard  
  - `Grower_Scoring_Engine.ipynb` ← interactive scoring

---

## 🏷️ Symbolic Tags

- `Grower.Stage.viability.locked`  
- `Grower.Stage.yield.active`  
- `Grower.Thread.Xo.locked`  
- `Grower.Archive.v1` ← for closed threads

---

## 🔮 Usage

1. Add new thread metadata to `Grower_Data_Inputs.csv`  
2. Run `score_thread.py` to evaluate viability  
3. Use `advance_stage.py` to progress through lifecycle  
4. Confirm lock via `lock_model.py` and archive with `archive_model.py`  
5. Track all threads in `Grower_Lifecycle_Tracker.ipynb`

---

## 📜 License

MIT — open for strategic experimentation and sovereign adaptation.# grower-model
Synthetic decision model for portfolio targeting and strategic growth.
