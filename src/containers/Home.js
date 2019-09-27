import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews } from '../actions';
import { bindActionCreators } from 'redux'


//component
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';
 class Home extends Component {

     componentDidMount(){
         this.props.latestNews();
         this.props.otherNews();
     }
    render() {
        return (
            <div>
              <LatestNews lastest={this.props.articles.lastest}/>
              <OtherNews otherNews={this.props.articles.other}/>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        articles:state.articles
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,OtherNews},dispatch)
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);