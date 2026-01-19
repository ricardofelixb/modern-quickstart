---
name: convex-best-practices
description: Convex development guidelines and best practices. Use when writing Convex functions, queries, mutations, schemas, or reviewing Convex code. Triggers on tasks involving Convex backend development, real-time data, or database operations.
metadata:
  author: convex
  version: '1.0.0'
---

# Convex Best Practices

Comprehensive guidelines for building production-ready Convex applications covering function organization, query patterns, validation, TypeScript usage, error handling, and the Zen of Convex design philosophy.

## When to Apply

Reference these guidelines when:

- Writing new Convex functions (queries, mutations, actions)
- Designing database schemas
- Implementing real-time data patterns
- Reviewing Convex code for performance issues
- Setting up cron jobs or HTTP endpoints
- Handling file storage

## Documentation Sources

Fetch latest documentation before implementing:

- Primary: https://docs.convex.dev/understanding/best-practices/
- Error Handling: https://docs.convex.dev/functions/error-handling
- LLMs Context: https://docs.convex.dev/llms.txt

## Available Guides

| Guide                        | Description                      |
| ---------------------------- | -------------------------------- |
| `convex-best-practices.md`   | Core patterns and Zen of Convex  |
| `convex-functions.md`        | Query, mutation, action patterns |
| `convex-schema-validator.md` | Schema and validation patterns   |
| `convex-realtime.md`         | Real-time subscription patterns  |
| `convex-http-actions.md`     | HTTP endpoint patterns           |
| `convex-cron-jobs.md`        | Scheduled job patterns           |
| `convex-file-storage.md`     | File upload/storage patterns     |
| `convex-migrations.md`       | Database migration strategies    |
| `convex-security-audit.md`   | Security review checklist        |
| `convex-agents.md`           | AI agent integration patterns    |

## Quick Reference

### The Zen of Convex

1. **Convex manages the hard parts** - Let Convex handle caching, real-time sync, and consistency
2. **Functions are the API** - Design your functions as your application's interface
3. **Schema is truth** - Define your data model explicitly in schema.ts
4. **TypeScript everywhere** - Leverage end-to-end type safety
5. **Queries are reactive** - Think in terms of subscriptions, not requests

### Key Patterns

- Always define `returns` validators for functions
- Use indexes with `withIndex()` instead of `filter()`
- Make mutations idempotent to handle retries
- Use `ConvexError` for user-facing errors
- Organize functions by domain (users.ts, tasks.ts)

## How to Use

Read individual guide files for detailed explanations:

```
convex-best-practices/convex-functions.md
convex-best-practices/convex-schema-validator.md
convex-best-practices/convex-realtime.md
```
