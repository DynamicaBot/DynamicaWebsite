---
sidebar_position: 3
---

# Formatting

Formatting appears in a few different commands, namely:

- `name`
- `template`
- `general`

There are a few different variables you can put in that will replace normal text.

## Activity

One of the coolest features of the bot is changing the channel name to the current activity. If you want to edit the template simply use `@@game@@` to insert the games that are currently being played.

## Numbers

Number formatting changes depending on what channel number you're in.

### Default Formatting

By default the channel template is `@@game@@ ##`. The `##` is replaced by the channel number in a normal format of `#1`.

### Nato Formatting

If you use the string `@@nato@@` in a channel name it will be replaced by the equivalent Nato code for the channel number. For example, if the channel was channel number `5` it would be replaced with `Echo` and with channel number `1` it would be `Alpha`.

### Precision Formatting

The string `###` will be replaced by the channel number (`1` in this case) in this format: `1.0`.
