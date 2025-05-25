import {
  H1,
  H2,
  H3,
  List,
  Para,
  Title,
  Table,
  Space,
  HL,
  Note,
} from "../../../../../Backend/UI";

const Units = () => {
  return (
    <>
      <Title>Type of units in CSS</Title>
      <Para>
        Every property like margin, padding, height, width, font-size, etc in
        CSS that has some dimensions or length needs a unit. CSS provides us
        with lots of units, some of whose values are fixed and are called
        absolute units while there are others whose values are relative to other
        values like that of the parent element’s or to the default value for
        that particular HTML element, these are called relative units.
      </Para>

      <H1>Absolute units</H1>
      <List
        items={[
          "centimeter",
          "millimeter",
          "inches",
          "pixel",
          "point",
          "picas",
        ]}
      />
      <Para>
        These units are the ones whose values are fixed irrespective of any
        other factors like parent element or viewing window i.e the screen size
        won't affect the size of the element.
      </Para>

      <H2>CSS - px</H2>
      <Para>
        px stands for Pixel. Pixels can be defined as 1/96th part of an inch.
      </Para>
      <Para>
        Pixels are widely used in websites to make elements of fixed sizes (ex:
        font-size:14px;) i.e we don't want them to change size with screen size
        variation.
      </Para>
      <H2>CSS - pt</H2>
      <Para>
        pt stands for point. 1 CSS pt is defined as 1/72th of an inch.
      </Para>
      <Para>
        This unit is mainly used in printers for printing the output on paper
        and not so widely used for on-screen outputs.
      </Para>
      <H2>CSS - pc</H2>
      <Para>
        pc stands for pica or picas. 1 CSS pt is defined as 1/6th of an inch.
      </Para>
      <Para>
        This unit is mainly used in printers for printing the output on paper
        and not so widely used for on-screen outputs.
      </Para>
      <H2>CSS - cm</H2>
      <Para>cm stands for centimeter. this also similar to pt and pc</Para>
      <H2>CSS - mm</H2>
      <Para>mm stands for millimeter. this also similar to pt,cm and pc</Para>
      <H2>CSS - in</H2>
      <Para>mm stands for inch. this also similar to pt,pc,cm and mm</Para>
      <Space />

      <H3>Equivalence of Absolute Units</H3>
      <Table>
        <thead>
          <tr>
            <th>UNIT</th>
            <th>EQUAL TO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>pixel</td>
            <td>1px = 1/96th of an inch</td>
          </tr>
          <tr>
            <td>point</td>
            <td>1pt = 1/72th of an inch</td>
          </tr>
          <tr>
            <td>pica</td>
            <td>1pc = 1/6th of an inch</td>
          </tr>
          <tr>
            <td>centimeter</td>
            <td>2.54 cm = 1 inch</td>
          </tr>
          <tr>
            <td>millimeter</td>
            <td>10mm = 1cm</td>
          </tr>
        </tbody>
      </Table>

      <H2>Relative units</H2>
      <List
        items={[
          "Percentage",
          "em",
          "rem",
          "ch",
          "vh",
          "vw",
          "vmin",
          "vmax",
          "ex",
        ]}
      />
      <Para>
        These units are relative to some other length property like the parent
        element's font size or the size of the viewport.
      </Para>
      <Para>
        In relative units, we talk in terms of the same property, like, if we
        are talking about width of an element in relative units then it is
        relative to the WIDTH of the parent element/viewport.
      </Para>
      <Para>
        Relative units, if used correctly, are suitable for making elements
        scale properly with respect to other things on the same page
      </Para>

      <H2>CSS - % (percentage)</H2>
      <Para>
        Percentage is widely used for making responsive sites. This allows us to
        size HTML elements dynamically relative to the size of the viewing
        window.
      </Para>
      <H2>CSS - em</H2>
      <Para>
        1em refers to the default size of the property. So precisely, 1em is
        equivalent to 100%.
      </Para>
      <Para>
        This is mostly used to achieve the same values dynamically as is the
        case with % but applicable specifically to font size.
      </Para>
      <H2>CSS - rem</H2>
      <Para>
        This unit counters the adding-up effect of units like % and em. rem
        rather stands for Root em.
      </Para>
      <Para>
        This is used to achieve the values relative to the root/default value of
        the HTML elements. This is usually used for font-size property.
      </Para>
      <H2>CSS - vh</H2>
      <Para>
        This stands for view height. If we want our element to have exactly the
        same height as your viewport/ view window then use 100vh to denote that.
      </Para>
      <Para>
        Mainly used for pages that occupy the entire height of the viewport.
      </Para>
      <H2>CSS - vw</H2>
      <Para>
        vw stands for View Width. 100vw means 100% the width of the
        viewport/view window.
      </Para>
      <Para>
        Mainly used when the element width needs to be framed w.r.t the width of
        the viewport.
      </Para>
      <Space />
      <H1>In conclusion</H1>
      <H2>%</H2>
      <Para>Depending Upon Parent</Para>
      <H2>em</H2>

      <Para>
        <HL> 1em = 16px </HL> browser default size
      </Para>
      <Para>
        1em = base value <HL>16px * 1 =&gt; 16px</HL>
      </Para>
      <Para>
        2em = base value <HL>16px * 2 =&gt; 32px</HL>
      </Para>
      <Para bold>Suppose setting change</Para>
      <Para>
        2em = base value <HL>10px * 2 =&gt; 32px</HL>
      </Para>
      <Note>Also used decimal value</Note>

      <List
        items={[
          "if you give em in font or other, then get size based upon browser(default is 16px) if parent and root element does not exist",
          "Suppose parent are given but root element is not given, then get size based upon parent size",
          "Suppose parent are not given but exist root element value, then get size based upon root element",
        ]}
      />
      <H2>rem</H2>
      <Para bold>html is root element for all element</Para>
      <List
        items={[
          "if you give rem in font or other, then get size based upon browser if does not exist html size and this unit not affected by parent",
          "suppose html size are given, then get size based upon html size",
        ]}
      />
      <H2>vh and vw</H2>
      <Para>It used for full screen website</Para>
      <H2>vmax and vmin</H2>
      <List
        items={[
          "it work based upon maximum in viewport(width or height) Suppose you set width 20vmax and maximum viewport is width, then it is work based upon width and 20% in width and vice versa",
          "It is same for vmin but take value based upon minimum in viewport",
        ]}
      />
    </>
  );
};

export default Units;
