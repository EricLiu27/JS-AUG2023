# Components

## Structure of a component 
#### Example code: platform -React/Components/Components
0. When creating the file, make sure the file follows PascalCase
1. Import React 
2. Create a function that takes in one parameter (props) and name it in PascalCase 
3. Inside the function, make sure you return one html element that wraps up everything (inside this element, you can have multiple elements)
4. export this component

## Props
- When rendering a component from a parent component, send down variables through props. 
```html 
<SomeComponent someProp="test" someOtherProp={ 67 } /> 
```
- All the variables would become key-value pair inside the props object
- If the value for the props is number/array/object, make sure you curly out the values as they are javascript, not html. 


## State
#### To use state, useState React hook is required.
1. To import useState
   ```js 
   import React, { useState } from 'react'; 
   ```
2. To set default state variables
    ```js 
    const [count, setCount] = useState(0) 
    // count is the variable for the data, 
    // setCount is the variable for the function to update state
    // 0 is the default value. useState is a function that would return an array
    ```
3. To updateState
    ```js 
    // State is immutable. In order to update it, you need to use setCount function to override it. count++ won't work. 
     setCount(count+1)
    ```

