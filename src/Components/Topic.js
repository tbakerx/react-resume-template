import React, { Component } from 'react';

class Topic extends Component {
  render() {

    if(this.props.data){
      var string = this.props.data.string.map(function(string){
        var name = string.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={string.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{string.id}</a>. {string.title}
        </div>
      })

      var ds = this.props.data.ds.map(function(ds){
        var name = ds.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={ds.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{ds.id}</a>. {ds.title}
        </div>
      })


      var recursion = this.props.data.ds.map(function(recursion){
        var name = recursion.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={recursion.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{recursion.id}</a>. {recursion.title}
        </div>
      })
     
      var tree = this.props.data.ds.map(function(tree){
        var name = tree.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={tree.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{tree.id}</a>. {tree.title}
        </div>
      }) 
      
      var fs = this.props.data.ds.map(function(fs){
        var name = fs.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={fs.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{fs.id}</a>. {fs.title}
        </div>
      }) 

      var backtracking = this.props.data.ds.map(function(backtracking){
        var name = backtracking.title.toLowerCase();
        name =name.replace(/\s+/g, '-');
        var url ="https://leetcode.com/problems/"+name+"/";
        return <div key={backtracking.id}>
          <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{backtracking.id}</a>. {backtracking.title}
        </div>
      })  
    
    }

    return (
      <section id="topic">
    <div className="row type">
         <div className="three columns header-col">
            <h1><span>String</span></h1>
         </div>
         <div className="nine columns main-col">
          {string}
        </div>
      </div>

      <div className="row type">
         <div className="three columns header-col">
            <h1><span>Disjoint set</span></h1>
         </div>
         <div className="nine columns main-col">
          {ds}
        </div>
      </div>

      <div className="row type">
         <div className="three columns header-col">
            <h1><span>recursion</span></h1>
         </div>
         <div className="nine columns main-col">
          {recursion}
        </div>
      </div>

      <div className="row type">
         <div className="three columns header-col">
            <h1><span>tree</span></h1>
         </div>
         <div className="nine columns main-col">
          {tree}
        </div>
      </div>

      <div className="row type">
         <div className="three columns header-col">
            <h1><span>BFS & DFS </span></h1>
         </div>
         <div className="nine columns main-col">
          {fs}
        </div>
      </div>

      <div className="row type">
         <div className="three columns header-col">
            <h1><span>backtracking</span></h1>
         </div>
         <div className="nine columns main-col">
          {backtracking}
        </div>
      </div>
   </section>
    );
  }
}

export default Topic;
