import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      
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
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



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

export default Resume;
