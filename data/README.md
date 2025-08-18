# Grower Model — Data Folder

## Structure

- `raw/`: Unmodified source files
- `processed/`: Cleaned and scored datasets
- `signals/`: Signal maps and metadata
- `archive/`: Deprecated or versioned files

## Current Files

| File Name             | Location         | Description                          |
|-----------------------|------------------|--------------------------------------|
| lead_scores.csv       | processed/       | Scored leads with tags and metrics   |
| lead_signals_v2.csv   | signals/         | Signal map for scoring logic         |

## Tagging Logic

- Each file supports synthetic decision modeling
- Tags align with Grower suite rituals and scoring logic
- Archived versions should be timestamped and noted

## Ritual Tags

- `Grower_Data_Seed`: Folder scaffold
- `Grower_Data_Inputs`: Strategic file placement
