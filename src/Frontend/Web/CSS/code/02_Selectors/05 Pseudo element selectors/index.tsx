import { H1, Para, Syntax, Table, Title } from "../../../../../../Backend/UI";

const PseudoElementSelectors = () => {
  return (
    <>
      <Title>Pseudo Elements Property in CSS</Title>
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

export default PseudoElementSelectors;

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
