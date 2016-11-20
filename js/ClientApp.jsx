const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle.jsx')

const MyFirstComponent = () => (
  <div>
    <MyTitle title='Props are great!' color='rebeccapurple' />
    <MyTitle title='Use props everywhere!' color='mediumaquamarine' />
    <MyTitle title='Props are the best!' color='peru' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
