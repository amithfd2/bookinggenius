import React from 'react'

class SearchForm extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="srch-otr">
              <div className="sub-input">
                <input type="text" placeholder="Search Talent" />
                <span className="submit-btn">
                  <button type="submit">SEARCH</button>
                </span>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm
