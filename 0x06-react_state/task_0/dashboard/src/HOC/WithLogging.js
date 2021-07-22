import React from 'react';


function withLogging(Component) {
    class withLogging extends React.Component {
        componentDidMount() {
            console.log(`Component ${getDisplayName(Component)} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${getDisplayName(Component)} is going to unmount`);
        }
        render(){
            return (
                <Component {...this.props}/>
            )
        }
    }

    withLogging.displayName = `withLogging(${Component.displayName || Component.constructor.name || "default"})`

    return withLogging;

}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default withLogging;