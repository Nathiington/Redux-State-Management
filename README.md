# Redux State Management

Redux is used to manage the state of the application. The state is stored in a single object called the store. The store is immutable, meaning that it cannot be changed directly. Instead, the store is updated by dispatching actions. Actions are plain JavaScript objects that describe what happened. Actions are the only way to update the store. Actions are dispatched to the store using the `dispatch()` method. The store then calls the reducer function with the current state and the action. The reducer function returns the new state. The store is updated with the new state.

In this project we have a form as the landing page where the user enters their name and email and proceeds to the next page. On this page they can select a color of their choice. All of these actions are dispatched to the store and the store updates the state. The state is then passed to the components as props and the components are updated. A history of selected colors is also stored in the store and is displayed on the page so users can undo their last selection.

