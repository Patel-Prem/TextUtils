import React from 'react'

export default function ThemeMode(props) {
  return (
    <div style={{position: 'fixed', bottom: '10px', left: '5px'}}>
        <div className="form-check form-switch"> 
            <input className="form-check-input" type="checkbox" role="switch" id="themeColor" onChange={props.toggleThemeColor}/>
            {/* <label className="form-check-label" htmlFor="themeColor" style={{color: props.colorAndTheme.toggleColor}}>Enable Dark Mode</label> */}
          </div>
    </div>
  )
}
