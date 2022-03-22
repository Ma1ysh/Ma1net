Functional block (letter, course, used, parent, code) { 
this letter;  
this.rate rate; 
this.used used;  
this is the father of the father;  
code this.code;  
} 

function Find code (block) {

 if (trpe [block. Parent] .code 1 = '') {
 block.code-tree [block.  father] .code + '1';  
} 
 else{
 if (block.letter-tree [minIndex] .letter) {
    block.code = '0';  
 } 
     else if (block.letter = tree [preminIndex] .letter) {
   block.code = '1'; 
 }
    else { 
  FindCode (tree [block.father]); 
  block.code-tree [block.father].code + '0';
  }
 }
}
