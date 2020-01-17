Corey Gumbs 

- [ ] Why would you use class component over function components (removing hooks from the question)?
You would use a class component over a functional component for those instances in which you need to hold and manipulate state. A class component allows you to set state and manipulate it. It also allows you to pass that state down to child components.
- [ ] Name three lifecycle methods and their purposes.
    3 lifecycle methods:
    
    1.constructor() -  the constructor method initializes all state to the state objecrt, before it is mounted to the Dom. 
    2.componentDidUpdate() -  this method is only called when an update to the component has been made. this is where we update state such as API requests data, or other forms of state changes so that the updated state is re-rendered to the dom.
    3. componentWillUnMount() -  this method is called when the component is unmounted from the dom. this method is important because this is where the cleanup happens. Typically eventlistners, subscriptions etc are removed during this methods execution to help maintain and improve component performance. 

- [ ] What is the purpose of a custom hook?
    The purpose of a custom hook is to adhere to DRY prinicpals. They create reusable code that can be used through out an app especailly as that app gets bigger over the course of developments.

- [ ] Why is it important to test our apps?
    It is important to test apps for a number of reasons, one to catch errors/issues when they happen, it helps to write clearer, more organized, concise, and functional code, it helps to address use case issues that can be predicted/prevented ahead of time and help better plan the design and usage of an application during development. 