import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idname, classNames) => function HOC() {
  return (
    <div id={idname} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
        </div>
        <NavigationDots active={idname} />
    </div>
  )
}

export default AppWrap