# AGENTS.md

This repo uses Andrew's shared agent/tooling policies. Keep repo-specific build and product details in the local README, CONTEXT, docs, or Graphify card instead of expanding this file.

<!-- central-tooling-start -->
## Central Tooling

- Graphify: use `/Users/andrewpklein/Developer/Tooling/graphify-vault/wired-repos.txt` as the active registry and `graphify-out/REPO_CARD.md` for orientation. Do not index archives, worktrees, raw corpora, vector stores, credentials, or generated graph output.
- Obsidian: curated notes live in `/Users/andrewpklein/Developer/Master AK Vault`; generated repo wiki mirrors are overwritten by Graphify. Do not hand-edit generated wiki pages.
- MemPalace: derived local recall only. Do not sync `~/.mempalace`, raw corpora, embeddings, auth state, local DBs, or private archives into Graphify or Obsidian.
- Secrets and provider keys: use the central 1Password/service-account lane, especially `/Users/andrewpklein/Developer/Tooling/op-run-sa.sh`; never store, print, or commit secrets.
<!-- central-tooling-end -->

<!-- api-key-provision-wired -->
- **API key is never a blocker / never skip the best tool (global, Andrew 2026-06-22):**
  if the best tool for this project needs a key it is NOT silently skipped. Key in
  1Password → SA lane loads it. Missing + free → auto-open the creation page in
  native Chrome (profile apk155015@gmail.com). Missing + best/paid → run a Claude
  Opus 4.8 parity search (xhigh) for equal-or-better free/keyed tools, present
  options (best tool wins even if paid), then STOP and wait for the key in
  1Password. Tooling: `api-key-provision` (`~/Developer/Tooling/api-key-provision.sh`).
  Canonical: `~/Developer/Documentation/DriveIntelligenceAI/wiki/wiki/api-key-provisioning.md`.
