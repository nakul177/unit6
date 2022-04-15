import React from 'react'
import styled from 'styled-components'

const TagDiv = styled.div`
    padding: 25px;
    border: 1px black solid;
`
export const TagsStatus = ({todos}) => {
  return (
<TagDiv>
    <div>ALL - {todos.length}</div>
    <div>Personal - {todos.filter((item) => item.tags.personal).length}</div>
    <div>Official -  {todos.filter((item) => item.tags.official).length}</div>
    <div>Others -  {todos.filter((item) => item.tags.others).length}</div>
</TagDiv>
  )
}
