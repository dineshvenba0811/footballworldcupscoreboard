# **The initial version **v1.0** of the program encompasses several key functionalities:**

**Match Initialization with a Countdown**: The match starts automatically after a 3-second countdown. It will get updated via "Start Game"  reducer function

**Dynamic Match Updates**: Various game events occur at random intervals throughout the match. These events trigger reducer actions that update the application state.
For instance, goals scored by either team are updated dynamically.

**Continuous Score Updates**: At random intervals, the match score is updated via the "Update Score" reducer action, ensuring real-time reflection of the game's progress.

**Match Termination Handling**: Upon the match's scheduled completion, the "Finish Game" reducer action is invoked to halt all ongoing updates and finalize the match.

**Post-Match Data Sorting**: After the match concludes, the accumulated match data undergoes sorting based on the total goals scored by each team, providing an organized summary of the game's outcome.


# In the second release **v2.0** of the football scorecard application, we've implemented the following features:

**Goal Tracking:** Users can now record and track the following goal-related information:

* Time at which a goal was scored
* Player who scored the goal
* Display of goal details, including scored time and player information

**Yellow Card Logging**: The application now allows users to log instances of yellow cards during the match, capturing:

* Player who received the yellow card
* Time at which the yellow card was issued
* Presentation of this information in the application's user interface

application screenshots are added in the screenshots folder.