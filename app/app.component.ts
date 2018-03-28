import { Component } from '@angular/core';
import { TreeView } from './tree.component';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  
   
//r=Math.floor(Math.random()*3)+1;
r=1;
    num:number=20;
    onNotifyClicked(n:number){
      this.num=n+1;
    }
    
   nodes = [
    {
      id: 1,
      name: 'root1',
      type: 'OR',
      visible: true,parent:true,
      children: [
        { id: 2, name: 'child1',type: 'AND', visible: true, parent:true,
            children: [
            { id: 4, name: 'child1.1',type: 'OR',visible: true,parent:true,
                children: [{ id: 10, name: 'child1.1.1',type: 'AND',visible: true,parent:true,
                                  children: [{ id: 12, name: 'child1.1.1.1',type: 'OR',visible: false,parent:true,children:[]},
                                             { id: 13, name: 'child1.1.1.2',type: 'OR',visible: false,parent:true,children:[]},
                                             { id: 14, name: 'child1.1.1.3',type: 'OR',visible: false,parent:true,children:[]} ]
                           
                           },
                           { id: 11, name: 'child1.1.2',type: 'AND',visible: true, parent:true,
                                  children: [{ id: 15, name: 'child1.1.2.1',type: 'OR',visible: false,parent:true,children:[]},
                                             { id: 16, name: 'child1.1.2.2',type: 'OR',visible: false,parent:true,children:[]},
                                             { id: 17, name: 'child1.1.2.3',type: 'OR',visible: false,parent:true,children:[]} ] 
                           
                           }]

            },
            { id: 5, name: 'child1.2',type: 'OR',visible: true,parent:true,
                  children: [{ id: 18, name: 'child1.2.1',type: 'AND',visible: false,parent:true,children:[]},
                             { id: 19, name: 'child1.2.2',type: 'AND',visible: false,parent:true,children:[]},
                             { id: 20, name: 'child1.2.3',type: 'AND',visible: false,parent:true,children:[]}]
             },
            { id: 6, name: 'child1.3',type: 'OR',visible: true,parent:true,children:[] }
          ] 
    },
       { id: 3, name: 'child2',type: 'AND', visible: true,parent:true,
             children: [
            { id: 7, name: 'child2.1',type: 'OR',visible: false,parent:true,children:[] },
            { id: 8, name: 'child2.2',type: 'OR',visible: false,parent:true,children:[] },
            { id: 9, name: 'child2.3',type: 'OR',visible: false,parent:true,children:[] }
          ] 
        
        } 
      ]
    },
    
  ];
  nodes2 = [
    {
      id: 1,
      name: 'root1',
      type: 'OR',
      visible: true,
      children: [
        { id: 2, name: 'child1',type: 'AND', visible: true, 
            children: [
            { id: 4, name: 'child1.1',type: 'OR',visible: false,
                children: [{ id: 10, name: 'child1.1.1',type: 'AND',visible: false,
                                  children: [{ id: 12, name: 'child1.1.1.1',type: 'OR',visible: false,children:[]},
                                             { id: 13, name: 'child1.1.1.2',type: 'OR',visible: false,children:[]},
                                             { id: 14, name: 'child1.1.1.3',type: 'OR',visible: false,children:[]} ]
                           
                           },
                           { id: 11, name: 'child1.1.2',type: 'AND',visible: true, 
                                  children: [{ id: 15, name: 'child1.1.2.1',type: 'OR',visible: false,children:[]},
                                             { id: 16, name: 'child1.1.2.2',type: 'OR',visible: false,children:[]},
                                             { id: 17, name: 'child1.1.2.3',type: 'OR',visible: false,children:[]} ] 
                           
                           }]

            },
            { id: 5, name: 'child1.2',type: 'OR',visible: false,
                  children: [{ id: 18, name: 'child1.2.1',type: 'AND',visible: false,children:[]},
                             { id: 19, name: 'child1.2.2',type: 'AND',visible: false,children:[]},
                             { id: 20, name: 'child1.2.3',type: 'AND',visible: false,children:[]}]
             },
            { id: 6, name: 'child1.3',type: 'OR',visible: false,children:[] }
          ] 
    },
       { id: 3, name: 'child2',type: 'AND', visible: false,
             children: [
            { id: 7, name: 'child2.1',type: 'OR',visible: false,children:[] },
            { id: 8, name: 'child2.2',type: 'OR',visible: false,children:[] },
            { id: 9, name: 'child2.3',type: 'OR',visible: false,children:[] }
          ] 
        
        } 
      ]
    },
    
  ];
  nodes3 = [
    {
      id: 1,
      name: 'root1',
      type: 'OR',
      visible: true,
      children: [
        { id: 2, name: 'child1',type: 'AND', visible: false, 
            children: [
            { id: 4, name: 'child1.1',type: 'OR',visible: false,
                children: [{ id: 10, name: 'child1.1.1',type: 'AND',visible: false,
                                  children: [{ id: 12, name: 'child1.1.1.1',type: 'OR',visible: false,children:[]},
                                             { id: 13, name: 'child1.1.1.2',type: 'OR',visible: false,children:[]},
                                             { id: 14, name: 'child1.1.1.3',type: 'OR',visible: false,children:[]} ]
                           
                           },
                           { id: 11, name: 'child1.1.2',type: 'AND',visible: true, 
                                  children: [{ id: 15, name: 'child1.1.2.1',type: 'OR',visible: false,children:[]},
                                             { id: 16, name: 'child1.1.2.2',type: 'OR',visible: false,children:[]},
                                             { id: 17, name: 'child1.1.2.3',type: 'OR',visible: false,children:[]} ] 
                           
                           }]

            },
            { id: 5, name: 'child1.2',type: 'OR',visible: false,
                  children: [{ id: 18, name: 'child1.2.1',type: 'AND',visible: false,children:[]},
                             { id: 19, name: 'child1.2.2',type: 'AND',visible: false,children:[]},
                             { id: 20, name: 'child1.2.3',type: 'AND',visible: false,children:[]}]
             },
            { id: 6, name: 'child1.3',type: 'OR',visible: false,children:[] }
          ] 
    },
       { id: 3, name: 'child2',type: 'AND', visible: false,
             children: [
            { id: 7, name: 'child2.1',type: 'OR',visible: false,children:[] },
            { id: 8, name: 'child2.2',type: 'OR',visible: false,children:[] },
            { id: 9, name: 'child2.3',type: 'OR',visible: false,children:[] }
          ] 
        
        } 
      ]
    },
    
  ];
 }
