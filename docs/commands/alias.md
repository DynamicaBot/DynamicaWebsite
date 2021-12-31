---
sidebar_position: 2
---

# alias

The alias command allows you to shorten the name of a game in the channel's title. This can be helpful for shortening the names of some games or, if your group has another name they refer to a game by.

## add

The `/alias add` command adds a new alias. So if you were playing "F1 2021" `/alias add "F1 2021" "F1"` every time the channel name updates instead of `F1 2021` `F1` would appear.

:::warning

If an alias already exists for an activty it will always get replaced if you add a new alias with the same activity.

:::

:::info Options

- **activity** The exact name of the activity that you want to add an alias for.
- **alias** What you want to replace it with.

:::

## remove

This does exactly as you would expect, it removes an alias for a given activity. For example `/alias remove "F1 2021"` would remove the alias that we set before for `F1 2021`.

:::info Options

- **activity** The exact name of the activity that you want to delete the alias of.

:::

## list

Lists the aliases that you've created for the channel you are in.
