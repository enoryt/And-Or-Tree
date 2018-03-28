import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'tree-view',
    template: `
    <form>
    <div class="clt">
    <ul>
        

        <li *ngFor="let node of treeData" >

            <div *ngIf="node.id==1"><button>Submit</button> <span (click)="resetCount(node);getNumberOfNodes(node)">Get Total Nodes</span>
            <span (click)="resetCount(node)">resetCount</span>
            </div>

            <span *ngIf="node.children?.length && node.parent==true" (click)="toggleChildren(node)">[+]</span>
            <span *ngIf="node.parent==true" (click)="removeChild(node)" class="c2">Remove </span>
            <span *ngIf="node.parent==true">|</span>

            <span *ngIf="node.type=='AND' && node.parent==true" (click)="addOrChild(node)" class="c1"> Add </span>
            <span *ngIf="node.type=='OR' && node.parent==true" (click)="addAndChild(node)" class="c1"> Add </span>
            <span *ngIf="node.parent==true">|</span>

            <span *ngIf="node.parent==true" (click)="renameNode(node,newName.value)" > Click to here to Rename 
            <input type="text" name="rename" size=5 #newName> </span>
            
            
            <span *ngIf="node.type=='OR' && node.parent==true">
             <h2 class="col">OR | {{node.name}}</h2>  
                
            </span>
            
            <span *ngIf="node.type=='AND' && node.parent==true">
              <h2>AND {{node.name}}</h2>
               
            </span>


            <tree-view [treeData]="node.children" *ngIf="node.visible"></tree-view>
        </li>
    </ul>
    </div>
    </form>
    `,
    styleUrls: ['app/tree.component.css']
})

export class TreeView {
    @Input() treeData: any[];
    @Output() notify: EventEmitter<number> =new EventEmitter<number>();
    //tree:any[];
    //n:any[];
    static count:number=0;
    checker:number=0;
   
    
    toggleChildren(node:any) {
      node.visible = !node.visible;
    }
    removeChild(node:any){
      node.children=[];
      node.parent=!node.parent;
      TreeView.count=0;
      //console.log(TreeView.count);
      
    }
    addOrChild(node:any){
      node.children.push({ id: 17, name: 'NewChild',type:"OR",visible: true,parent:true , children:[]}) ;
    }
    addAndChild(node:any){
      node.children.push({ id: 17, name: 'NewChild',type:"AND",visible: true,parent:true , children:[]}) ;
    }
    renameNode(node:any, String){
          node.name=String;
    }
    getNumberOfNodes(node:any){

      console.log(TreeView.count);
    
      if(node.children.length==0){
          return;
      }
      var i=0;
       node=node.children
       
      for(i=0;i<node.length;i++) {
         
        this.getNumberOfNodes(node[i]);
        
        if(node[i].parent==true){
          console.log('Test');
          TreeView.count=TreeView.count+1;
        }
        
    }
    this.notify.emit(TreeView.count);
    }
    resetCount(node:any){
        TreeView.count=0;
        this.notify.emit(TreeView.count);
    }
}
