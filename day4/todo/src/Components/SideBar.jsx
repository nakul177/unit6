import React from 'react'
import { Profile } from './Profile'
import { TagsStatus } from './TagsStatus'
import {useDispatch}  from 'react-redux'
import {Logout} from "../Redux/Login/action"

export const SideBar = ({token , username , todos}) => {
    const disptach = useDispatch()
  return (
    <div>
        <Profile token={token} username={username} />
        <hr />
        <TagsStatus todos={todos}/>
        <hr />
        <br />
        <button onClick={() => disptach(Logout())}>LOGOUT</button>
    </div>
  )
}
