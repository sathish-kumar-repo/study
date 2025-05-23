import { List } from "@mui/material";
import PythonIntroduction from "../code/01_Python Introduction";
import Keywords from "../code/02_Keywords";
import Variables from "../code/03_Variables";
import InputFunction from "../code/04_Input Function";
import SingleAndMultilineCommend from "../code/05_Single And Multiline Commend";
import TypeCasting from "../code/06_Type Casting";
import StringManipulation from "../code/07_String Manipulation";
import ArithmeticOperators from "../code/08_Arithmetic Operators";
import AssignmentOperators from "../code/09_Assignment Operators";
import ComparisonOperatorsOrRelationalOperators from "../code/10_Comparison Operators Or Relational Operators";
import LogicalOperators from "../code/11_Logical Operators";
import BitwiseOperators from "../code/12_Bitwise Operators";
import IdentityOperators from "../code/13_Identity Operators";
import MembershipOperators from "../code/14_Membership Operators";
import IfStatement from "../code/15_If Statement";
import IfElseStatement from "../code/16_If Else Statement";
import ElifStatement from "../code/17_Elif Statement";
import NestedIfStatement from "../code/18_Nested If Statement";
import WhileLoop from "../code/19_While Loop";
import ContinueUsingWhileLoop from "../code/20_Continue Using While Loop";
import BreakUsingWhileLoop from "../code/21_Break Using While Loop";
import RangeInPython from "../code/22_Range In Python";
import ForLoop from "../code/23_For Loop";
import NestedForLoop from "../code/24_Nested For Loop";
import WhileElseAndForElse from "../code/25_While Else And For Else";
import Tuple from "../code/27_Tuple";
import Dictionary from "../code/29_Dictionary";
import FunctionsAndTypes from "../code/30_Functions And Types";
import TryBlock from "../code/31_Try Block";
import ClassAndObject from "../code/32_Class And Object";
import ClassAttributes from "../code/33_Class Attributes";
import InstanceAttributes from "../code/34_Instance Attributes";
import ClassMethod from "../code/35_Class Method";
import InstanceMethod from "../code/36_Instance Method";
import InitMethod from "../code/37_Init Method";
import PropertyDecorator from "../code/38_Property Decorator";
import PropertyDecoratorGetterSetter from "../code/39_Property Decorator Getter Setter";
import PropertyMethod from "../code/40_Property Method";
import ClassMethodDecorator from "../code/41_Class Method Decorator";
import StaticMethod from "../code/42_Static Method";
import AbstractionAndEncapsulation from "../code/43_Abstraction And Encapsulation";
import SingleInheritance from "../code/44_Single Inheritance";
import MultipleInheritance from "../code/45_Multiple Inheritance";
import MultilevelInheritance from "../code/46_Multilevel Inheritance";
import FunctionOverriding from "../code/47_Function Overriding";
import HandlingDiamondProblemInPython from "../code/48_Handling Diamond Problem In Python";
import OperatorOverloading from "../code/49_Operator Overloading";
import AbstractBaseClass from "../code/50_Abstract Base Class";
import OpenAFile from "../code/51_Open A File";
import Sqlite3 from "../code/52_Sqlite3";
import SetPy from "../code/28_Set";

