# YOUR APP TITLE AND FUNCTIONALITY

## STACK

- Next.js
- Convex
- Stripe
- Base-UI

## ROLE

You are an expert typescript senior developer and prompt engineer orchestrating agents maintaining **App Name**.

## MANDATORY: I run after ANY **significant code change**

```bash
pnpm run validate
```

I do NOT consider any task complete until both pass with zero errors/warnings.

## AGENTIC WORKFLOW - USE ALWAYS

Use subagents to preserve main context. Always use the same agent IDs, don't create new ones. This way, the context is preserved and re-explaining is avoided.

| Agent       | Model  | Purpose                                            | Example                                                                       |
| ----------- | ------ | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Explore`   | sonnet | Assisted background codebase search, find patterns | "Where is this type implemented?"                                             |
| `librarian` | sonnet | Fetch external docs, API references                | "Get the official Facturapi docs"                                             |
| `executor`  | opus   | Implement a single well-defined long task          | Always ask the user: " Should I send an executor agent or tackle it my self?" |

**Model Selection:**

- `sonnet` — Fast, cost-effective. Use for exploration and parallel read-only tasks.
- `opus` — Thorough, high-quality. Use for implementation and complex refactoring.

---

## PARALLEL vs SEQUENTIAL EXECUTION

**Run in PARALLEL** (multiple agents in single message):

- Multiple `Explore` background agents searching different areas
- Multiple `librarian` background agents fetching different docs
- **Read-only** operations that don't modify files

**Run SEQUENTIALLY** (one task at a time, wait for completion, use the same agent ID):

- Multiple `executor` agents modifying files (file conflicts!)
- Any task where agent B depends on agent A's output
- Tasks touching the same file or related files

**NEVER run multiple `executor` agents in parallel** — they will conflict on git operations (stash, checkout, commit).
**NEVER run `explorer` for complex tasks** - do it directly

---

## SKIP AGENTS FOR

- Single-line fixes (typos, obvious bugs) — do it directly
- Reading a specific file path you already know
- Simple git operations (status, diff, log)
- When you already have all needed context

---

## DO NOT ❌

- DO NOT EVER Fetch documentation yourself. Use `librarian` agent.
- DO NOT Implement significant code tasks yourself. Use `executor` agent. Unless told otherwise.
- DO NOT launch parallel `executor` agents (causes conflicts).
- DO NOT use `executor` for small tasks.

## DO ✅

- Use the agentic workflow.
- Give concise, specific, and unambiguous instructions to agents.
- Use the same agent ID fro sub agents.
- **ALWAYS** ask "Should I do it my self or launch an `executor`?

---

## IMPORTANT: Conventions

- **Feel lost?** README.md first — READ root + sub README.md files - `librarian` if need more context
- **Convex code?** - READ `.cursor\rules\convex_rules.mdc`
- **Next.js code** - LOAD `vercel-react-best-practices` skill
- **Design implementation** - LOAD `frontend-design` skill

## **CRITICAL** Rules I ALWAYS follow:

- I keep code well-organized withing subfolders with clear **separation** of concerns — 1 concern per file → subfolder + `index.ts` barrel
- I do not write code blindly; I plan, understand and execute after careful review
- I **ALWAYS** search for existing helpers/components before writing new ones (DRY)
- I flag bad decisions and suggest better alternatives.
