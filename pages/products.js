import React, { Component } from 'react'
import { config } from 'react-spring/renderprops.cjs'
import Grid from '../components/products/Grid'
import { Slug, Fade } from '../components/products/pri'
import data from '../components/products/data'



class Cell extends Component {
  render() {
    const { toggle, name, description, url, active,src } = this.props
    console.log(url)
    return (
      <div
        className="cell"
        style={{ backgroundImage:`url(${url})`,backgroundSize:active?"contain":"cover",backgroundRepeat:"no-repeat", cursor: !active ? 'pointer' : 'auto' ,height:active&&"100vh",maxHeight:active&&"100vh",backgroundPosition:"center"}}
        onClick={!active ? toggle : undefined}>


      
      
      </div>
    )
  }
}

export default class App extends Component {
  state = { data }
  render() {
    return (
      <Grid
        className="grid"
        
        // Arbitrary data, should contain keys, possibly heights, etc.
        data={this.state.data}
        // Key accessor, instructs grid on how to fet individual keys from the data set
        keys={d => d.name}
        // Can be a fixed value or an individual data accessor
        heights={d => d.height}
        // Number of columns
        columns={2}
        // Space between elements
        margin={30}
        // Removes the possibility to scroll away from a maximized element
        lockScroll={false}
        // Delay when active elements (blown up) are minimized again
        closeDelay={500}
        // Regular react-spring configs
        config={config.slow}>
        {(data, active, toggle) => (
          [
            <div className={`closeButton ${!active&&"notshow"}`} onClick={toggle}>Close</div>,
            <Cell {...data} active={active} toggle={toggle}  />
          ]
         
        )}
      </Grid>
    )
  }
}


/**
 * 
 *       <Fade show={active} delay={active ? 500 : 0}>
            
              <div className="details">
              <div className="close" onClick={toggle}>
                  X 
                  </div>
            
                <Slug delay={600}>
                  <div className="circle"  />
                
                  <h1 className="pn">{name}</h1>
                  <p className="pp">{description}</p>
                </Slug>
              </div>
            </Fade>
 * 
 */