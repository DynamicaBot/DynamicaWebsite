---
sidebar_position: 6
---

# lock

Use it to lock your channels away from pesky server members.

## Add

`/lock add <role>` adds permission for a role to access a locked channel which, if not already locked will lock.

:::info Options

- **role** The role to add permissions for.

:::

## Remove

`/lock remove <role>` removes access (provided that you've given it and the channel is locked already).

:::info Options

- **role** The role to take permissions from. If not provided then lock is removed.

:::
