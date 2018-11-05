import React from "react"

class Home extends React.Component {
  render () {
    const { surveys } = this.props

    return (
      <React.Fragment>
        { Object.keys(surveys).map(key => {
          return (
            <div>
              <h1>{surveys[key].name}</h1>
              <p>{surveys[key].sid}</p>
            </div>
          )
        })}
      </React.Fragment>
    );
  }
}

export default Home
