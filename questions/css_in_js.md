---
title: "What is CSS in JS"
level: 3
category: "JS"
---
The JS is getting evolved everyday, now it supports the use of css inside the js templates. Libraries which supports CSS in JS are emotion, styled-components, etc ..
For example : 
```
import styled from 'react-emotion'
const Wrapper = styled("div")`
background: red;
`

render(){
    return <Wrapper>Hello</Wrapper>
}

```
In the above example the styled div is created which can be used inside a react component as a normal component.