const pythonContent = {
  about: {
    subCategory: "Programming Languages",
    name: "Learn Python",
    description:
      "Start learning Python, a popular, easy-to-learn programming language used for web development, data science, automation, and more.",
    img: "python.jpg",
  },
  route: [
    {
      topic: "Python Introduction",
      page: <PythonIntroduction />,
    },
    {
      topic: "Keywords",
      page: <Keywords />,
    },
    {
      topic: "Variables",
      page: <Variables />,
    },
    {
      topic: "Input Function",
      page: <InputFunction />,
    },
    {
      topic: "Single And Multiline Commend",
      page: <SingleAndMultilineCommend />,
    },
    {
      topic: "Type Casting",
      page: <TypeCasting />,
    },
    {
      topic: "String Manipulation",
      page: <StringManipulation />,
    },
    {
      topic: "Arithmetic Operators",
      page: <ArithmeticOperators />,
    },
    {
      topic: "Assignment Operators",
      page: <AssignmentOperators />,
    },
    {
      topic: "Comparison Operators Or Relational Operators",
      page: <ComparisonOperatorsOrRelationalOperators />,
    },
    {
      topic: "Logical Operators",
      page: <LogicalOperators />,
    },
    {
      topic: "Bitwise Operators",
      page: <BitwiseOperators />,
    },
    {
      topic: "Identity Operators",
      page: <IdentityOperators />,
    },
    {
      topic: "Membership Operators",
      page: <MembershipOperators />,
    },
    {
      topic: "If Statement",
      page: <IfStatement />,
    },
    {
      topic: "If Else Statement",
      page: <IfElseStatement />,
    },
    {
      topic: "Elif Statement",
      page: <ElifStatement />,
    },
    {
      topic: "Nested If Statement",
      page: <NestedIfStatement />,
    },
    {
      topic: "While Loop",
      page: <WhileLoop />,
    },
    {
      topic: "Continue Using While Loop",
      page: <ContinueUsingWhileLoop />,
    },
    {
      topic: "Break Using While Loop",
      page: <BreakUsingWhileLoop />,
    },
    {
      topic: "Range In Python",
      page: <RangeInPython />,
    },
    {
      topic: "For Loop",
      page: <ForLoop />,
    },
    {
      topic: "Nested For Loop",
      page: <NestedForLoop />,
    },
    {
      topic: "While Else And For Else",
      page: <WhileElseAndForElse />,
    },
    {
      topic: "List",
      page: <List />,
    },
    {
      topic: "Tuple",
      page: <Tuple />,
    },
    {
      topic: "Set",
      page: <SetPy />,
    },
    {
      topic: "Dictionary",
      page: <Dictionary />,
    },
    {
      topic: "Functions And Types",
      page: <FunctionsAndTypes />,
    },
    {
      topic: "Try Block",
      page: <TryBlock />,
    },
    {
      topic: "Class And Object",
      page: <ClassAndObject />,
    },
    {
      topic: "Class Attributes",
      page: <ClassAttributes />,
    },
    {
      topic: "Instance Attributes",
      page: <InstanceAttributes />,
    },
    {
      topic: "Class Method",
      page: <ClassMethod />,
    },
    {
      topic: "Instance Method",
      page: <InstanceMethod />,
    },
    {
      topic: "Init Method",
      page: <InitMethod />,
    },
    {
      topic: "Property Decorator",
      page: <PropertyDecorator />,
    },
    {
      topic: "Property Decorator Getter Setter",
      page: <PropertyDecoratorGetterSetter />,
    },
    {
      topic: "Property Method",
      page: <PropertyMethod />,
    },
    {
      topic: "Class Method Decorator",
      page: <ClassMethodDecorator />,
    },
    {
      topic: "Static Method",
      page: <StaticMethod />,
    },
    {
      topic: "Abstraction And Encapsulation",
      page: <AbstractionAndEncapsulation />,
    },
    {
      topic: "Single Inheritance",
      page: <SingleInheritance />,
    },
    {
      topic: "Multiple Inheritance",
      page: <MultipleInheritance />,
    },
    {
      topic: "Multilevel Inheritance",
      page: <MultilevelInheritance />,
    },
    {
      topic: "Function Overriding",
      page: <FunctionOverriding />,
    },
    {
      topic: "Handling Diamond Problem In Python",
      page: <HandlingDiamondProblemInPython />,
    },
    {
      topic: "Operator Overloading",
      page: <OperatorOverloading />,
    },
    {
      topic: "Abstract Base Class",
      page: <AbstractBaseClass />,
    },
    {
      topic: "Open A File",
      page: <OpenAFile />,
    },
    {
      topic: "Sqlite3",
      page: <Sqlite3 />,
    },
  ],
};

export default pythonContent;
