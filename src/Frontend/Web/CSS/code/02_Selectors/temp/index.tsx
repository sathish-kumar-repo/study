import {
  Title,
  H1,
  H2,
  Para,
  Syntax,
  H3,
  Note,
  List,
  Table,
} from "../../../../../../Backend/UI";

const Selectors = () => {
  return (
    <>
      <Title>CSS Selectors</Title>

      <H1>Simple Selectors</H1>
      <H2>Element or Tag Selector</H2>
      <Syntax title="style.css" language="css" code={code1} />

      <H2>Class Selector</H2>
      <Syntax title="style.css" language="css" code={code2} />

      <H2>id Selector</H2>
      <Syntax title="style.css" language="css" code={code3} />

      <H2>Universal Selectors</H2>
      <Syntax title="style.css" language="css" code={code4} />

      <H2>Group Selectors</H2>
      <Syntax title="style.css" language="css" code={code5} />

      <H1>Combinators Selectors</H1>
      <H2>Descendant</H2>
      <Syntax title="style.css" language="css" code={code6} />

      <H2>Direct child</H2>
      <Syntax title="style.css" language="css" code={code7} />

      <H2>Adjacent siblings</H2>
      <Syntax title="style.css" language="css" code={code8} />

      <H2>General siblings</H2>
      <Syntax title="style.css" language="css" code={code9} />

      <H1>Attribute selectors</H1>
      <Para>
        In CSS, an attribute selector is a way to target elements based on the
        presence or value of their attributes. It allows you to select elements
        that have a specific attribute or apply styles to elements based on the
        attribute value. Attribute selectors are denoted by square brackets [ ]
        and can be used with various comparison operators.
      </Para>

      <H2>Select elements with a specific attribute:</H2>
      <Para>
        This selects all elements that have the specified attribute, regardless
        of its value. For example, [required] selects all elements that have the
        required attribute.
      </Para>
      <Syntax title="style.css" language="css" code={code10} />

      <H2>Select elements with a specific attribute and value:</H2>
      <Para>
        This selects elements that have the specified attribute and exactly
        match the attribute value. For example, [type=text] selects all elements
        with type="text".
      </Para>
      <Syntax title="style.css" language="css" code={code11} />

      <H2>
        Select elements with an attribute value starting with a specific string:
      </H2>
      <Para>
        This selects elements whose attribute value starts with the specified
        string. For example, [href^="https://"] selects all elements with an
        href attribute that starts with "https://".
      </Para>
      <Syntax title="style.css" language="css" code={code12} />

      <H2>
        Select elements with an attribute value ending with a specific string:
      </H2>
      <Para>
        This selects elements whose attribute value ends with the specified
        string. For example, [src$=".png"] selects all elements with a src
        attribute that ends with ".png".
      </Para>
      <Syntax title="style.css" language="css" code={code13} />

      <H2>
        Select elements with an attribute value containing a specific string:
      </H2>
      <Para>
        This selects elements whose attribute value contains the specified
        string. For example, [class*="active"] selects all elements with a class
        attribute that contains the string "active".
      </Para>
      <Syntax title="style.css" language="css" code={code14} />

      <H3>Some Example</H3>
      <Syntax title="style.css" language="css" code={code15} />

      <H3>Example in based anchor</H3>
      <Syntax title="style.css" language="css" code={code16} />

      <H1>Pseudo Class selectors</H1>
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

      <H2>Types</H2>
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

      <H2>Root</H2>
      <Para>The :root selector matches the document's root element.</Para>
      <Syntax title="style.css" language="css" code={code17} />

      <H2>first-child</H2>
      <Para>
        The :first-child CSS pseudo-class represents the first element among a
        group of sibling elements.
      </Para>

      <H2>last-child</H2>
      <Para>
        This :last-child selector matches every element that is the last child
        of its parent.
      </Para>
      <Note>
        This selector only select element, that element must have parents
      </Note>
      <Syntax title="style.css" language="css" code={code18} />

      <H2>Nth Child Nth Last Child</H2>
      <Para>
        This :nth-last-child(n) selector matches every element that is the nth
        child, regardless of type, of its parent, counting from the last child.
      </Para>
      <Syntax title="style.css" language="css" code={code19} />

      <H2>Nth of type Nth Last of type</H2>
      <Para>
        This :nth-last-of-type(n) selector matches every element that is the nth
        child, of a particular type, of its parent, counting from the last
        child.
      </Para>
      <Syntax title="style.css" language="css" code={code20} />

      <H2>Only Child</H2>
      <Para>
        This :only-child CSS pseudo-class represents an element without any
        siblings. This is the same as :first-child:last-child or
        :nth-child(1):nth-last-child(1), but with a lower specificity.
      </Para>
      <Note>Parent complusory</Note>
      <Syntax title="style.css" language="css" code={code21} />

      <H2>Only Of Type</H2>
      <Para>
        The :only-of-type pseudo-class represents an element that has a parent
        element and whose parent element has no other element children with the
        same expanded element name.
      </Para>
      <Note>Need Not parent</Note>
      <Syntax title="style.css" language="css" code={code22} />

      <H2>First Last Of Type</H2>
      <Para>
        This :last-of-type selector matches every element that is the last
        child, of a particular type, of its parent.
      </Para>
      <Note>Need not parent</Note>
      <Syntax title="style.css" language="css" code={code23} />

      <H2>Empty</H2>
      <Para>
        The :empty CSS pseudo-class represents any element that has no children.
        Children can be either element nodes or text (including whitespace).
      </Para>
      <Note>space is also character</Note>
      <Syntax title="style.css" language="css" code={code24} />
      <Syntax title="index.html" language="html" code={code25} />

      <H2>Not</H2>
      <Para>
        This :last-of-type selector matches every element that is the last
        child, of a particular type, of its parent.
      </Para>
      <Syntax title="style.css" language="css" code={code26} />
      <Syntax title="index.html" language="html" code={code27} />

      <H2>Lang</H2>
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

      <H2>Target</H2>
      <Para>
        This pseudo-class :target is used to style the target element of a URL
        containing a fragment identifier.
      </Para>
      <Syntax title="index.html" language="html" code={code31} />

      <H2>Forms</H2>
      <Para>
        This &lt;form&gt; element is a container for different types of input
        elements, such as: text fields, checkboxes, radio buttons, submit
        buttons, etc.
      </Para>
      <Syntax title="index.html" language="html" code={code32} />

      <H2>Is</H2>
      <Para>
        This is a keyword added to a selector that lets you style a specific
        part of the selected element(s).
      </Para>
      <Syntax title="index.html" language="html" code={code33} />

      <H1>Pseudo Elements Property in CSS</H1>
      <Para>
        This pseudo-element can be defined as a keyword which is combined to a
        selector that defines the special state of the selected elements. Unlike
        the pseudo-classes, this pseudo-elements are used to style the specific
        part of an element, whereas the pseudo-classes are used to style the
        element.
      </Para>

      <Table>
        <thead>
          <tr>
            <th>Selector</th>
            <th>used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>::after</td>
            <td>
              The insert something after the content of each &lt;p&gt; element
            </td>
          </tr>
          <tr>
            <td>::before</td>
            <td>
              The insert something before the content of each &lt;p&gt; element
            </td>
          </tr>
          <tr>
            <td>::first-letter</td>
            <td>The selects the first letter of each &lt;p&gt; element</td>
          </tr>
          <tr>
            <td>::first-line</td>
            <td>The selects the first line of each &lt;p&gt; element</td>
          </tr>
          <tr>
            <td>::selection</td>
            <td>
              he selects the portion of an element that is selected by a user
            </td>
          </tr>
          <tr>
            <td>::marker</td>
            <td>
              The ::marker pseudo-element selects the markers of list items.
            </td>
          </tr>
        </tbody>
      </Table>

      <Syntax title="index.html" language="html" code={code34} />
    </>
  );
};

