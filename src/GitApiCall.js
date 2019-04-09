
import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {

	getreddit(){
		axios.get('https://www.reddit.com/r/space.json')
		.then(res=>{
			let posts = res.data.data.children.map(obj=>
               obj.data 
			);
         this.setState({posts});
		});
			
	}

componentWillMount() {
this.getreddit();
}

  constructor(props){
  	super(props);
  	this.state = {
  		posts:[],
  		subr:'space'
  	};

  	this.getreddit.bind(this);
  }

  render() {
    return (
      <div>
             
<h1>{this.state.subr}</h1>

<ul>
{this.state.posts.map(post=> 
	<li key={post.id}>{post.title}</li>)}}
</ul>

      </div>
    );
  }
}

export default Api;
