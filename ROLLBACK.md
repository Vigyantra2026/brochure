# VIGYANTRA 2026 — Production Rollback Documentation

## Overview
This repository contains the official live production website for **VIGYANTRA 2026** (SJB Institute of Technology's 25th Silver Jubilee National Technical Symposium).

The live production deployment on Vercel is connected to the `main` branch.

All Next.js + React scrollytelling migration work is contained on the isolated branch:
`migration/nextjs-scrollytelling`

---

## Instant 1-Command Rollback to Production

To instantly revert your local working directory to the exact, tested vanilla production website:

```bash
git checkout main
```

That's it. The original working production website will be completely and instantly restored.

---

## Production Commit Reference
- **Production Branch**: `main`
- **Stable Production Commit**: `734cecfbbac43afa31520900e13f55b266d9a6a6` ("Remove SFX audio synthesis toggle and silent Web Audio engine")
- **Remote Repository**: `https://github.com/Vigyantra2026/brochure.git`

---

## Safeguard Policy
1. **Never** force-push or merge `migration/nextjs-scrollytelling` into `main` without explicit stakeholder approval and end-to-end QA validation.
2. The original files (`index.html`, `css/styles.css`, `js/events-data.js`, `js/main.js`, and `assets/`) remain fully intact in git history and on the `main` branch.