export default Selectors;

var code34 = `
<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <title>Tutorials</title>
        <style>
            /* Placeholder */
            input::placeholder{
                color: teal;
            }
            /* Selection */
            p::selection{
                background-color: #222f3e;
                color: white;
            }
            /* First letter pseudo selectors */
            P::first-letter{
                font-size: 40px;
                font-weight: bold;
                color: red;
            }
            p::first-line{
                color: blue;
            }

            .box{
                background-color: #333;
                color: white;
                width: 300px;
                height: 100px;
                position: relative;
            }
            /* Before and after acts a element
            speciality, both before and after selectors styling individual
            before and after selectors inside block la irrukum(eg box)  
            position property do and style individual */
            .box::before{
                /* complusory content irrukanum may empty or some information */
                content:'';
                width: 100%;
                height: 20px;
                background-color: #ff4757;
                position: absolute;
                top:0;
                left: 0;
            }
            .box::after{
                /* complusory content irrukanum may empty or some information */
                content:'';
                width: 100%;
                height: 20px;
                background-color: #ff4757;
                position: absolute;
                bottom:0;
                left: 0;
            }
        </style>
    </head>
    
    <body>
        <h1>Pseudo element selectors</h1> 
        <div class="box">Pseudo elements</div>  

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ratione nesciunt quasi, earum quo veniam eligendi culpa in, reiciendis quas aperiam quam sint, corrupti dolorum iusto magnam officia! In, porro?
            </p>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ratione nesciunt quasi, earum quo veniam eligendi culpa in, reiciendis quas aperiam quam sint, corrupti dolorum iusto magnam officia! In, porro?
            </p>
      
            <input type="text" placeholder="Enter Name">
        </div>
        
        </div>
    </body>
</html>
`;
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
            /* d1 la irruka h2,h3,h3 select panuga d2 */

            /* Normal Method */
            #d1 h2,
            #d1 h3,
            #d1 h3{
                color: red;
            }

            /* Easy method */
            #d1 :is(h2,h3,h3){
                color: blue;
            }
            /* Other Task */
            /* d1 la irruka h2 and d2 la irruka h2 select panuga */
            
            /* Normal Method */
            #d1 h2,
            #d2 h2{
                color: green;
            }
            /* Easy method */
            :is(#d1,#d2) h2{
                color: brown;
            }

            /* Other new task */

            /* d1, d2 la irruka h2 and paragraph select panuga */
            :is(#d1,#d2) :is(h2,p){
                color: red;
            }
            /* Hover  */
            :is(#d1,#d2) h2:hover{
                color: chocolate;
            }
        </style>
    </head>
    
    <body>
        <h1>is() Pseudo Class Selector</h1>  
        <div id="d1">
            <h2>H2 - Heading One</h2>
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
            <h2>H2 - Heading Two</h2>
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
var code16 = `
a[title]{
    color: blanchedalmond;
}
a[title="Link-1"]{
    color: orange;
}

a[href]{
    color:aqua
}
a[href="test.png"]{
    color:aqua
}

/* start with text channge color(add symbol ^)  */
a[href^="test"]{
    color: blueviolet;
}
/* end with text channge color(add symbol ^)  */
a[href\$="#"]{
    color: red;
}
`;
var code15 = `
/* Attribute selectors */
div[class]{
    background: gray;
}
div[id]{
    background: gray;
}

/* in particular class or id */
div[class~="inner"]{
    background: gray;
}

/* suppose use multiple  */
/* For example -->inner and txt */
/* inner class property affected */
.txt{
    color: white;
}
/* solution is symbol ~ */
div[class~="inner"]{
    background: gray;
}
.txt{
    color: white;
}
`;
var code14 = `
[attribute*=value] {
    /* Styles applied to elements with the specified attribute value containing the given string */
}
`;
var code13 = `
[attribute\$=value] {
    /* Styles applied to elements with the specified attribute value ending with the given string */
}
`;
var code12 = `
[attribute^=value] {
    /* Styles applied to elements with the specified attribute value starting with the given string */
}
`;
var code11 = `
[attribute=value] {
    /* Styles applied to elements with the specified attribute and value */
}
`;
var code1 = `
h1{
    font-size: 30px;
}
`;
var code2 = `
.box{
    font-size: 30px;
}       
`;
var code3 = `
#one{
   font-size: 30px;
  }
`;
var code4 = `
*{
   margin: 0;
   padding: 0;
}
`;

var code5 = `
h1,h2,h3,h3,h5,h6,b{
    color:red;
    font-family:rockwell;
}
`;
var code6 = `
.box p{
    color: red;
}

.box p span{
     color: blue;
     font-weight: bold;
}
`;
var code7 = `
  .box > p{
      color: blue;
  }   
`;
var code8 = `
.box + p{
    color: blue;
}  
`;
var code9 = `
.box ~ p{
    color:red
}
`;
var code10 = `
[attribute] {
    /* Styles applied to elements with the specified attribute */
}
`;
