var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great', color: 'red'}),
    MyTitleFact({title: 'it passed from this'}),
    MyTitleFact({title: 'it still passed by giving inline comment'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
