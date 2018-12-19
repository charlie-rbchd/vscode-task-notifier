# Task Notifier

Task Notifier is a Visual Studio Code extension that pops a system notification upon task completion. The days where you had compulsively switch between your editor and some kind of entertainment while building are over!

## Requirements

On most platforms, the native notifications will be used and will fallback on Growl when they are no native notification system is available. You should install Growl if you are running a macOS version older than 10.8 or a version of Windows older than 8.

On Linux, notify-osd and libnotify-bin need to be installed (should be installed by default on Ubunutu).

## Known Limitations

Notifications are currently not configurable and pop systematically on task completion. Perhaps more notification triggers will be added in the future.
