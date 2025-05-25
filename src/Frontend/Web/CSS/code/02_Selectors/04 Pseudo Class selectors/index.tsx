import {
  H1,
  H3,
  Para,
  Syntax,
  Note,
  List,
  Title,
} from "../../../../../../Backend/UI";

const PseudoClassSelectors = () => {
  return (
    <>
      <Title>Pseudo Class selectors</Title>
      <Para>
        A pseudo-class is used to define a special state of an element. Used for
      </Para>

      <List
        items={[
          "when a user mouses over it",
          "visited and unvisited links differently",
          "when it gets focus",
        ]}
      />
      <H3>Types</H3>
      <List
        type="ordered"
        items={[
          "root",
          "first-child",
          "last-child",
          "nth-child",
          "nth-of-type",
          "only-child",
          "only-of-child",
          "first-of-type",
          "last-of-type",
          "empty",
          "not",
          "Pseudo Class",
          "target",
          "attribute selector",
          "is",
        ]}
      />
      <H1>Root</H1>
      <Para>The :root selector matches the document's root element.</Para>
      <Syntax title="style.css" language="css" code={code17} />
      <H1>first-child</H1>
      <Para>
        The :first-child CSS pseudo-class represents the first element among a
        group of sibling elements.
      </Para>
      <H1>last-child</H1>
      <Para>
        This :last-child selector matches every element that is the last child
        of its parent.
      </Para>
      <Note>
        This selector only select element, that element must have parents
      </Note>
      <Syntax title="style.css" language="css" code={code18} />
      <H1>Nth Child Nth Last Child</H1>
      <Para>
        This :nth-last-child(n) selector matches every element that is the nth
        child, regardless of type, of its parent, counting from the last child.
      </Para>
      <Syntax title="style.css" language="css" code={code19} />
      <H1>Nth of type Nth Last of type</H1>
      <Para>
        This :nth-last-of-type(n) selector matches every element that is the nth
        child, of a particular type, of its parent, counting from the last
        child.
      </Para>
      <Syntax title="style.css" language="css" code={code20} />
      <H1>Only Child</H1>
      <Para>
        This :only-child CSS pseudo-class represents an element without any
        siblings. This is the same as :first-child:last-child or
        :nth-child(1):nth-last-child(1), but with a lower specificity.
      </Para>
      <Note>Parent complusory</Note>
      <Syntax title="style.css" language="css" code={code21} />
      <H1>Only Of Type</H1>
      <Para>
        The :only-of-type pseudo-class represents an element that has a parent
        element and whose parent element has no other element children with the
        same expanded element name.
      </Para>
      <Note>Need Not parent</Note>
      <Syntax title="style.css" language="css" code={code22} />
      <H1>First Last Of Type</H1>
      <Para>
        This :last-of-type selector matches every element that is the last
        child, of a particular type, of its parent.
      </Para>
      <Note>Need not parent</Note>
      <Syntax title="style.css" language="css" code={code23} />
      <H1>Empty</H1>
      <Para>
        The :empty CSS pseudo-class represents any element that has no children.
        Children can be either element nodes or text (including whitespace).
      </Para>
      <Note>space is also character</Note>
      <Syntax title="style.css" language="css" code={code24} />
      <Syntax title="index.html" language="html" code={code25} />
      <H1>Not</H1>
      <Para>
        This :last-of-type selector matches every element that is the last
        child, of a particular type, of its parent.
      </Para>
      <Syntax title="style.css" language="css" code={code26} />
      <Syntax title="index.html" language="html" code={code27} />
      <H1>Lang</H1>
      <Para>
        The :lang() pseudo class selector in CSS matches elements based on the
        context of their given language attribute.
      </Para>
      <Syntax title="style.css" language="css" code={code28} />
      <Syntax title="index.html" language="html" code={code29} />
      <H1>Pseudo Class</H1>
      <Para>
        Pseudo-classes is a way to describe the state of the link or it gives
        effect to the anchor tag &lt;a&gt;. A user can show a link whether it
        has been visited by them previously or it is in a running state, We can
        also change the cursor sign when the mouse is over
      </Para>
      <Syntax title="style.css" language="css" code={code30} />
      <H1>Target</H1>
      <Para>
        This pseudo-class :target is used to style the target element of a URL
        containing a fragment identifier.
      </Para>
      <Syntax title="index.html" language="html" code={code31} />
      <H1>Forms</H1>
      <Para>
        This &lt;form&gt; element is a container for different types of input
        elements, such as: text fields, checkboxes, radio buttons, submit
        buttons, etc.
      </Para>
      <Syntax title="index.html" language="html" code={code32} />
      <H1>Is</H1>
      <Para>
        This is a keyword added to a selector that lets you style a specific
        part of the selected element(s).
      </Para>
      <Syntax title="index.html" language="html" code={code33} />
    </>
  );
};

