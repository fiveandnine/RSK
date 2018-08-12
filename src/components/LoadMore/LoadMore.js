import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class LoadMore extends Component {
  static propTypes = {

  };
  constructor(props) {
    super(props)
  }

  render() {
    const {needDragRefresh, needDragLoading, hasMore,isLoading} = this.props;
    return (
      <div>
        { needDragRefresh && <div ref="dragArea" className="tip">{tip}</div>}
        <div>
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
        {isLoading ? <span>加载中...</span> : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
        {hasMore ? <span>么有更多</span> : ''}
      </div>
    )
  }
}
