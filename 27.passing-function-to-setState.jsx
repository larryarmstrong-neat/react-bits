/**
 * Passing a function to setState
 *
 * Here’s the dirty secret about setState — it’s actually asynchronous.
 * React batches state changes for performance reasons, so the state may not change immediately after setState is called.
 * That means you should not rely on the current state when calling setState — since you can’t be sure what that state will be!
 * Here’s the solution — pass a function to setState, with the previous state as an argument.
 * Doing so avoids issues with the user getting the old state value on access (due to the asynchrony of setState)
 *
 * https://medium.com/javascript-scene/setstate-gate-abc10a9b2d82
 */

// Problem
// assuming state.count === 0
this.setState({count: state.count + 1});
this.setState({count: state.count + 1});
this.setState({count: state.count + 1});
// state.count === 1, not 3

// Solution
this.setState((prevState, props) => ({
  count: prevState.count + props.increment
}));


// VARIATIONS

// Passing object
this.setState({ expanded: !this.state.expanded });

// Passing function
this.setState(prevState => ({ expanded: !prevState.expanded }));