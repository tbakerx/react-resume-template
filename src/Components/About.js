import React, { Component } from 'react';

class About extends Component {

  render() {
    if(this.props.data){
      var name = "Akuna";
      var companylist = ['Akuna', 'Audible','bloomberg']
      var qlist=[]

       
      var akuna= this.props.data['Akuna'];

      var q = akuna.questions
      
      var block= q.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })


       var name = "Akuna";
       //var akuna = this.props.data[`${name}`];
 
       var companylist = ['Akuna', 'Audible','Bloomberg']

       var akuna = this.props.data['Akuna'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })

       var audible = this.props.data['Audible'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       }) 
       var bloomberg = this.props.data['Bloomberg'].questions.map(function(n){
         var name = n.title.toLowerCase();
         name =name.replace(/\s+/g, '-');
         var url ="https://leetcode.com/problems/"+name+"/";
         return <div key={n.id}>
           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
         </div>
       })
       
       //  for(const company of companylist){
      //     var c= this.props.data[company];
      //     console.log(c)
      //     var q = c.questions
      //     console.log(q)
      //     var block= q.map(function(n){
      //        var name = n.title.toLowerCase();
      //        name =name.replace(/\s+/g, '-');
      //        var url ="https://leetcode.com/problems/"+name+"/";
      //        return <div key={n.id}>
      //           <a title="Styleshout" href={url} target="_blank" rel="noreferrer noopener">{n.id}</a>. {n.title}
      //           </div>
      //     })

      //     qlist.push(block)
 
      //  }
      //  console.log(qlist[0])
    }

    return (
      <section id="about">
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Akuna</span></h2>
            </div>
            <div className="nine columns main-col">
               {akuna}
            </div>
         </div>

         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Audible</span></h2>
            </div>
            <div className="nine columns main-col">
               {audible}
            </div>
         </div> 
         <div className="row type">
            <div className="three columns header-col">
               <h2><span>Bloomberg</span></h2>
            </div>
            <div className="nine columns main-col">
               {bloomberg}
            </div>
         </div>
         

   </section>
    );
  }
}

export default About;