export default PseudoClassSelectors;

var code33 = `
<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <title>Tutorials</title>
        <style>
            #d1{
                background-color: aliceblue;
            }
            #d2{
                background-color: antiquewhite;
            }
            /* Now task */
            /* d1 la irruka h1,h3,h3 select panuga d2 */

            /* Normal Method */
            #d1 h1,
            #d1 h3,
            #d1 h3{
                color: red;
            }

            /* Easy method */
            #d1 :is(h1,h3,h3){
                color: blue;
            }
            /* Other Task */
            /* d1 la irruka h1 and d2 la irruka h1 select panuga */
            
            /* Normal Method */
            #d1 h1,
            #d2 h1{
                color: green;
            }
            /* Easy method */
            :is(#d1,#d2) h1{
                color: brown;
            }

            /* Other new task */

            /* d1, d2 la irruka h1 and paragraph select panuga */
            :is(#d1,#d2) :is(h1,p){
                color: red;
            }
            /* Hover  */
            :is(#d1,#d2) h1:hover{
                color: chocolate;
            }
        </style>
    </head>
    
    <body>
        <h1>is() Pseudo Class Selector</h1>  
        <div id="d1">
            <h1>H1 - Heading One</h1>
            <h3>H3 - Sub Heading - 1</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe a hic consectetur! Eum quam molestiae cumque tenetur sapiente cupiditate perferendis excepturi odio nulla dignissimos. Cupiditate deserunt accusamus ratione odio!
            </p>
            <h3>H3 - Sub Heading - 2</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit corrupti expedita itaque veniam voluptatem ut, iste numquam illo quidem, omnis adipisci nostrum temporibus amet! Quo, officia! Deleniti, fuga facere.
            </p>
        </div>
        <hr>
        <div id="d2">
            <h1>H1 - Heading Two</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis error animi, ut laborum porro nostrum eos eveniet deleniti, provident vel veniam consequatur! Eveniet, architecto quos! Tempore dolorum doloribus consequatur nihil?
            </p>
        </div> 
        <!-- This para is outside therefore cannot do any thing -->
        <p>
            <b>Outside</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem alias? Impedit fugit, nam velit cum quidem blanditiis corrupti officia reprehenderit vitae repellendus, laudantium ducimus voluptas praesentium ratione unde adipisci.
        </p>
    </body>
</html>
`;
var code32 = `
<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <title>Tutorials</title>
        <style>
            /* Focus */
            #txt:focus{
                outline: none;
                border: 1px solid brown;
            }

            /* checkbox is tick then work */
            input[type="checkbox"]:checked{
                /* Border cannot change */
                box-shadow: 0 0 0 3px red;
            }

            /* enabled */
            input[type="text"]:enabled{
                background-color: pink;
            }

            /* Disabled */
            input[type="text"]:disabled{
                background-color: red;
            }

            /* required */
            input[type="text"]:required{
                background-color: green;
            }

            /*Read write  */
            input[type="email"]:read-only{
                background-color: gray;
            }

            /*Read only  */
            input[type="email"]:read-write{
                background-color: plum;
            }

            /* invalid */
            input[type="text"]:invalid{
                border-color: red;
            }

            /* valid */
            input[type="text"]:valid{
                border-color: rgb(15, 225, 15);
            }

            /* Default in radiobutton */
            input[type="radio"]:default{
                box-shadow: 0 0 0 3px green;
            }
            
            /* this selector also use in select option */
            /* Select default option */
            option:default{
                color: red;
            }
/* ************************************************************************ */
            hr{
                border: 2px solid black;
                margin: 20px 0;
            }

        </style>
    </head>
    
    <body>
        <h1>Form CSS Pseudo Class Selector</h1>

        <span>:focus</span>
        <input type="text" id="txt">
        <hr>
        <!-- ------------------------------------------------- -->

        <span>:checked</span>
         <input type="checkbox" id="cricket">
         <label for="cricket">Cricket</label>
         <input type="checkbox" id="football">
         <label for="football">Football</label>
         <input type="checkbox" id="tennis">
         <label for="tennis">Tennis</label>
         <!-- for attrribute is important for attribut la entha element target panirigalo atha kudukanum-->
         <hr>
         <!-- ------------------------------------------------- -->

         <span>:enabled :disabled :required :optional</span>
         <br>
         <input type="text"> <!--enabled is default-->
         <br>
         <input type="text" disabled>
         <br>
         <input type="text" required>
         <br>
        <hr>
        <!-- ------------------------------------------------- -->

         <span>:read-only :read-write</span>
         <br>
         <input type="email" >   <!--read-write is default-->
         <br>
         <input type="email" readonly>
         <hr>
         <!-- ------------------------------------------------- -->

         <span>:valid :invalid</span>
         <br>
        <input type="text" placeholder="Enter Username" pattern="[a-z]*"> <!--Regular expression (pattern) -->
        <hr>
        <!-- ------------------------------------------------- -->

        <span>Default</span>
        <br>
        <input type="radio" name="gender" id="male" checked>
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female">
        <label for="female">Female</label>
        <hr>
        <!-- ------------------------------------------------- -->

        <select >
            <option value="">select</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="CSS" selected >CSS</option>
        </select>
    </body>
</html>
`;
var code31 = `
<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <title>Tutorials</title>
        <style>
            p{
                padding: 10px;
                background-color: aliceblue;
            }
            p:target{
                background-color: aquamarine;
                color: blue;
            }
        </style>
    </head>
    
    <body>
        <h1>Target</h1>
        <a href="#para-1">para-1</a>
        <a href="#para-2">para-2</a>
        <a href="#para-3">para-3</a> 
        <p id="para-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non quas quaerat corrupti aspernatur, tempore est dicta deleniti obcaecati, ducimus odit, id magni? Earum magnam ullam molestiae expedita odio ea.</p>  
        <p id="para-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non quas quaerat corrupti aspernatur, tempore est dicta deleniti obcaecati, ducimus odit, id magni? Earum magnam ullam molestiae expedita odio ea.</p>  
        <p id="para-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non quas quaerat corrupti aspernatur, tempore est dicta deleniti obcaecati, ducimus odit, id magni? Earum magnam ullam molestiae expedita odio ea.</p>  
    </body>
</html>
`;
var code30 = `
a:link{
  color:green;
}
a:hover{
  background-color: teal;
  color:white;
}
a:active{
   color:orangered;
}
a:visited{
   color:darkred;
}
`;
var code29 = `
\<p lang="en">computer an electronic machine that can store, find and arrange information, calculate amounts and control other machines.</p>

<p lang="fr">ordinateur une machine électronique capable de stocker, de trouver et d'organiser des informations, de calculer des montants et de contrôler d'autres machines.</p>

<p lang="en">Tutor Joes</p>
`;
var code28 = `
  p:lang(fr){
    color:blueviolet;
  }
  p:lang(en){
    color:red;
  }
`;
var code27 = `
\<p class="para">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
<p class="para">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
</p>
`;
var code26 = `
p.para{
  color:blue;
}
p:not(.para){
  color:red;
}
`;
var code25 = `
  \<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem soluta fugiat harum, veritatis consequuntur!</p>
   <p></p>
`;
var code24 = `
p:empty{
    padding: 10px;
    border: 2px solid goldenrod;
}  
`;
var code23 = `
li:first-of-type{
  color:red;
}
li:last-of-type{
  color:green;
}
p:first-of-type{
  color:red;
}
p:last-of-type{
  color:green;
}
`;
var code22 = `
p:only-of-type{
  color: brown;
}
`;
var code21 = `
li:only-child{
  color:red;
}
`;
var code20 = `
p:nth-of-type(1){
  color:red;
}
p:nth-last-of-type(1){
  color:blue;
}

li:nth-of-type(1){
  color:red;
}
li:nth-last-of-type(1){
  color:blue;
}

.l2 li:nth-of-type(odd){
  color:purple;
}
.l2 li:nth-of-type(even){
  color:green;
}
`;
var code19 = `
#l1 li:nth-child(5){
  color:red;
  font-weight: bold;
}
/*
    n=0,1,2,3,4
    2n
      2*0=0
      2*1=2
      2*2=4
      2*3=6
    2n+1
      (2*0)+1=1
      (2*1)+1=3
      (2*2)+1=5
      (2*3)+1=7
    3n-1
      (3*0)-1=0
      (3*1)-1=2
      (3*2)-1=5
      (3*3)-1=8
*/
#l2 li:nth-child(3n-1){
  color:navy;
  font-weight: bold;
}
#l2 li:nth-last-child(5){
  color:orange;
  font-weight: bold;
} 
`;
var code18 = `
#list-1 li:first-child{
  color:blue;
}

li:last-child{
  color:red;
}

p:first-child{
  color:orangered;
}
p:last-child{
  color:brown;
  font-weight: bold;
}
`;
var code17 = `
:root{
  --bgcolor:aliceblue;
  --color:teal;
}
h1{
  color:var(--color);
}
`;
